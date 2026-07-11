import type { Menu, ShoppingCategory } from "../data/types";
import { SHOPPING_SECTION_LABEL, SHOPPING_SECTION_ORDER } from "./format";

export type ShoppingItem = {
  name: string;
  qtyText: string;
  category: ShoppingCategory;
  fromMenus: string[];
  availability: "pasar" | "supermarket";
};

/**
 * Seed quantities are authored for a typical family portion (~4 servings), so we
 * scale relative to that base rather than multiplying raw per-serving amounts.
 */
const BASE_SERVINGS = 4;

/** Parse a leading amount from a qty hint like "100 gr", "1/2 buah", "2 sdm". */
function parseQty(qty: string): { num: number; unit: string } | null {
  const trimmed = qty.trim();
  const frac = trimmed.match(/^(\d+)\/(\d+)\s*(.*)$/);
  if (frac) {
    const n = Number(frac[1]) / Number(frac[2]);
    if (Number.isFinite(n) && n > 0) return { num: n, unit: frac[3].trim() };
  }
  const dec = trimmed.match(/^(\d+(?:[.,]\d+)?)\s*(.*)$/);
  if (dec) {
    const n = Number(dec[1].replace(",", "."));
    if (Number.isFinite(n) && n > 0) return { num: n, unit: dec[2].trim() };
  }
  return null;
}

function formatNum(n: number): string {
  const rounded = Math.round(n * 100) / 100;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

/**
 * Consolidate a week's menus into a merged shopping list, scaled by servings.
 * Staples (garam, minyak, kecap…) are excluded by default.
 */
export function buildShoppingList(
  menus: Menu[],
  servings: number,
  includeStaples = false
): ShoppingItem[] {
  type Acc = {
    name: string;
    category: ShoppingCategory;
    availability: "pasar" | "supermarket";
    fromMenus: Set<string>;
    unitTotals: Map<string, number>;
    freeText: string[];
  };
  const byName = new Map<string, Acc>();
  const factor = servings / BASE_SERVINGS;

  for (const menu of menus) {
    for (const ing of menu.ingredients) {
      if (ing.staple && !includeStaples) continue;
      let acc = byName.get(ing.name);
      if (!acc) {
        acc = {
          name: ing.name,
          category: ing.shoppingCategory,
          availability: ing.availability,
          fromMenus: new Set(),
          unitTotals: new Map(),
          freeText: []
        };
        byName.set(ing.name, acc);
      }
      acc.fromMenus.add(menu.name);
      if (ing.availability === "supermarket") acc.availability = "supermarket";

      const parsed = parseQty(ing.qtyPerServing);
      if (parsed) {
        const key = parsed.unit || "buah";
        acc.unitTotals.set(key, (acc.unitTotals.get(key) ?? 0) + parsed.num * factor);
      } else {
        acc.freeText.push(ing.qtyPerServing.trim());
      }
    }
  }

  const items: ShoppingItem[] = [];
  for (const acc of byName.values()) {
    const parts: string[] = [];
    for (const [unit, total] of acc.unitTotals) {
      parts.push(`${formatNum(total)}${unit ? " " + unit : ""}`.trim());
    }
    const uniqueFree = [...new Set(acc.freeText)].filter((t) => t && t !== "secukupnya");
    if (!parts.length && acc.freeText.includes("secukupnya")) parts.push("secukupnya");
    parts.push(...uniqueFree);

    items.push({
      name: acc.name,
      qtyText: parts.join(" + ") || `untuk ${servings} porsi`,
      category: acc.category,
      fromMenus: [...acc.fromMenus],
      availability: acc.availability
    });
  }

  items.sort((a, b) => a.name.localeCompare(b.name));
  return items;
}

export function groupBySection(
  items: ShoppingItem[]
): { category: ShoppingCategory; label: string; items: ShoppingItem[] }[] {
  return SHOPPING_SECTION_ORDER.map((category) => ({
    category,
    label: SHOPPING_SECTION_LABEL[category],
    items: items.filter((i) => i.category === category)
  })).filter((s) => s.items.length > 0);
}

/** Clean plain-text version moms can paste into WhatsApp. */
export function toWhatsAppText(
  items: ShoppingItem[],
  opts: { title?: string; checkedNames?: Set<string> } = {}
): string {
  const sections = groupBySection(items.filter((i) => !opts.checkedNames?.has(i.name)));
  const lines: string[] = [];
  lines.push(opts.title ?? "🛒 Daftar Belanja MasakApa");
  lines.push("");
  for (const section of sections) {
    lines.push(`*${section.label}*`);
    for (const item of section.items) {
      const tag = item.availability === "supermarket" ? " (supermarket)" : "";
      lines.push(`- ${item.name} — ${item.qtyText}${tag}`);
    }
    lines.push("");
  }
  lines.push("Dari MasakApa 🍚");
  return lines.join("\n").trim();
}

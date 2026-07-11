import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMenu } from "../data/menus";
import type { Menu } from "../data/types";
import { useStore } from "../lib/store";
import { buildShoppingList, groupBySection, toWhatsAppText } from "../lib/shopping";
import { Card, EmptyState, PrimaryButton, Tag } from "../components/ui";

export default function DaftarBelanja() {
  const store = useStore();
  const navigate = useNavigate();
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [copied, setCopied] = useState(false);

  const servings = store.week?.servings ?? store.household.defaultServings;

  const menus = useMemo<Menu[]>(() => {
    if (!store.week) return [];
    return store.week.dayMenuIds
      .flat()
      .map((id) => getMenu(id))
      .filter((m): m is Menu => !!m);
  }, [store.week]);

  const items = useMemo(() => buildShoppingList(menus, servings), [menus, servings]);
  const sections = useMemo(() => groupBySection(items), [items]);

  const toggle = (name: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(name)) next.delete(name);
      else next.add(name);
      return next;
    });

  const copyWA = async () => {
    const text = toWhatsAppText(items, {
      title: "🛒 Daftar Belanja MasakApa",
      checkedNames: checked
    });
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.prompt("Salin daftar ini:", text);
    }
  };

  if (!menus.length) {
    return (
      <div className="px-4 pt-4">
        <h1 className="mb-3 text-2xl font-extrabold text-warm-800">Daftar Belanja</h1>
        <EmptyState emoji="🛒" title="Belum ada daftar belanja">
          Susun dulu menu mingguan, nanti daftar belanjanya kami buatkan otomatis.
        </EmptyState>
        <PrimaryButton className="mt-4 w-full" onClick={() => navigate("/minggu")}>
          🗓️ Ke Menu Minggu Ini
        </PrimaryButton>
      </div>
    );
  }

  const remaining = items.length - checked.size;

  return (
    <div className="px-4 pt-4">
      <header className="mb-3">
        <h1 className="text-2xl font-extrabold text-warm-800">Daftar Belanja</h1>
        <p className="text-sm text-stone-500">
          Dari menu minggu ini · untuk {servings} porsi · {remaining} item belum dicoret.
          Bumbu dapur pokok (garam, minyak, kecap) nggak dimasukin.
        </p>
      </header>

      <div className="space-y-4">
        {sections.map((section) => (
          <Card key={section.category} className="overflow-hidden">
            <div className="border-b border-warm-50 bg-warm-50/60 px-4 py-2 text-sm font-bold text-warm-700">
              {section.label}
            </div>
            <ul className="divide-y divide-warm-50">
              {section.items.map((item) => {
                const done = checked.has(item.name);
                return (
                  <li key={item.name} className="flex items-center gap-3 px-4 py-2.5">
                    <button
                      type="button"
                      onClick={() => toggle(item.name)}
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs ${
                        done
                          ? "border-green-500 bg-green-500 text-white"
                          : "border-warm-300 text-transparent"
                      }`}
                      aria-label={done ? "batal coret" : "sudah punya"}
                    >
                      ✓
                    </button>
                    <div className={`min-w-0 flex-1 ${done ? "opacity-40 line-through" : ""}`}>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-stone-800">{item.name}</span>
                        {item.availability === "supermarket" && (
                          <Tag tone="muted">supermarket</Tag>
                        )}
                      </div>
                      <div className="text-xs text-stone-400">{item.qtyText}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Card>
        ))}
      </div>

      <div className="sticky bottom-2 mt-5">
        <PrimaryButton className="w-full text-lg shadow-lg" onClick={copyWA}>
          {copied ? "✅ Tersalin!" : "💬 Salin untuk WhatsApp"}
        </PrimaryButton>
      </div>
    </div>
  );
}

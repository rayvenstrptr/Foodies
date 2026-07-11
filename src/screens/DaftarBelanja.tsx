import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMenu } from "../data/menus";
import type { Menu, ShoppingCategory } from "../data/types";
import { useStore } from "../lib/store";
import { buildShoppingList, groupBySection, toWhatsAppText } from "../lib/shopping";
import { EmptyState, PrimaryButton, ScreenHeader } from "../components/ui";
import { ChatIcon } from "../components/icons";

const SECTION_EMOJI: Record<ShoppingCategory, string> = {
  sayuran_bumbu_segar: "🥬",
  protein: "🍗",
  bumbu_dapur: "🧂",
  sembako: "🍚",
  lainnya: "🛒"
};

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
      <div className="px-5 pt-5">
        <ScreenHeader kicker="Dari menu minggu ini 🛒" title="Daftar Belanja" />
        <div className="mt-6">
          <EmptyState emoji="🛒" title="Belum ada daftar belanja">
            Susun dulu menu mingguan, nanti daftar belanjanya kami buatkan otomatis.
          </EmptyState>
        </div>
        <PrimaryButton className="mt-4 w-full" onClick={() => navigate("/minggu")}>
          Ke Menu Minggu Ini 🗓️
        </PrimaryButton>
      </div>
    );
  }

  const done = checked.size;
  const total = items.length;
  const pct = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="px-5 pt-5">
      <ScreenHeader kicker="Dari menu minggu ini 🛒" title="Daftar Belanja" />

      {/* Progress */}
      <div className="mt-3 rounded-[20px] border border-border bg-surface px-4 py-3.5">
        <div className="h-2 overflow-hidden rounded-full bg-thumb">
          <div
            className="h-full rounded-full bg-leaf transition-all duration-300"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="mt-1.5 text-xs font-semibold text-muted">
          {done} dari {total} item dicoret · untuk {servings} porsi
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3.5">
        {sections.map((section) => (
          <div key={section.category}>
            <div className="mx-1 mb-2 text-xs font-extrabold uppercase tracking-[0.1em] text-primary">
              {SECTION_EMOJI[section.category]} {section.label}
            </div>
            <div className="overflow-hidden rounded-[20px] border border-border bg-surface">
              {section.items.map((item) => {
                const isDone = checked.has(item.name);
                return (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => toggle(item.name)}
                    className="flex w-full items-center gap-3 border-t border-divider px-4 py-3 text-left first:border-t-0"
                    aria-label={isDone ? "batal coret" : "sudah punya"}
                  >
                    <span
                      className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[9px] text-[13px] font-extrabold ${
                        isDone
                          ? "bg-leaf text-white"
                          : "border-2 border-line-dashed text-transparent"
                      }`}
                    >
                      ✓
                    </span>
                    <div
                      className={`min-w-0 flex-1 ${isDone ? "line-through opacity-45" : ""}`}
                    >
                      <span className="text-[14.5px] font-semibold text-ink">{item.name}</span>
                      <span className="ml-2 text-xs text-muted-2">{item.qtyText}</span>
                      {item.availability === "supermarket" && (
                        <span className="ml-2 rounded-full bg-thumb px-2 py-px text-[10.5px] font-bold text-muted">
                          supermarket
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-3 mt-4.5">
        <PrimaryButton
          className="flex w-full items-center justify-center gap-2 text-[15.5px]"
          onClick={copyWA}
        >
          <ChatIcon size={17} />
          <span>{copied ? "Tersalin!" : "Salin untuk WhatsApp"}</span>
        </PrimaryButton>
      </div>
    </div>
  );
}

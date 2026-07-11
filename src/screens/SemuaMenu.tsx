import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MENUS } from "../data/menus";
import type { Cuisine, MenuCategory, Protein } from "../data/types";
import {
  CATEGORY_LABEL,
  effortLabel,
  PRICE_LABEL,
  PROTEIN_LABEL
} from "../lib/format";
import { useStore } from "../lib/store";
import { Card, GhostButton, Tag } from "../components/ui";

const CUISINE_LABEL: Record<Cuisine, string> = {
  indonesia: "Indonesia",
  chinese_indo: "Chinese",
  western_simple: "Western"
};

export default function SemuaMenu() {
  const navigate = useNavigate();
  const store = useStore();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<MenuCategory | "all">("all");
  const [cui, setCui] = useState<Cuisine | "all">("all");
  const [pro, setPro] = useState<Protein | "all">("all");

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    return MENUS.filter((m) => {
      if (cat !== "all" && m.category !== cat) return false;
      if (cui !== "all" && m.cuisine !== cui) return false;
      if (pro !== "all" && m.protein !== pro) return false;
      if (query && !m.name.toLowerCase().includes(query) && !m.tags.some((t) => t.includes(query)))
        return false;
      return true;
    });
  }, [q, cat, cui, pro]);

  return (
    <div className="px-4 pt-4">
      <header className="mb-3">
        <h1 className="text-2xl font-extrabold text-warm-800">Semua Menu</h1>
        <p className="text-sm text-stone-500">{MENUS.length} resep rumahan. Cari atau saring.</p>
      </header>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Cari nama menu… mis. gulai, tumis, telur"
        className="w-full rounded-2xl border border-warm-200 bg-white px-4 py-3 outline-none focus:border-warm-500"
      />

      <div className="mt-3 space-y-2">
        <div className="flex gap-2 overflow-x-auto pb-1">
          <GhostButton active={cat === "all"} onClick={() => setCat("all")}>
            Semua jenis
          </GhostButton>
          {(Object.keys(CATEGORY_LABEL) as MenuCategory[]).map((c) => (
            <GhostButton key={c} active={cat === c} onClick={() => setCat(c)} className="whitespace-nowrap">
              {CATEGORY_LABEL[c]}
            </GhostButton>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <GhostButton active={cui === "all"} onClick={() => setCui("all")}>
            Semua masakan
          </GhostButton>
          {(Object.keys(CUISINE_LABEL) as Cuisine[]).map((c) => (
            <GhostButton key={c} active={cui === c} onClick={() => setCui(c)} className="whitespace-nowrap">
              {CUISINE_LABEL[c]}
            </GhostButton>
          ))}
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          <GhostButton active={pro === "all"} onClick={() => setPro("all")}>
            Semua protein
          </GhostButton>
          {(Object.keys(PROTEIN_LABEL) as Protein[]).map((p) => (
            <GhostButton key={p} active={pro === p} onClick={() => setPro(p)} className="whitespace-nowrap">
              {PROTEIN_LABEL[p]}
            </GhostButton>
          ))}
        </div>
      </div>

      <div className="mt-3 text-xs text-stone-400">{results.length} menu ditemukan</div>

      <div className="mt-2 space-y-2 pb-2">
        {results.map((m) => (
          <Card key={m.id} className="p-3">
            <button
              type="button"
              onClick={() => navigate(`/menu/${m.id}`)}
              className="flex w-full items-center gap-3 text-left"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-100 text-2xl">
                🍲
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="truncate font-semibold text-stone-800">{m.name}</span>
                  {store.isFavorite(m.id) && <span>❤️</span>}
                  {store.isBanned(m.id) && <span>🚫</span>}
                </div>
                <div className="text-xs text-stone-400">
                  {CATEGORY_LABEL[m.category]} · {effortLabel(m.effortMinutes)} ·{" "}
                  {PRICE_LABEL[m.priceTier]}
                </div>
              </div>
              {m.spiceBase >= 2 && <Tag tone="red">pedas</Tag>}
            </button>
          </Card>
        ))}
        {results.length === 0 && (
          <div className="rounded-2xl bg-warm-50 px-6 py-10 text-center text-sm text-stone-500">
            Nggak ada menu yang cocok. Coba longgarkan filternya.
          </div>
        )}
      </div>
    </div>
  );
}

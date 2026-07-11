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
import { Chip, isVegCategory, ScreenHeader, Thumb } from "../components/ui";
import { BanIcon, HeartIcon, SearchIcon } from "../components/icons";

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
    <div className="px-5 pt-5">
      <ScreenHeader kicker={`${MENUS.length} resep rumahan 📖`} title="Semua Menu" />

      {/* Pill search */}
      <div className="mt-3.5 flex items-center gap-2.5 rounded-full border border-border-input bg-surface px-4.5 py-3.5">
        <SearchIcon size={18} className="shrink-0 text-faint" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Cari nama menu… mis. gulai, tumis"
          className="min-w-0 flex-1 bg-transparent text-[14.5px] text-ink outline-none placeholder:text-faint"
        />
      </div>

      {/* Filters */}
      <div className="mt-3 space-y-2">
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
          <Chip active={cat === "all"} onClick={() => setCat("all")} className="whitespace-nowrap">
            Semua jenis
          </Chip>
          {(Object.keys(CATEGORY_LABEL) as MenuCategory[]).map((c) => (
            <Chip
              key={c}
              active={cat === c}
              onClick={() => setCat(c)}
              className="whitespace-nowrap"
            >
              {CATEGORY_LABEL[c]}
            </Chip>
          ))}
        </div>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
          <Chip
            active={pro === "all"}
            variant="dark"
            onClick={() => setPro("all")}
            className="whitespace-nowrap"
          >
            Semua protein
          </Chip>
          {(Object.keys(PROTEIN_LABEL) as Protein[]).map((p) => (
            <Chip
              key={p}
              active={pro === p}
              variant="dark"
              onClick={() => setPro(p)}
              className="whitespace-nowrap"
            >
              {PROTEIN_LABEL[p]}
            </Chip>
          ))}
        </div>
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1">
          <Chip active={cui === "all"} onClick={() => setCui("all")} className="whitespace-nowrap">
            Semua masakan
          </Chip>
          {(Object.keys(CUISINE_LABEL) as Cuisine[]).map((c) => (
            <Chip
              key={c}
              active={cui === c}
              onClick={() => setCui(c)}
              className="whitespace-nowrap"
            >
              {CUISINE_LABEL[c]}
            </Chip>
          ))}
        </div>
      </div>

      <div className="mt-3.5 text-xs font-semibold text-muted-2">
        {results.length} menu ditemukan
      </div>

      {/* 2-column photo grid */}
      <div className="mt-2 grid grid-cols-2 gap-3">
        {results.map((m) => {
          const banned = store.isBanned(m.id);
          const fav = store.isFavorite(m.id);
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => navigate(`/menu/${m.id}`)}
              className={`overflow-hidden rounded-[20px] border border-border bg-surface text-left shadow-card active:scale-[0.99] ${
                banned ? "opacity-55" : ""
              }`}
            >
              <div className="relative">
                <Thumb
                  photo={m.photo}
                  veg={isVegCategory(m.category)}
                  className="h-24 w-full"
                  label="foto menu"
                />
                {m.spiceBase >= 2 && (
                  <span className="absolute left-2 top-2 rounded-full bg-spicy-bg px-2 py-0.5 text-[10px] font-bold text-spicy-text">
                    pedas
                  </span>
                )}
                {banned ? (
                  <span className="absolute right-2 top-2 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-surface/90 text-muted">
                    <BanIcon size={14} />
                  </span>
                ) : (
                  fav && (
                    <span className="absolute right-2 top-2 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-surface/90 text-primary">
                      <HeartIcon size={14} filled />
                    </span>
                  )
                )}
              </div>
              <div className="px-3 pb-3 pt-2.5">
                <div className="text-[13.5px] font-bold leading-tight text-ink">{m.name}</div>
                <div className="mt-1 text-[11px] text-muted-2">
                  {effortLabel(m.effortMinutes)} · {PRICE_LABEL[m.priceTier]}
                </div>
              </div>
            </button>
          );
        })}
      </div>
      {results.length === 0 && (
        <div className="mt-2 rounded-3xl bg-tint px-6 py-10 text-center text-sm text-muted">
          Nggak ada menu yang cocok. Coba longgarkan filternya.
        </div>
      )}
    </div>
  );
}

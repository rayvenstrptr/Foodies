import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ingredientMode } from "../engine";
import { canonicalIngredientName, searchIngredients } from "../data/ingredients";
import { useStore } from "../lib/store";
import { effortLabel, PRICE_LABEL } from "../lib/format";
import { EmptyState, isVegCategory, ScreenHeader, Thumb } from "../components/ui";
import { SearchIcon } from "../components/icons";

function matchColor(pct: number): string {
  if (pct >= 85) return "bg-leaf";
  if (pct >= 65) return "bg-match-mid";
  return "bg-match-low";
}

export default function AdaBahan() {
  const store = useStore();
  const navigate = useNavigate();
  const [owned, setOwned] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const suggestions = useMemo(() => {
    if (!query.trim()) return [];
    return searchIngredients(query, 6).filter((s) => !owned.includes(s.name));
  }, [query, owned]);

  const results = useMemo(() => {
    if (!owned.length) return [];
    return ingredientMode(owned, store.context(), 20);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [owned]);

  const add = (raw: string) => {
    const canon = canonicalIngredientName(raw) ?? raw.trim().toLowerCase();
    if (canon && !owned.includes(canon)) setOwned([...owned, canon]);
    setQuery("");
  };

  const remove = (name: string) => setOwned(owned.filter((o) => o !== name));

  return (
    <div className="px-5 pt-5">
      <ScreenHeader
        kicker="Cek kulkas dulu 🧺"
        title="Ada bahan apa?"
        subtitle="Ketik bahan yang ada. Kami carikan menu yang paling cocok dengan stok kamu."
      />

      {/* Pill search */}
      <div className="relative mt-3.5">
        <div className="flex items-center gap-2.5 rounded-full border border-border-input bg-surface px-4.5 py-3.5">
          <SearchIcon size={18} className="shrink-0 text-faint" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && (suggestions[0] || query.trim())) {
                add(suggestions[0]?.name ?? query);
              }
            }}
            placeholder="Cari bahan… mis. ayam, kangkung"
            className="min-w-0 flex-1 bg-transparent text-[14.5px] text-ink outline-none placeholder:text-faint"
          />
        </div>
        {suggestions.length > 0 && (
          <div className="absolute z-10 mt-1 w-full overflow-hidden rounded-2xl border border-border bg-surface shadow-nav">
            {suggestions.map((s) => (
              <button
                key={s.name}
                type="button"
                onClick={() => add(s.name)}
                className="block w-full px-4 py-2.5 text-left text-sm text-ink hover:bg-tint"
              >
                {s.name}
              </button>
            ))}
          </div>
        )}
      </div>

      {owned.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {owned.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => remove(name)}
              className="rounded-full bg-dark px-3.5 py-2 text-[13px] font-bold text-page active:scale-95"
            >
              {name} ✕
            </button>
          ))}
        </div>
      )}

      <div className="mt-5">
        {owned.length === 0 ? (
          <EmptyState emoji="🧺" title="Belum ada bahan">
            Tambahkan minimal satu bahan untuk lihat menu yang cocok.
          </EmptyState>
        ) : results.length === 0 ? (
          <EmptyState emoji="🤷‍♀️" title="Belum ketemu yang pas">
            Coba tambah bahan lain seperti protein atau sayuran.
          </EmptyState>
        ) : (
          <>
            <div className="text-base font-extrabold text-ink">Paling cocok sama stokmu</div>
            <div className="mt-2.5 flex flex-col gap-3">
              {results.map((r) => {
                const pct = Math.round(r.coverage * 100);
                return (
                  <button
                    key={r.menu.id}
                    type="button"
                    onClick={() => navigate(`/menu/${r.menu.id}`)}
                    className="flex gap-3.5 rounded-3xl border border-border bg-surface p-3.5 text-left shadow-card active:scale-[0.99]"
                  >
                    <Thumb
                      photo={r.menu.photo}
                      veg={isVegCategory(r.menu.category)}
                      className="h-16 w-16 shrink-0 rounded-2xl"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-[15.5px] font-bold text-ink">
                          {r.menu.name}
                        </span>
                        <span
                          className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-extrabold text-white ${matchColor(pct)}`}
                        >
                          {pct}%
                        </span>
                      </div>
                      <div className="mt-0.5 text-xs text-muted-2">
                        {effortLabel(r.menu.effortMinutes)} · {PRICE_LABEL[r.menu.priceTier]}
                      </div>
                      {r.missing.length > 0 ? (
                        <div className="mt-1.5 text-[13px] text-ink-2">
                          Tinggal beli:{" "}
                          <b className="font-bold">
                            {r.missing.slice(0, 5).join(", ")}
                            {r.missing.length > 5 ? `, +${r.missing.length - 5} lagi` : ""}
                          </b>
                        </div>
                      ) : (
                        <div className="mt-1.5 text-[13px] font-bold text-leaf">
                          Semua bahan sudah ada! 🎉
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

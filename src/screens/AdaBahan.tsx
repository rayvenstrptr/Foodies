import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ingredientMode } from "../engine";
import { canonicalIngredientName, searchIngredients } from "../data/ingredients";
import { useStore } from "../lib/store";
import { effortLabel, PRICE_LABEL } from "../lib/format";
import { Card, EmptyState, Tag } from "../components/ui";

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
    <div className="px-4 pt-4">
      <header className="mb-3">
        <h1 className="text-2xl font-extrabold text-warm-800">Ada bahan apa?</h1>
        <p className="text-sm text-stone-500">
          Ketik bahan yang ada di kulkas/dapur. Kami carikan menu yang paling cocok dengan
          stok kamu.
        </p>
      </header>

      <div className="relative">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (suggestions[0] || query.trim())) {
              add(suggestions[0]?.name ?? query);
            }
          }}
          placeholder="Cari bahan… mis. ayam, kangkung, telur"
          className="w-full rounded-2xl border border-warm-200 bg-white px-4 py-3 text-base outline-none focus:border-warm-500"
        />
        {suggestions.length > 0 && (
          <div className="absolute z-10 mt-1 w-full overflow-hidden rounded-2xl border border-warm-100 bg-white shadow-lg">
            {suggestions.map((s) => (
              <button
                key={s.name}
                type="button"
                onClick={() => add(s.name)}
                className="block w-full px-4 py-2.5 text-left text-sm hover:bg-warm-50"
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
              className="rounded-full bg-warm-100 px-3 py-1.5 text-sm font-medium text-warm-800 active:scale-95"
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
          <div className="space-y-3">
            {results.map((r) => {
              const pct = Math.round(r.coverage * 100);
              return (
                <Card key={r.menu.id} className="p-4">
                  <button
                    type="button"
                    onClick={() => navigate(`/menu/${r.menu.id}`)}
                    className="block w-full text-left"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-stone-800">{r.menu.name}</span>
                      <Tag tone={pct >= 70 ? "leaf" : "warm"}>Bahan cukup {pct}%</Tag>
                    </div>
                    <div className="mt-1 text-xs text-stone-400">
                      {effortLabel(r.menu.effortMinutes)} · {PRICE_LABEL[r.menu.priceTier]}
                    </div>
                    {r.missing.length > 0 ? (
                      <div className="mt-1.5 text-sm text-stone-600">
                        Tinggal beli: {r.missing.slice(0, 5).join(", ")}
                        {r.missing.length > 5 ? `, +${r.missing.length - 5} lagi` : ""}.
                      </div>
                    ) : (
                      <div className="mt-1.5 text-sm font-medium text-green-700">
                        Semua bahan (non-pokok) sudah ada! 🎉
                      </div>
                    )}
                  </button>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

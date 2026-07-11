import { useParams, useNavigate } from "react-router-dom";
import { getMenu } from "../data/menus";
import {
  CATEGORY_LABEL,
  DIFFICULTY_LABEL,
  effortLabel,
  METHOD_LABEL,
  PRICE_LABEL,
  PROTEIN_LABEL
} from "../lib/format";
import { useStore } from "../lib/store";
import { Card, Tag } from "../components/ui";

export default function MenuDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const store = useStore();
  const menu = id ? getMenu(id) : undefined;

  if (!menu) {
    return (
      <div className="px-4 pt-6">
        <p className="text-stone-500">Menu tidak ditemukan.</p>
        <button onClick={() => navigate(-1)} className="mt-3 text-warm-700 underline">
          Kembali
        </button>
      </div>
    );
  }

  const fav = store.isFavorite(menu.id);
  const banned = store.isBanned(menu.id);
  const shown = menu.ingredients.filter((i) => !i.staple);
  const staples = menu.ingredients.filter((i) => i.staple);

  return (
    <div className="pb-4">
      {/* Photo placeholder */}
      <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-warm-200 to-warm-400 text-6xl">
        🍽️
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1.5 text-sm font-semibold text-warm-800 backdrop-blur"
        >
          ← Kembali
        </button>
      </div>

      <div className="px-4">
        <h1 className="mt-4 text-2xl font-extrabold text-warm-800">{menu.name}</h1>
        <div className="mt-2 flex flex-wrap gap-1.5">
          <Tag>{CATEGORY_LABEL[menu.category]}</Tag>
          <Tag tone="muted">{PROTEIN_LABEL[menu.protein]}</Tag>
          <Tag tone="muted">{METHOD_LABEL[menu.method]}</Tag>
          {menu.bersantan && menu.method !== "santan" && <Tag tone="muted">bersantan</Tag>}
          {menu.spiceBase >= 2 && <Tag tone="red">pedas</Tag>}
          {menu.segar && <Tag tone="leaf">seger</Tag>}
          {menu.ingredients.some((i) => !i.staple && i.availability === "supermarket") && (
            <Tag tone="muted">perlu supermarket</Tag>
          )}
        </div>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-500">
          <span>⏱️ {effortLabel(menu.effortMinutes)}</span>
          <span>🎚️ {DIFFICULTY_LABEL[menu.difficulty]}</span>
          <span>💰 {PRICE_LABEL[menu.priceTier]}</span>
        </div>

        {/* Favorite / ban */}
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => store.toggleFavorite(menu.id)}
            className={`flex-1 rounded-2xl py-2.5 text-sm font-semibold active:scale-[0.98] ${
              fav ? "bg-red-500 text-white" : "bg-red-50 text-red-600"
            }`}
          >
            {fav ? "❤️ Favorit" : "🤍 Jadikan favorit"}
          </button>
          <button
            type="button"
            onClick={() => store.toggleBanned(menu.id)}
            className={`flex-1 rounded-2xl py-2.5 text-sm font-semibold active:scale-[0.98] ${
              banned ? "bg-stone-700 text-white" : "bg-stone-100 text-stone-600"
            }`}
          >
            {banned ? "🚫 Disembunyikan" : "🚫 Jangan tawarin lagi"}
          </button>
        </div>

        {/* Ingredients */}
        <Card className="mt-5 p-4">
          <h2 className="mb-2 font-bold text-warm-700">Bahan (per porsi)</h2>
          <ul className="space-y-1.5 text-sm">
            {shown.map((ing) => (
              <li key={ing.name} className="flex justify-between gap-3">
                <span className="text-stone-700">
                  {ing.name}
                  {ing.availability === "supermarket" && (
                    <span className="ml-1 text-xs text-stone-400">(supermarket)</span>
                  )}
                </span>
                <span className="shrink-0 text-stone-400">{ing.qtyPerServing}</span>
              </li>
            ))}
          </ul>
          {staples.length > 0 && (
            <p className="mt-3 text-xs text-stone-400">
              Bumbu pokok (dianggap selalu ada): {staples.map((s) => s.name).join(", ")}.
            </p>
          )}
        </Card>

        {/* Steps */}
        <Card className="mt-4 p-4">
          <h2 className="mb-2 font-bold text-warm-700">Cara masak</h2>
          <ol className="space-y-2 text-sm">
            {menu.steps.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm-100 text-xs font-bold text-warm-700">
                  {i + 1}
                </span>
                <span className="text-stone-700">{step}</span>
              </li>
            ))}
          </ol>
        </Card>

        {/* Nutrition */}
        <Card className="mt-4 p-4">
          <h2 className="mb-1 font-bold text-warm-700">Nutrisi</h2>
          <div className="flex gap-6 text-sm text-stone-600">
            <span>± {menu.nutrition.kcalPerServing} kkal/porsi</span>
            <span>± {menu.nutrition.proteinGram} g protein/porsi</span>
          </div>
          <p className="mt-1 text-xs uppercase tracking-wide text-stone-400">
            Perkiraan kasar — bukan angka pasti
          </p>
        </Card>
      </div>
    </div>
  );
}

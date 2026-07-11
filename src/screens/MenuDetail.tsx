import { useParams, useNavigate } from "react-router-dom";
import { getMenu } from "../data/menus";
import {
  CATEGORY_LABEL,
  DIFFICULTY_LABEL,
  PRICE_LABEL,
  PROTEIN_LABEL
} from "../lib/format";
import { useStore } from "../lib/store";
import { isVegCategory, Thumb } from "../components/ui";
import { BanIcon, ChevronLeftIcon, HeartIcon } from "../components/icons";

export default function MenuDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const store = useStore();
  const menu = id ? getMenu(id) : undefined;

  if (!menu) {
    return (
      <div className="px-5 pt-6">
        <p className="text-muted">Menu tidak ditemukan.</p>
        <button onClick={() => navigate(-1)} className="mt-3 font-semibold text-primary underline">
          Kembali
        </button>
      </div>
    );
  }

  const fav = store.isFavorite(menu.id);
  const banned = store.isBanned(menu.id);
  const shown = menu.ingredients.filter((i) => !i.staple);
  const staples = menu.ingredients.filter((i) => i.staple);

  const kicker = [
    CATEGORY_LABEL[menu.category],
    menu.protein !== "none" ? PROTEIN_LABEL[menu.protein] : null
  ]
    .filter(Boolean)
    .join(" · ");

  const chips: string[] = [
    `⏱️ ${menu.effortMinutes} menit`,
    `🎚️ ${DIFFICULTY_LABEL[menu.difficulty]}`,
    `💰 ${PRICE_LABEL[menu.priceTier]}`
  ];
  if (menu.bersantan) chips.push("🥥 santan");
  if (menu.spiceBase >= 2) chips.push("🌶️ pedas");

  return (
    <div className="pb-6">
      {/* Hero */}
      <div className="relative">
        <Thumb
          photo={menu.photo}
          veg={isVegCategory(menu.category)}
          className="h-[210px] w-full text-[10px]"
          label={`foto besar — ${menu.name.toLowerCase()}`}
        />
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="absolute left-3.5 top-3.5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-surface/90 text-ink-2 backdrop-blur active:scale-95"
          aria-label="kembali"
        >
          <ChevronLeftIcon size={18} />
        </button>
        <button
          type="button"
          onClick={() => store.toggleFavorite(menu.id)}
          className="absolute right-3.5 top-3.5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-surface/90 text-primary backdrop-blur active:scale-95"
          aria-label={fav ? "hapus favorit" : "jadikan favorit"}
        >
          <HeartIcon size={17} filled={fav} />
        </button>
      </div>

      {/* Title card overlapping hero */}
      <div className="relative mx-4 -mt-6 rounded-3xl border border-border bg-surface p-[18px] shadow-hero">
        <div className="text-[11px] font-bold uppercase tracking-[0.1em] text-primary">
          {kicker}
        </div>
        <h1 className="mt-1 text-[24px] font-extrabold leading-[29px] tracking-[-0.02em] text-ink">
          {menu.name}
        </h1>
        <div className="mt-2.5 flex flex-wrap gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full bg-thumb px-2.5 py-1.5 text-[11.5px] font-bold text-ink-2"
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2.5 px-4 pt-4">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex-1 rounded-full bg-primary py-3.5 text-center text-sm font-extrabold text-on-primary shadow-btn-sm active:bg-primary-press"
        >
          ＋ Masak hari ini
        </button>
        <button
          type="button"
          onClick={() => store.toggleBanned(menu.id)}
          className={`flex items-center rounded-full border px-4.5 py-3.5 active:scale-95 ${
            banned
              ? "border-dark bg-dark text-page"
              : "border-border-input bg-surface text-muted"
          }`}
          aria-label={banned ? "batal sembunyikan" : "jangan tawarin lagi"}
        >
          <BanIcon size={17} />
        </button>
      </div>

      {/* Ingredients */}
      <div className="mx-4 mt-4 rounded-3xl border border-border bg-surface p-[18px]">
        <h2 className="mb-2.5 text-[15px] font-extrabold text-heading">
          Bahan <span className="text-xs font-semibold text-muted-2">· per porsi</span>
        </h2>
        <div className="flex flex-col gap-[7px] text-sm">
          {shown.map((ing, i) => (
            <div
              key={ing.name}
              className={`flex justify-between gap-3 ${
                i < shown.length - 1 ? "border-b border-dashed border-border pb-[7px]" : ""
              }`}
            >
              <span className="font-semibold text-ink">
                {ing.name}
                {ing.availability === "supermarket" && (
                  <span className="ml-2 rounded-full bg-thumb px-2 py-px text-[10.5px] font-bold text-muted">
                    supermarket
                  </span>
                )}
              </span>
              <span className="shrink-0 text-muted-2">{ing.qtyPerServing}</span>
            </div>
          ))}
        </div>
        {staples.length > 0 && (
          <p className="mt-3 text-[11.5px] text-faint">
            Bumbu pokok (dianggap selalu ada): {staples.map((s) => s.name).join(", ")}.
          </p>
        )}
      </div>

      {/* Steps */}
      <div className="mx-4 mt-3.5 rounded-3xl border border-border bg-surface p-[18px]">
        <h2 className="mb-3 text-[15px] font-extrabold text-heading">Cara masak</h2>
        <div className="flex flex-col gap-3 text-sm">
          {menu.steps.map((step, i) => (
            <div key={i} className="flex gap-3">
              <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-on-primary">
                {i + 1}
              </span>
              <span className="leading-relaxed text-body">{step}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Nutrition */}
      <div className="mx-4 mt-3.5 flex items-center gap-[18px] rounded-3xl bg-tint px-[18px] py-4">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-faint">Energi</div>
          <div className="text-[15px] font-extrabold text-ink">
            ± {menu.nutrition.kcalPerServing} kkal
          </div>
        </div>
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-faint">Protein</div>
          <div className="text-[15px] font-extrabold text-ink">
            ± {menu.nutrition.proteinGram} g
          </div>
        </div>
        <div className="flex-1 text-right text-[10.5px] text-faint">
          perkiraan kasar,
          <br />
          bukan angka pasti
        </div>
      </div>
    </div>
  );
}

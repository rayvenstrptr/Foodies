import type { DaySet } from "../engine";
import { CATEGORY_LABEL, effortLabel, PRICE_LABEL, SLOT_LABEL } from "../lib/format";
import { Card, Tag } from "./ui";

export function DaySetCard({
  day,
  onReroll,
  onOpenMenu,
  title,
  headerRight
}: {
  day: DaySet;
  onReroll?: (slotIndex: number) => void;
  onOpenMenu?: (menuId: string) => void;
  title?: string;
  headerRight?: React.ReactNode;
}) {
  return (
    <Card className="overflow-hidden">
      {(title || headerRight) && (
        <div className="flex items-center justify-between border-b border-warm-50 px-4 py-2.5">
          <span className="font-bold text-warm-800">{title}</span>
          {headerRight}
        </div>
      )}

      <ul className="divide-y divide-warm-50">
        {day.items.map((item, i) => (
          <li key={item.menu.id} className="flex items-center gap-3 px-4 py-3">
            <button
              type="button"
              onClick={() => onOpenMenu?.(item.menu.id)}
              className="min-w-0 flex-1 text-left"
            >
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-wide text-warm-500">
                  {SLOT_LABEL[item.slot] ?? CATEGORY_LABEL[item.menu.category]}
                </span>
                {item.menu.bersantan && <Tag tone="muted">santan</Tag>}
                {item.menu.spiceBase >= 2 && <Tag tone="red">pedas</Tag>}
              </div>
              <div className="truncate font-semibold text-stone-800">{item.menu.name}</div>
              <div className="mt-0.5 text-xs text-stone-400">
                {effortLabel(item.menu.effortMinutes)}
                {item.menu.ingredients.some(
                  (ing) => !ing.staple && ing.availability === "supermarket"
                ) && " · perlu ke supermarket"}
              </div>
            </button>
            {onReroll && item.slot !== "one_dish" && (
              <button
                type="button"
                onClick={() => onReroll(i)}
                className="shrink-0 rounded-full bg-warm-50 px-3 py-1.5 text-xs font-semibold text-warm-700 active:scale-95"
              >
                🔄 Ganti
              </button>
            )}
          </li>
        ))}
      </ul>

      <div className="bg-warm-50/60 px-4 py-3">
        <p className="text-sm leading-snug text-stone-700">💡 {day.reason}</p>
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-500">
          <span>⏱️ total {day.totalEffortMinutes} menit</span>
          <span>💰 {PRICE_LABEL[day.priceTier]}</span>
          <span>
            🔥 ± {day.nutrition.kcalPerServing} kkal · {day.nutrition.proteinGram} g protein /
            porsi
          </span>
        </div>
        <div className="mt-1 text-[10px] uppercase tracking-wide text-stone-400">
          Nutrisi cuma perkiraan kasar
        </div>
      </div>
    </Card>
  );
}

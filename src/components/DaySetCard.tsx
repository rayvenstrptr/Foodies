import type { DaySet } from "../engine";
import { CATEGORY_LABEL, effortLabel, PRICE_LABEL, SLOT_LABEL } from "../lib/format";
import { RefreshIcon } from "./icons";
import { Card, isVegCategory, Tag, Thumb } from "./ui";

export function DaySetCard({
  day,
  onReroll,
  onOpenMenu,
  title,
  headerRight,
  variant = "today"
}: {
  day: DaySet;
  onReroll?: (slotIndex: number) => void;
  onOpenMenu?: (menuId: string) => void;
  title?: string;
  headerRight?: React.ReactNode;
  variant?: "today" | "week";
}) {
  const isToday = variant === "today";
  const thumbSize = isToday ? "h-14 w-14 rounded-2xl" : "h-12 w-12 rounded-[14px]";
  const refreshSize = isToday ? "h-9 w-9" : "h-[34px] w-[34px]";
  const nameSize = isToday ? "text-[15.5px]" : "text-[15px]";

  return (
    <Card className="overflow-hidden">
      {(title || headerRight) && (
        <div className="flex items-center justify-between bg-tint px-4 py-3">
          <span className="text-[15px] font-extrabold text-heading">{title}</span>
          {headerRight}
        </div>
      )}

      <ul>
        {day.items.map((item, i) => {
          const veg = isVegCategory(item.menu.category);
          return (
            <li
              key={item.menu.id}
              className="flex items-center gap-3.5 border-t border-divider px-4 py-3.5 first:border-t-0"
            >
              <button
                type="button"
                onClick={() => onOpenMenu?.(item.menu.id)}
                className="flex min-w-0 flex-1 items-center gap-3.5 text-left"
              >
                <Thumb photo={item.menu.photo} veg={veg} className={`${thumbSize} shrink-0`} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span
                      className={`text-[10.5px] font-bold uppercase tracking-[0.08em] ${
                        veg ? "text-leaf" : "text-primary"
                      }`}
                    >
                      {SLOT_LABEL[item.slot] ?? CATEGORY_LABEL[item.menu.category]}
                    </span>
                    {item.menu.spiceBase >= 2 && <Tag tone="spicy">pedas</Tag>}
                    {item.menu.bersantan && <Tag tone="warm">santan</Tag>}
                  </div>
                  <div className={`truncate font-bold ${nameSize} text-ink`}>
                    {item.menu.name}
                  </div>
                  <div className="mt-px text-xs text-muted-2">
                    {effortLabel(item.menu.effortMinutes)}
                  </div>
                </div>
              </button>
              {onReroll && item.slot !== "one_dish" && (
                <button
                  type="button"
                  onClick={() => onReroll(i)}
                  className={`flex ${refreshSize} shrink-0 items-center justify-center rounded-full bg-thumb text-ink-2 active:scale-90`}
                  aria-label="ganti"
                >
                  <RefreshIcon size={16} />
                </button>
              )}
            </li>
          );
        })}
      </ul>

      {isToday ? (
        <div className="bg-tint px-4 py-3.5">
          <p className="text-[13.5px] leading-snug text-body">💡 {day.reason}</p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            <StatChip outlined>⏱️ {day.totalEffortMinutes} mnt</StatChip>
            <StatChip outlined>💰 {PRICE_LABEL[day.priceTier]}</StatChip>
            <StatChip outlined>± {day.nutrition.kcalPerServing} kkal</StatChip>
          </div>
          <div className="mt-1.5 text-[10px] uppercase tracking-wide text-faint">
            Nutrisi cuma perkiraan kasar
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 border-t border-divider px-4 py-3">
          <StatChip>⏱️ {day.totalEffortMinutes} mnt</StatChip>
          <StatChip>💰 {PRICE_LABEL[day.priceTier]}</StatChip>
          <StatChip>± {day.nutrition.kcalPerServing} kkal</StatChip>
        </div>
      )}
    </Card>
  );
}

function StatChip({
  children,
  outlined
}: {
  children: React.ReactNode;
  outlined?: boolean;
}) {
  return (
    <span
      className={`rounded-full px-2.5 py-1 text-[11.5px] font-semibold text-ink-2 ${
        outlined ? "border border-border bg-surface" : "bg-tint"
      }`}
    >
      {children}
    </span>
  );
}

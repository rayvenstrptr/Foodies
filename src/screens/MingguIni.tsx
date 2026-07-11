import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dayFromMenuIds, planWeek, rerollSlot, type DaySet } from "../engine";
import { useStore } from "../lib/store";
import { DaySetCard } from "../components/DaySetCard";
import { EmptyState, PrimaryButton, ScreenHeader } from "../components/ui";
import { CartIcon, LockIcon, LockOpenIcon, RefreshIcon, ShuffleIcon } from "../components/icons";

const DAY_NAMES = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat"];

export default function MingguIni() {
  const store = useStore();
  const navigate = useNavigate();
  const counter = useRef(0);

  const servings = store.week?.servings ?? store.household.defaultServings;
  const initial = useMemo<DaySet[]>(() => {
    if (!store.week) return [];
    return store.week.dayMenuIds
      .map((ids, i) => dayFromMenuIds(ids, i))
      .filter((d): d is DaySet => !!d);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [days, setDays] = useState<DaySet[]>(initial);
  const [locked, setLocked] = useState<boolean[]>(() => initial.map(() => false));
  const [salt, setSalt] = useState(0);

  const persist = (next: DaySet[]) => {
    setDays(next);
    store.setWeek(
      next.map((d) => d.items.map((i) => i.menu.id)),
      servings
    );
    store.recordShown(next.flatMap((d) => d.items.map((i) => i.menu.id)));
  };

  const generateAll = () => {
    const nextSalt = salt + 1;
    setSalt(nextSalt);
    const lockedDays = days.map((d, i) => (locked[i] ? d : null));
    const plan = planWeek(
      store.context(),
      { dishesPerMeal: store.household.dishesPerMeal, seed: "minggu", salt: nextSalt },
      lockedDays.length ? lockedDays : undefined
    );
    setLocked(plan.days.map((_, i) => locked[i] ?? false));
    persist(plan.days);
  };

  const toggleLock = (i: number) => setLocked((l) => l.map((v, idx) => (idx === i ? !v : v)));

  const swapDay = (i: number) => {
    counter.current += 1;
    const lockedDays = days.map((d, idx) => (idx === i ? null : d));
    const plan = planWeek(
      store.context(),
      { dishesPerMeal: store.household.dishesPerMeal, seed: "minggu", salt: 100 + counter.current },
      lockedDays
    );
    persist(plan.days);
  };

  const swapItem = (dayIndex: number, slotIndex: number) => {
    counter.current += 1;
    const exclude = days.flatMap((d, i) => (i === dayIndex ? [] : d.items.map((it) => it.menu.id)));
    const updated = rerollSlot(
      days[dayIndex],
      slotIndex,
      store.context(),
      { salt: counter.current },
      exclude
    );
    persist(days.map((d, i) => (i === dayIndex ? updated : d)));
  };

  return (
    <div className="px-5 pt-5">
      <ScreenHeader
        kicker="Senin–Jumat 🗓"
        title={
          <>
            Masak apa
            <br />
            minggu ini?
          </>
        }
        subtitle="Protein diputar biar nggak bosan, bahan segar dipakai lintas hari biar hemat."
      />

      <div className="mt-3.5 flex gap-2.5">
        <PrimaryButton className="flex flex-1 items-center justify-center gap-1.5" onClick={generateAll}>
          <RefreshIcon size={16} />
          <span>Susun ulang</span>
        </PrimaryButton>
        <button
          type="button"
          onClick={() => navigate("/belanja")}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border-input bg-surface py-3.5 font-extrabold text-ink-2 active:scale-[0.98]"
        >
          <CartIcon size={16} />
          <span>Belanja</span>
        </button>
      </div>

      {days.length > 0 ? (
        <div className="mt-5 flex flex-col gap-3.5">
          {days.map((day, i) => (
            <DaySetCard
              key={i}
              day={day}
              variant="week"
              title={DAY_NAMES[i] ?? `Hari ${i + 1}`}
              onReroll={(slot) => swapItem(i, slot)}
              onOpenMenu={(id) => navigate(`/menu/${id}`)}
              headerRight={
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => toggleLock(i)}
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11.5px] font-bold active:scale-95 ${
                      locked[i]
                        ? "bg-primary text-on-primary"
                        : "border border-border-input bg-surface text-ink-2"
                    }`}
                  >
                    {locked[i] ? <LockIcon size={13} /> : <LockOpenIcon size={14} />}
                    <span>{locked[i] ? "Terkunci" : "Kunci"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => swapDay(i)}
                    className="inline-flex items-center rounded-full border border-border-input bg-surface px-2.5 py-1.5 text-ink-2 active:scale-95"
                    aria-label="ganti hari"
                  >
                    <ShuffleIcon size={14} />
                  </button>
                </div>
              }
            />
          ))}
        </div>
      ) : (
        <div className="mt-6">
          <EmptyState emoji="🗓️" title="Belum ada rencana">
            Tekan “Susun ulang”, nanti kami atur 5 hari sekaligus.
          </EmptyState>
        </div>
      )}
    </div>
  );
}

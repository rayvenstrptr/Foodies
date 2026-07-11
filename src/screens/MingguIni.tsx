import { useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dayFromMenuIds, planWeek, rerollSlot, type DaySet } from "../engine";
import { useStore } from "../lib/store";
import { DaySetCard } from "../components/DaySetCard";
import { PrimaryButton } from "../components/ui";

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
    <div className="px-4 pt-4">
      <header className="mb-3">
        <h1 className="text-2xl font-extrabold text-warm-800">Masak apa minggu ini?</h1>
        <p className="text-sm text-stone-500">
          Rencana Senin–Jumat yang seimbang. Protein diputar biar nggak bosan, bahan segar
          dipakai lintas hari biar hemat.
        </p>
      </header>

      <PrimaryButton className="w-full" onClick={generateAll}>
        {days.length ? "🔄 Susun ulang seminggu" : "🗓️ Susun menu seminggu"}
      </PrimaryButton>

      {days.length > 0 && (
        <>
          <div className="mt-4 space-y-4">
            {days.map((day, i) => (
              <div key={i}>
                <DaySetCard
                  day={day}
                  title={DAY_NAMES[i] ?? `Hari ${i + 1}`}
                  onReroll={(slot) => swapItem(i, slot)}
                  onOpenMenu={(id) => navigate(`/menu/${id}`)}
                  headerRight={
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => toggleLock(i)}
                        className={`rounded-full px-2 py-1 text-xs font-semibold active:scale-95 ${
                          locked[i]
                            ? "bg-warm-600 text-white"
                            : "bg-warm-50 text-warm-700"
                        }`}
                      >
                        {locked[i] ? "🔒 Terkunci" : "🔓 Kunci"}
                      </button>
                      <button
                        type="button"
                        onClick={() => swapDay(i)}
                        className="rounded-full bg-warm-50 px-2 py-1 text-xs font-semibold text-warm-700 active:scale-95"
                      >
                        🔀 Ganti hari
                      </button>
                    </div>
                  }
                />
              </div>
            ))}
          </div>

          <PrimaryButton className="mt-5 w-full text-lg" onClick={() => navigate("/belanja")}>
            🛒 Buat Daftar Belanja
          </PrimaryButton>
        </>
      )}

      {days.length === 0 && (
        <div className="mt-6 rounded-2xl bg-warm-50 px-6 py-10 text-center text-stone-500">
          <div className="text-4xl">🗓️</div>
          <p className="mt-2 text-sm">
            Belum ada rencana. Tekan “Susun menu seminggu”, nanti kami atur 5 hari sekaligus.
          </p>
        </div>
      )}
    </div>
  );
}

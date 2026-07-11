import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateDay, rerollSlot, type Chip, type DaySet } from "../engine";
import { useStore } from "../lib/store";
import { CHIP_LABEL } from "../lib/format";
import { DaySetCard } from "../components/DaySetCard";
import { GhostButton, PrimaryButton, Stepper } from "../components/ui";

const CHIPS: Chip[] = ["pedas", "berkuah", "seger", "cepet", "ekonomis", "spesial", "santai"];

export default function HariIni() {
  const store = useStore();
  const navigate = useNavigate();

  const [chips, setChips] = useState<Chip[]>([]);
  const [dishes, setDishes] = useState<2 | 3 | 4>(store.household.dishesPerMeal);
  const [servings, setServings] = useState(store.household.defaultServings);
  const [salt, setSalt] = useState(0);
  const [day, setDay] = useState<DaySet | null>(null);
  const rerollCounter = useRef(0);
  const lastRecorded = useRef<string>("");

  const eating = store.household.members;

  const generate = useCallback(
    (nextSalt = salt, nextChips = chips, nextDishes = dishes) => {
      const result = generateDay(store.context(), {
        chips: nextChips,
        dishesPerMeal: nextDishes,
        servings,
        seed: "hari-ini",
        salt: nextSalt
      });
      setDay(result);
    },
    [store, chips, dishes, servings, salt]
  );

  // Silent suggestion-memory: record whatever set is currently shown.
  useEffect(() => {
    if (!day) return;
    const sig = day.items.map((i) => i.menu.id).join(",");
    if (sig === lastRecorded.current) return;
    lastRecorded.current = sig;
    store.recordShown(day.items.map((i) => i.menu.id));
  }, [day, store]);

  const toggleChip = (chip: Chip) => {
    const next = chips.includes(chip) ? chips.filter((c) => c !== chip) : [...chips, chip];
    setChips(next);
    if (day) generate(salt, next, dishes);
  };

  const setDishCount = (n: 2 | 3 | 4) => {
    setDishes(n);
    if (day) generate(salt, chips, n);
  };

  const rerollAll = () => {
    const next = salt + 1;
    setSalt(next);
    generate(next);
  };

  const rerollItem = (index: number) => {
    if (!day) return;
    rerollCounter.current += 1;
    const updated = rerollSlot(day, index, store.context(), {
      chips,
      salt: rerollCounter.current
    });
    setDay(updated);
  };

  const toggleEating = (name: string, current: boolean) => {
    store.setEatingToday(name, !current);
    if (day) generate();
  };

  return (
    <div className="px-4 pt-4">
      <header className="mb-1">
        <h1 className="text-2xl font-extrabold text-warm-800">Masak apa hari ini?</h1>
        <p className="text-sm text-stone-500">
          Biar nggak bingung, biar nggak itu-itu lagi. Klik tombolnya. 🍳
        </p>
      </header>

      {/* Preference chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {CHIPS.map((chip) => (
          <GhostButton key={chip} active={chips.includes(chip)} onClick={() => toggleChip(chip)}>
            {CHIP_LABEL[chip]}
          </GhostButton>
        ))}
      </div>

      {/* Who's eating */}
      {eating.length > 0 && (
        <div className="mt-3">
          <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-warm-600">
            Siapa makan hari ini?
          </div>
          <div className="flex flex-wrap gap-2">
            {eating.map((m) => (
              <GhostButton
                key={m.name}
                active={m.eatingToday}
                onClick={() => toggleEating(m.name, m.eatingToday)}
              >
                {m.eatingToday ? "✅ " : ""}
                {m.name}
              </GhostButton>
            ))}
          </div>
        </div>
      )}

      {/* Steppers */}
      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
        <Stepper label="Porsi" value={servings} min={1} max={12} onChange={setServings} />
        <div className="flex items-center gap-2">
          <span className="text-sm text-stone-600">Jumlah lauk</span>
          {[2, 3, 4].map((n) => (
            <GhostButton key={n} active={dishes === n} onClick={() => setDishCount(n as 2 | 3 | 4)}>
              {n}
            </GhostButton>
          ))}
        </div>
      </div>

      {/* Main action */}
      <PrimaryButton className="mt-5 w-full text-lg" onClick={() => generate(salt)}>
        {day ? "🍽️ Kasih ide lain" : "🍽️ Masak apa hari ini?"}
      </PrimaryButton>

      {/* Result */}
      {day ? (
        <div className="mt-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-semibold text-stone-500">Usulan menu</span>
            <button
              type="button"
              onClick={rerollAll}
              className="rounded-full bg-warm-100 px-3 py-1.5 text-xs font-semibold text-warm-700 active:scale-95"
            >
              🔀 Ganti semua
            </button>
          </div>
          <DaySetCard day={day} onReroll={rerollItem} onOpenMenu={(id) => navigate(`/menu/${id}`)} />
        </div>
      ) : (
        <div className="mt-6 rounded-2xl bg-warm-50 px-6 py-10 text-center text-stone-500">
          <div className="text-4xl">🤔</div>
          <p className="mt-2 text-sm">
            Tekan tombol di atas, nanti kami usulkan satu set menu seimbang: lauk, sayur, dan
            teman-temannya.
          </p>
        </div>
      )}
    </div>
  );
}

import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { generateDay, rerollSlot, type Chip as ChipType, type DaySet } from "../engine";
import { useStore } from "../lib/store";
import { CHIP_LABEL } from "../lib/format";
import { DaySetCard } from "../components/DaySetCard";
import { Chip, PrimaryButton, Stepper } from "../components/ui";
import { ShuffleIcon } from "../components/icons";

const CHIPS: ChipType[] = ["pedas", "berkuah", "seger", "cepet", "ekonomis", "spesial", "santai"];

function greeting(): string {
  const h = new Date().getHours();
  if (h < 11) return "Selamat pagi 👋";
  if (h < 15) return "Selamat siang 👋";
  if (h < 19) return "Selamat sore 👋";
  return "Selamat malam 👋";
}

export default function HariIni() {
  const store = useStore();
  const navigate = useNavigate();

  const [chips, setChips] = useState<ChipType[]>([]);
  const [dishes, setDishes] = useState<2 | 3 | 4>(store.household.dishesPerMeal);
  const [servings, setServings] = useState(store.household.defaultServings);
  const [salt, setSalt] = useState(0);
  const [day, setDay] = useState<DaySet | null>(null);
  const [editing, setEditing] = useState(false);
  const rerollCounter = useRef(0);
  const lastRecorded = useRef<string>("");

  const members = store.household.members;
  const eating = members.filter((m) => m.eatingToday);
  const eatingSummary =
    eating.length > 0
      ? eating.map((m) => m.name).join(", ")
      : members.length > 0
        ? members.map((m) => m.name).join(", ")
        : "kamu";

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

  // Suggestion-forward: generate an idea on first open (zero required input).
  useEffect(() => {
    if (!day) generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Silent suggestion-memory: record whatever set is currently shown.
  useEffect(() => {
    if (!day) return;
    const sig = day.items.map((i) => i.menu.id).join(",");
    if (sig === lastRecorded.current) return;
    lastRecorded.current = sig;
    store.recordShown(day.items.map((i) => i.menu.id));
  }, [day, store]);

  const toggleChip = (chip: ChipType) => {
    const next = chips.includes(chip) ? chips.filter((c) => c !== chip) : [...chips, chip];
    setChips(next);
    generate(salt, next, dishes);
  };

  const setDishCount = (n: 2 | 3 | 4) => {
    setDishes(n);
    generate(salt, chips, n);
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
    generate();
  };

  return (
    <div className="px-5 pt-5">
      <div className="text-[13px] font-semibold tracking-[0.02em] text-primary">
        {greeting()}
      </div>
      <h1 className="mt-0.5 text-[28px] font-extrabold leading-[34px] tracking-[-0.02em] text-ink">
        Masak apa
        <br />
        hari ini?
      </h1>

      {/* Mood chips */}
      <div className="mt-4 flex flex-wrap gap-2">
        {CHIPS.map((chip) => (
          <Chip key={chip} active={chips.includes(chip)} onClick={() => toggleChip(chip)}>
            {CHIP_LABEL[chip]}
          </Chip>
        ))}
      </div>

      {/* Context summary + inline edit */}
      <div className="mt-3.5 rounded-[20px] border border-border bg-surface">
        <div className="flex items-center justify-between gap-3 px-4 py-3.5">
          <div className="flex min-w-0 flex-col gap-0.5">
            <span className="text-xs font-bold uppercase tracking-[0.06em] text-faint">
              Hari ini
            </span>
            <span className="truncate text-[14.5px] font-semibold text-ink">
              {servings} porsi · {dishes} lauk · {eatingSummary}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setEditing((v) => !v)}
            className="shrink-0 rounded-full bg-thumb px-3.5 py-2 text-[13px] font-bold text-ink-2 active:scale-95"
          >
            {editing ? "Tutup" : "Ubah"}
          </button>
        </div>

        {editing && (
          <div className="space-y-3.5 border-t border-divider px-4 py-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-semibold text-ink-2">Porsi</span>
              <Stepper value={servings} min={1} max={12} onChange={setServings} />
            </div>
            <div>
              <div className="mb-1.5 text-[13px] font-semibold text-ink-2">Jumlah lauk</div>
              <div className="flex gap-2">
                {[2, 3, 4].map((n) => (
                  <Chip
                    key={n}
                    active={dishes === n}
                    onClick={() => setDishCount(n as 2 | 3 | 4)}
                  >
                    {n}
                  </Chip>
                ))}
              </div>
            </div>
            {members.length > 0 && (
              <div>
                <div className="mb-1.5 text-[13px] font-semibold text-ink-2">
                  Siapa makan hari ini?
                </div>
                <div className="flex flex-wrap gap-2">
                  {members.map((m) => (
                    <Chip
                      key={m.name}
                      active={m.eatingToday}
                      onClick={() => toggleEating(m.name, m.eatingToday)}
                    >
                      {m.eatingToday ? "✅ " : ""}
                      {m.name}
                    </Chip>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Suggestion */}
      <div className="mt-6 flex items-baseline justify-between">
        <span className="text-base font-extrabold text-ink">Usulan hari ini</span>
        <button
          type="button"
          onClick={rerollAll}
          className="inline-flex items-center gap-1.5 text-[13px] font-bold text-primary active:scale-95"
        >
          <ShuffleIcon size={14} />
          <span>Ganti semua</span>
        </button>
      </div>

      {day && (
        <div className="mt-2.5">
          <DaySetCard
            day={day}
            variant="today"
            onReroll={rerollItem}
            onOpenMenu={(id) => navigate(`/menu/${id}`)}
          />
        </div>
      )}

      <PrimaryButton className="mt-4 w-full text-[16.5px]" onClick={rerollAll}>
        Kasih ide lain 🍳
      </PrimaryButton>
    </div>
  );
}

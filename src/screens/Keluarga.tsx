import { useState } from "react";
import type { AgeGroup, Household, Member, SpiceLevel } from "../data/types";
import { canonicalIngredientName } from "../data/ingredients";
import { useStore } from "../lib/store";
import { Card, GhostButton, SectionTitle, Stepper } from "../components/ui";

const AGE_LABEL: Record<AgeGroup, string> = {
  anak: "Anak",
  dewasa: "Dewasa",
  lansia: "Lansia"
};
const SPICE_LABEL = ["Nggak pedas", "Sedikit", "Sedang", "Pedas"];

function ChipInput({
  label,
  placeholder,
  values,
  onChange
}: {
  label: string;
  placeholder: string;
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const [text, setText] = useState("");
  const add = () => {
    const canon = canonicalIngredientName(text) ?? text.trim().toLowerCase();
    if (canon && !values.includes(canon)) onChange([...values, canon]);
    setText("");
  };
  return (
    <div>
      <div className="mb-1 text-xs font-semibold text-stone-500">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {values.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => onChange(values.filter((x) => x !== v))}
            className="rounded-full bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 active:scale-95"
          >
            {v} ✕
          </button>
        ))}
      </div>
      <div className="mt-1.5 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder={placeholder}
          className="min-w-0 flex-1 rounded-xl border border-warm-200 px-3 py-2 text-sm outline-none focus:border-warm-500"
        />
        <button
          type="button"
          onClick={add}
          className="rounded-xl bg-warm-100 px-3 text-sm font-semibold text-warm-700"
        >
          Tambah
        </button>
      </div>
    </div>
  );
}

export default function Keluarga() {
  const store = useStore();
  const household = store.household;

  const update = (patch: Partial<Household>) =>
    store.setHousehold({ ...household, ...patch });

  const setMember = (index: number, patch: Partial<Member>) =>
    store.updateMembers(
      household.members.map((m, i) => (i === index ? { ...m, ...patch } : m))
    );

  const addMember = () =>
    store.updateMembers([
      ...household.members,
      {
        name: `Anggota ${household.members.length + 1}`,
        ageGroup: "dewasa",
        allergies: [],
        dislikes: [],
        spiceTolerance: 2,
        eatingToday: true
      }
    ]);

  const removeMember = (index: number) =>
    store.updateMembers(household.members.filter((_, i) => i !== index));

  return (
    <div className="px-4 pt-4">
      <header className="mb-2">
        <h1 className="text-2xl font-extrabold text-warm-800">Keluarga</h1>
        <p className="text-sm text-stone-500">
          Isi seperlunya aja. Alergi jadi filter wajib; nggak-suka cuma bikin menu itu jarang
          muncul. Semua opsional.
        </p>
      </header>

      <SectionTitle>Anggota</SectionTitle>
      <div className="space-y-3">
        {household.members.map((m, i) => (
          <Card key={i} className="space-y-3 p-4">
            <div className="flex items-center gap-2">
              <input
                value={m.name}
                onChange={(e) => setMember(i, { name: e.target.value })}
                className="min-w-0 flex-1 rounded-xl border border-warm-200 px-3 py-2 font-semibold outline-none focus:border-warm-500"
              />
              <button
                type="button"
                onClick={() => removeMember(i)}
                className="rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-600"
              >
                Hapus
              </button>
            </div>

            <div>
              <div className="mb-1 text-xs font-semibold text-stone-500">Umur</div>
              <div className="flex gap-2">
                {(Object.keys(AGE_LABEL) as AgeGroup[]).map((ag) => (
                  <GhostButton
                    key={ag}
                    active={m.ageGroup === ag}
                    onClick={() => setMember(i, { ageGroup: ag })}
                  >
                    {AGE_LABEL[ag]}
                  </GhostButton>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-1 text-xs font-semibold text-stone-500">
                Tahan pedas: {SPICE_LABEL[m.spiceTolerance]}
              </div>
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((lvl) => (
                  <GhostButton
                    key={lvl}
                    active={m.spiceTolerance === lvl}
                    onClick={() => setMember(i, { spiceTolerance: lvl as SpiceLevel })}
                  >
                    {"🌶️".repeat(lvl) || "🚫"}
                  </GhostButton>
                ))}
              </div>
            </div>

            <ChipInput
              label="Alergi (filter wajib)"
              placeholder="mis. udang, telur"
              values={m.allergies}
              onChange={(v) => setMember(i, { allergies: v })}
            />
            <ChipInput
              label="Nggak suka (pengurang skor)"
              placeholder="mis. pare, jengkol"
              values={m.dislikes}
              onChange={(v) => setMember(i, { dislikes: v })}
            />
          </Card>
        ))}
      </div>

      <button
        type="button"
        onClick={addMember}
        className="mt-3 w-full rounded-2xl border-2 border-dashed border-warm-300 py-3 text-sm font-semibold text-warm-600 active:scale-[0.99]"
      >
        + Tambah anggota
      </button>

      <SectionTitle>Pengaturan Masak</SectionTitle>
      <Card className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-stone-600">Porsi default</span>
          <Stepper
            value={household.defaultServings}
            min={1}
            max={12}
            onChange={(v) => update({ defaultServings: v })}
          />
        </div>

        <div>
          <div className="mb-1 text-sm text-stone-600">Jumlah lauk per makan</div>
          <div className="flex gap-2">
            {[2, 3, 4].map((n) => (
              <GhostButton
                key={n}
                active={household.dishesPerMeal === n}
                onClick={() => update({ dishesPerMeal: n as 2 | 3 | 4 })}
              >
                {n === 2 ? "2 · lauk+sayur" : n === 3 ? "3 · +pelengkap" : "4 · +sup"}
              </GhostButton>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-1 text-sm text-stone-600">
            Batas waktu masak hari kerja: {household.weekdayEffortCapMinutes} menit
          </div>
          <div className="flex flex-wrap gap-2">
            {[30, 45, 60, 90].map((cap) => (
              <GhostButton
                key={cap}
                active={household.weekdayEffortCapMinutes === cap}
                onClick={() => update({ weekdayEffortCapMinutes: cap })}
              >
                {cap} menit
              </GhostButton>
            ))}
          </div>
        </div>
      </Card>

      <button
        type="button"
        onClick={() => {
          if (confirm("Reset semua data (keluarga, favorit, riwayat)?")) store.resetAll();
        }}
        className="mt-5 mb-2 w-full rounded-2xl bg-stone-100 py-2.5 text-sm font-medium text-stone-500"
      >
        Reset semua data
      </button>
    </div>
  );
}

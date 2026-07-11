import { useState } from "react";
import type { AgeGroup, Household, Member, SpiceLevel } from "../data/types";
import { canonicalIngredientName } from "../data/ingredients";
import { useStore } from "../lib/store";
import { Card, Chip, ScreenHeader, SectionTitle, Stepper } from "../components/ui";

const AGE_LABEL: Record<AgeGroup, string> = {
  anak: "Anak",
  dewasa: "Dewasa",
  lansia: "Lansia"
};
const SPICE_WORD = ["nggak pedas", "tahan pedas sedikit", "tahan pedas sedang", "tahan pedas tinggi"];

function ChipInput({
  label,
  hint,
  placeholder,
  tone,
  values,
  onChange
}: {
  label: string;
  hint: string;
  placeholder: string;
  tone: "spicy" | "warm";
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const [text, setText] = useState("");
  const add = () => {
    const canon = canonicalIngredientName(text) ?? text.trim().toLowerCase();
    if (canon && !values.includes(canon)) onChange([...values, canon]);
    setText("");
  };
  const chipTone = tone === "spicy" ? "bg-spicy-bg text-spicy-text" : "bg-thumb text-ink-2";
  return (
    <div>
      <div className="mb-1.5 text-[11.5px] font-bold text-muted">
        {label} <span className="font-semibold text-faint">· {hint}</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {values.map((v) => (
          <button
            key={v}
            type="button"
            onClick={() => onChange(values.filter((x) => x !== v))}
            className={`rounded-full px-2.5 py-1 text-xs font-bold active:scale-95 ${chipTone}`}
          >
            {v} ✕
          </button>
        ))}
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          onBlur={add}
          placeholder={placeholder}
          className="w-28 rounded-full border-[1.5px] border-dashed border-line-dashed bg-transparent px-3 py-1 text-xs font-bold text-ink-2 outline-none placeholder:text-faint-2"
        />
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
    <div className="px-5 pt-5">
      <ScreenHeader
        kicker="Preferensi rumah 👪"
        title="Keluarga"
        subtitle="Alergi jadi filter wajib; nggak-suka cuma bikin menu itu jarang muncul. Semua opsional."
      />

      <SectionTitle className="mb-2 mt-5">Anggota</SectionTitle>
      <div className="space-y-3.5">
        {household.members.map((m, i) => (
          <Card key={i} className="space-y-3.5 p-4">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-thumb text-base font-extrabold text-muted">
                {m.name.trim()[0]?.toUpperCase() ?? "?"}
              </span>
              <div className="min-w-0 flex-1">
                <input
                  value={m.name}
                  onChange={(e) => setMember(i, { name: e.target.value })}
                  className="w-full bg-transparent text-base font-extrabold text-ink outline-none"
                  aria-label="nama anggota"
                />
                <div className="text-xs text-muted-2">
                  {AGE_LABEL[m.ageGroup]} · {SPICE_WORD[m.spiceTolerance]}
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeMember(i)}
                className="shrink-0 text-[12.5px] font-bold text-primary active:scale-95"
              >
                Hapus
              </button>
            </div>

            <div>
              <div className="mb-1.5 text-[11.5px] font-bold text-muted">Umur</div>
              <div className="flex gap-2">
                {(Object.keys(AGE_LABEL) as AgeGroup[]).map((ag) => (
                  <Chip
                    key={ag}
                    active={m.ageGroup === ag}
                    onClick={() => setMember(i, { ageGroup: ag })}
                  >
                    {AGE_LABEL[ag]}
                  </Chip>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-1.5 text-[11.5px] font-bold text-muted">Tahan pedas</div>
              <div className="flex gap-2">
                {[0, 1, 2, 3].map((lvl) => (
                  <Chip
                    key={lvl}
                    active={m.spiceTolerance === lvl}
                    onClick={() => setMember(i, { spiceTolerance: lvl as SpiceLevel })}
                  >
                    {"🌶️".repeat(lvl) || "🚫"}
                  </Chip>
                ))}
              </div>
            </div>

            <ChipInput
              label="Alergi"
              hint="filter wajib"
              placeholder="＋ Tambah"
              tone="spicy"
              values={m.allergies}
              onChange={(v) => setMember(i, { allergies: v })}
            />
            <ChipInput
              label="Nggak suka"
              hint="jarang muncul"
              placeholder="＋ Tambah"
              tone="warm"
              values={m.dislikes}
              onChange={(v) => setMember(i, { dislikes: v })}
            />
          </Card>
        ))}
      </div>

      <button
        type="button"
        onClick={addMember}
        className="mt-3 w-full rounded-3xl border-2 border-dashed border-line-dashed py-3.5 text-center text-[13.5px] font-extrabold text-primary active:scale-[0.99]"
      >
        ＋ Tambah anggota
      </button>

      <SectionTitle className="mb-2 mt-5.5">Pengaturan Masak</SectionTitle>
      <Card className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-ink-2">Porsi default</span>
          <Stepper
            value={household.defaultServings}
            min={1}
            max={12}
            onChange={(v) => update({ defaultServings: v })}
          />
        </div>

        <div>
          <div className="mb-1.5 text-sm font-semibold text-ink-2">Jumlah lauk per makan</div>
          <div className="flex gap-2">
            {[2, 3, 4].map((n) => (
              <Chip
                key={n}
                active={household.dishesPerMeal === n}
                onClick={() => update({ dishesPerMeal: n as 2 | 3 | 4 })}
              >
                {n === 2 ? "2 · lauk+sayur" : n === 3 ? "3 · +pelengkap" : "4 · +sup"}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-1.5 text-sm font-semibold text-ink-2">
            Batas waktu masak hari kerja
          </div>
          <div className="flex flex-wrap gap-2">
            {[30, 45, 60, 90].map((cap) => (
              <Chip
                key={cap}
                active={household.weekdayEffortCapMinutes === cap}
                onClick={() => update({ weekdayEffortCapMinutes: cap })}
              >
                {cap}'
              </Chip>
            ))}
          </div>
        </div>
      </Card>

      <button
        type="button"
        onClick={() => {
          if (confirm("Reset semua data (keluarga, favorit, riwayat)?")) store.resetAll();
        }}
        className="mx-auto mt-5 mb-1 block text-[13px] font-semibold text-faint underline"
      >
        Reset semua data
      </button>
    </div>
  );
}

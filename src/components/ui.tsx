import type { ReactNode } from "react";

export function Tag({ children, tone = "warm" }: { children: ReactNode; tone?: "warm" | "leaf" | "muted" | "red" }) {
  const tones = {
    warm: "bg-warm-100 text-warm-800",
    leaf: "bg-green-100 text-green-800",
    muted: "bg-stone-100 text-stone-600",
    red: "bg-red-100 text-red-700"
  } as const;
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl bg-white shadow-sm ring-1 ring-warm-100 ${className}`}>
      {children}
    </div>
  );
}

export function PrimaryButton({
  children,
  onClick,
  disabled,
  className = "",
  type = "button"
}: {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-2xl bg-warm-600 px-5 py-3 text-center font-semibold text-white shadow-sm transition active:scale-[0.98] disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}

export function GhostButton({
  children,
  onClick,
  active,
  className = ""
}: {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-sm font-medium transition active:scale-95 ${
        active
          ? "border-warm-600 bg-warm-600 text-white"
          : "border-warm-200 bg-white text-warm-800"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function SectionTitle({ children, hint }: { children: ReactNode; hint?: string }) {
  return (
    <div className="mb-2 mt-5 flex items-baseline justify-between">
      <h2 className="text-sm font-bold uppercase tracking-wide text-warm-700">{children}</h2>
      {hint && <span className="text-xs text-stone-400">{hint}</span>}
    </div>
  );
}

export function EmptyState({
  emoji,
  title,
  children
}: {
  emoji: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-warm-50 px-6 py-10 text-center">
      <div className="text-4xl">{emoji}</div>
      <div className="font-semibold text-warm-800">{title}</div>
      {children && <div className="text-sm text-stone-500">{children}</div>}
    </div>
  );
}

export function Stepper({
  value,
  onChange,
  min = 1,
  max = 20,
  label
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
  label?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      {label && <span className="text-sm text-stone-600">{label}</span>}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          className="h-8 w-8 rounded-full bg-warm-100 text-lg font-bold text-warm-800 active:scale-90"
          aria-label="kurangi"
        >
          −
        </button>
        <span className="w-6 text-center font-semibold tabular-nums">{value}</span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          className="h-8 w-8 rounded-full bg-warm-100 text-lg font-bold text-warm-800 active:scale-90"
          aria-label="tambah"
        >
          +
        </button>
      </div>
    </div>
  );
}

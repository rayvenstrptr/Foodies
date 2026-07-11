import type { ReactNode } from "react";
import type { MenuCategory } from "../data/types";

/** Vegetable / soup categories use the green photo tint + green slot label. */
export function isVegCategory(category: MenuCategory): boolean {
  return category === "sayur" || category === "sup";
}

export function Tag({
  children,
  tone = "warm"
}: {
  children: ReactNode;
  tone?: "warm" | "leaf" | "spicy";
}) {
  const tones = {
    warm: "bg-thumb text-muted",
    leaf: "bg-leaf-tint text-leaf",
    spicy: "bg-spicy-bg text-spicy-text"
  } as const;
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-[10.5px] font-bold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function Card({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-border bg-surface shadow-card ${className}`}
    >
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
      className={`rounded-full bg-primary px-5 py-3.5 text-center font-extrabold text-on-primary shadow-btn transition-colors duration-150 active:bg-primary-press disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}

/** Pill chip / toggle. Selected = terracotta (primary) or dark-ink (dark). */
export function Chip({
  children,
  onClick,
  active,
  variant = "primary",
  className = ""
}: {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  variant?: "primary" | "dark";
  className?: string;
}) {
  const activeClass =
    variant === "dark"
      ? "bg-dark text-page font-bold"
      : "bg-primary text-on-primary font-bold";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3.5 py-2 text-sm font-semibold transition active:scale-95 ${
        active
          ? activeClass
          : "border border-border-input bg-surface text-ink-2"
      } ${className}`}
    >
      {children}
    </button>
  );
}

export function SectionTitle({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-xs font-extrabold uppercase tracking-[0.1em] text-primary ${className}`}
    >
      {children}
    </div>
  );
}

/** Standard screen header: terracotta kicker + big H1 + optional subtitle. */
export function ScreenHeader({
  kicker,
  title,
  subtitle
}: {
  kicker: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <header>
      <div className="text-[13px] font-semibold tracking-[0.02em] text-primary">
        {kicker}
      </div>
      <h1 className="mt-0.5 text-[28px] font-extrabold leading-[34px] tracking-[-0.02em] text-ink">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted">{subtitle}</p>
      )}
    </header>
  );
}

/** Menu photo, or striped fallback when no photo is supplied. */
export function Thumb({
  photo,
  veg,
  className = "",
  label = "foto"
}: {
  photo?: string;
  veg?: boolean;
  className?: string;
  label?: ReactNode;
}) {
  if (photo) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img src={photo} alt="" className="h-full w-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className={`flex items-center justify-center text-center font-mono text-[8px] font-semibold ${
        veg ? "photo-fallback-veg" : "photo-fallback-warm"
      } ${className}`}
    >
      {label}
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
    <div className="flex flex-col items-center gap-2 rounded-3xl bg-tint px-6 py-10 text-center">
      <div className="text-4xl">{emoji}</div>
      <div className="font-extrabold text-heading">{title}</div>
      {children && <div className="text-sm text-muted">{children}</div>}
    </div>
  );
}

export function Stepper({
  value,
  onChange,
  min = 1,
  max = 20
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-thumb text-[17px] font-extrabold text-ink-2 active:scale-90"
        aria-label="kurangi"
      >
        −
      </button>
      <span className="w-[22px] text-center text-base font-extrabold tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-thumb text-[17px] font-extrabold text-ink-2 active:scale-90"
        aria-label="tambah"
      >
        ＋
      </button>
    </div>
  );
}

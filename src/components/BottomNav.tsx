import { NavLink } from "react-router-dom";

const TABS = [
  { to: "/", label: "Hari Ini", emoji: "🍚", end: true },
  { to: "/minggu", label: "Minggu", emoji: "🗓️", end: false },
  { to: "/bahan", label: "Ada Bahan", emoji: "🧺", end: false },
  { to: "/menu", label: "Semua Menu", emoji: "📖", end: false },
  { to: "/keluarga", label: "Keluarga", emoji: "👪", end: false }
];

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-warm-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-md items-stretch justify-around px-1 pb-[env(safe-area-inset-bottom)]">
        {TABS.map((t) => (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.end}
            className={({ isActive }) =>
              `flex flex-1 flex-col items-center gap-0.5 py-2 text-[11px] font-medium ${
                isActive ? "text-warm-700" : "text-stone-400"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className={`text-xl transition ${isActive ? "scale-110" : ""}`}>
                  {t.emoji}
                </span>
                <span>{t.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

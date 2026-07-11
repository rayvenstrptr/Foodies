import { NavLink } from "react-router-dom";
import { BasketIcon, BookIcon, BowlIcon, CalendarIcon, PeopleIcon } from "./icons";

const TABS = [
  { to: "/", label: "Hari Ini", Icon: BowlIcon, end: true },
  { to: "/minggu", label: "Minggu", Icon: CalendarIcon, end: false },
  { to: "/bahan", label: "Bahan", Icon: BasketIcon, end: false },
  { to: "/menu", label: "Menu", Icon: BookIcon, end: false },
  { to: "/keluarga", label: "Keluarga", Icon: PeopleIcon, end: false }
];

export default function BottomNav() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-20">
      <div className="mx-auto max-w-md px-3 pb-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
        <nav className="flex rounded-3xl border border-border bg-surface p-1.5 shadow-nav">
          {TABS.map(({ to, label, Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex flex-1 flex-col items-center gap-[3px] rounded-[18px] py-[7px] text-[10.5px] ${
                  isActive
                    ? "bg-tint font-bold text-primary"
                    : "font-semibold text-nav"
                }`
              }
            >
              <Icon size={21} strokeWidth={2} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

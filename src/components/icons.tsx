/**
 * Hand-inlined line-icons matching the Dapur Hangat mock exactly.
 * Kept in-repo (no icon-pack dependency) so the PWA stays zero-network.
 * All icons stroke with `currentColor`; control color via text-* utilities.
 */

type IconProps = {
  size?: number;
  className?: string;
  strokeWidth?: number;
};

function Svg({
  size = 20,
  className,
  strokeWidth = 2,
  children,
  fill = "none"
}: IconProps & { children: React.ReactNode; fill?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function BowlIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M4 12 h16" />
      <path d="M5 12 a7 7 0 0 0 14 0" />
      <path d="M9 8 c0-2 6-2 6 0" />
    </Svg>
  );
}

export function CalendarIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <rect x="4" y="5" width="16" height="15" rx="3" />
      <path d="M4 10 h16" />
      <path d="M9 3 v4 M15 3 v4" />
    </Svg>
  );
}

export function BasketIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M5 10 h14 l-1.5 9 h-11 z" />
      <path d="M9 10 c0-5 6-5 6 0" />
    </Svg>
  );
}

export function BookIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <path d="M5 5 h13 a1 1 0 0 1 1 1 v13 a1 1 0 0 1-1 1 H5 z" />
      <path d="M5 5 v15 M9 5 v15" />
    </Svg>
  );
}

export function PeopleIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="9" cy="9" r="3" />
      <circle cx="16.5" cy="10.5" r="2.2" />
      <path d="M4 20 c0-4 10-4 10 0 M14.5 16.5 c3-1.5 6 .5 6 3.5" />
    </Svg>
  );
}

export function RefreshIcon(p: IconProps) {
  return (
    <Svg strokeWidth={2.2} {...p}>
      <path d="M20.5 12 a8.5 8.5 0 1 1-2.6-6.1" />
      <path d="M20.5 3.5 v4.5 h-4.5" />
    </Svg>
  );
}

export function ShuffleIcon(p: IconProps) {
  return (
    <Svg strokeWidth={2.2} {...p}>
      <path d="M3 7 h3.5 L17 17 h4" />
      <path d="M18.5 14.5 L21 17 l-2.5 2.5" />
      <path d="M3 17 h3.5 l3-3.4" />
      <path d="M14.2 10.6 L17 7 h4" />
      <path d="M18.5 4.5 L21 7 l-2.5 2.5" />
    </Svg>
  );
}

export function LockIcon(p: IconProps) {
  return (
    <Svg strokeWidth={2.2} {...p}>
      <rect x="6" y="11" width="12" height="9" rx="2" />
      <path d="M9 11 V8 a3 3 0 0 1 6 0 v3" />
    </Svg>
  );
}

export function LockOpenIcon(p: IconProps) {
  return (
    <Svg strokeWidth={2.2} {...p}>
      <rect x="6" y="11" width="12" height="9" rx="2" />
      <path d="M9 11 V8 a3 3 0 0 1 5.8-1" />
    </Svg>
  );
}

export function CartIcon(p: IconProps) {
  return (
    <Svg strokeWidth={2.2} {...p}>
      <circle cx="9" cy="20" r="1.4" />
      <circle cx="17" cy="20" r="1.4" />
      <path d="M3 4 h2.5 l2.2 11 h10.5 l2-8 H6" />
    </Svg>
  );
}

export function ChatIcon(p: IconProps) {
  return (
    <Svg strokeWidth={2.2} {...p}>
      <path d="M20 12 a8 8 0 1 0-3.2 6.4 L21 20 l-1-4.2 A8 8 0 0 0 20 12 z" />
    </Svg>
  );
}

export function SearchIcon(p: IconProps) {
  return (
    <Svg {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="M16.5 16.5 L21 21" />
    </Svg>
  );
}

export function HeartIcon({ filled = false, ...p }: IconProps & { filled?: boolean }) {
  return (
    <Svg strokeWidth={filled ? 1.5 : 2.2} fill={filled ? "currentColor" : "none"} {...p}>
      <path d="M12 20 C7 15.5 3.5 12.5 3.5 8.8 A4.3 4.3 0 0 1 12 7.2 a4.3 4.3 0 0 1 8.5 1.6 C20.5 12.5 17 15.5 12 20 z" />
    </Svg>
  );
}

export function BanIcon(p: IconProps) {
  return (
    <Svg strokeWidth={2.2} {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M6 6 l12 12" />
    </Svg>
  );
}

export function ChevronLeftIcon(p: IconProps) {
  return (
    <Svg strokeWidth={2.4} {...p}>
      <path d="M14 5 l-7 7 7 7" />
    </Svg>
  );
}

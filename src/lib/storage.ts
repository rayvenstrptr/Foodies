import type { Household, HistoryEntry } from "../data/types";

/**
 * The ONLY module that touches localStorage. Versioned schema + migration
 * stub so a backend can replace this later without touching UI code.
 */
export const SCHEMA_VERSION = 1 as const;
const STORAGE_KEY = "masakapa.state";
const MAX_HISTORY = 160;

export type PersistedState = {
  schemaVersion: typeof SCHEMA_VERSION;
  household: Household;
  favorites: string[];
  banned: string[];
  history: HistoryEntry[];
  /** Last generated weekly plan as a menu-id matrix (Senin–Jumat) + servings. */
  week: { dayMenuIds: string[][]; servings: number } | null;
};

export function defaultHousehold(): Household {
  return {
    members: [
      {
        name: "Keluarga",
        ageGroup: "dewasa",
        allergies: [],
        dislikes: [],
        spiceTolerance: 2,
        eatingToday: true
      }
    ],
    defaultServings: 4,
    dishesPerMeal: 2,
    weekdayEffortCapMinutes: 45
  };
}

export function defaultState(): PersistedState {
  return {
    schemaVersion: SCHEMA_VERSION,
    household: defaultHousehold(),
    favorites: [],
    banned: [],
    history: [],
    week: null
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function migrate(raw: any): PersistedState {
  if (!raw || typeof raw !== "object") return defaultState();

  // Future migrations branch on raw.schemaVersion here.
  // if (raw.schemaVersion === 0) raw = migrateV0toV1(raw);

  const base = defaultState();
  const household: Household = {
    ...base.household,
    ...(raw.household ?? {}),
    members: Array.isArray(raw.household?.members)
      ? raw.household.members
      : base.household.members
  };

  return {
    schemaVersion: SCHEMA_VERSION,
    household,
    favorites: Array.isArray(raw.favorites) ? raw.favorites : [],
    banned: Array.isArray(raw.banned) ? raw.banned : [],
    history: Array.isArray(raw.history) ? raw.history.slice(-MAX_HISTORY) : [],
    week:
      raw.week && Array.isArray(raw.week.dayMenuIds)
        ? { dayMenuIds: raw.week.dayMenuIds, servings: raw.week.servings ?? 4 }
        : null
  };
}

export function loadState(): PersistedState {
  if (typeof localStorage === "undefined") return defaultState();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    return migrate(JSON.parse(raw));
  } catch {
    return defaultState();
  }
}

export function saveState(state: PersistedState): void {
  if (typeof localStorage === "undefined") return;
  try {
    const trimmed: PersistedState = {
      ...state,
      history: state.history.slice(-MAX_HISTORY)
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
  } catch {
    // storage full / disabled — the app still works in-memory this session.
  }
}

export function todayISO(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Append a silent suggestion-memory entry (NOT a diary of what was cooked). */
export function appendHistory(
  history: HistoryEntry[],
  menuIds: string[],
  date = todayISO()
): HistoryEntry[] {
  if (!menuIds.length) return history;
  return [...history, { date, menuIds }].slice(-MAX_HISTORY);
}

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode
} from "react";
import type { Household, HistoryEntry, Member } from "../data/types";
import type { GenerateContext } from "../engine";
import {
  appendHistory,
  defaultState,
  loadState,
  saveState,
  todayISO,
  type PersistedState
} from "./storage";

type StoreValue = {
  household: Household;
  favorites: string[];
  banned: string[];
  history: HistoryEntry[];
  week: PersistedState["week"];

  setHousehold: (h: Household) => void;
  updateMembers: (members: Member[]) => void;
  setEatingToday: (name: string, eating: boolean) => void;
  toggleFavorite: (id: string) => void;
  toggleBanned: (id: string) => void;
  isFavorite: (id: string) => boolean;
  isBanned: (id: string) => boolean;
  recordShown: (menuIds: string[]) => void;
  setWeek: (dayMenuIds: string[][], servings: number) => void;
  clearWeek: () => void;
  resetAll: () => void;

  /** Build the engine context for a given day. */
  context: () => GenerateContext;
};

const StoreContext = createContext<StoreValue | null>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PersistedState>(() => loadState());
  // keep a ref so recordShown (called during render effects) always sees latest
  const ref = useRef(state);
  ref.current = state;

  const commit = useCallback((next: PersistedState) => {
    ref.current = next;
    setState(next);
    saveState(next);
  }, []);

  const value = useMemo<StoreValue>(() => {
    const patch = (p: Partial<PersistedState>) => commit({ ...ref.current, ...p });

    return {
      household: state.household,
      favorites: state.favorites,
      banned: state.banned,
      history: state.history,
      week: state.week,

      setHousehold: (h) => patch({ household: h }),
      updateMembers: (members) =>
        patch({ household: { ...ref.current.household, members } }),
      setEatingToday: (name, eating) =>
        patch({
          household: {
            ...ref.current.household,
            members: ref.current.household.members.map((m) =>
              m.name === name ? { ...m, eatingToday: eating } : m
            )
          }
        }),
      toggleFavorite: (id) =>
        patch({
          favorites: ref.current.favorites.includes(id)
            ? ref.current.favorites.filter((x) => x !== id)
            : [...ref.current.favorites, id]
        }),
      toggleBanned: (id) =>
        patch({
          banned: ref.current.banned.includes(id)
            ? ref.current.banned.filter((x) => x !== id)
            : [...ref.current.banned, id]
        }),
      isFavorite: (id) => ref.current.favorites.includes(id),
      isBanned: (id) => ref.current.banned.includes(id),
      recordShown: (menuIds) =>
        patch({ history: appendHistory(ref.current.history, menuIds) }),
      setWeek: (dayMenuIds, servings) => patch({ week: { dayMenuIds, servings } }),
      clearWeek: () => patch({ week: null }),
      resetAll: () => commit(defaultState()),

      context: (): GenerateContext => ({
        household: ref.current.household,
        favorites: ref.current.favorites,
        banned: ref.current.banned,
        history: ref.current.history,
        today: todayISO()
      })
    };
  }, [state, commit]);

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore must be used within StoreProvider");
  return ctx;
}

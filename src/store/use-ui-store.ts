import { create } from "zustand";

type ThemeMode = "dark" | "light";

type UIState = {
  theme: ThemeMode;
  xp: number;
  streak: number;
  toggleTheme: () => void;
  gainXp: (value: number) => void;
  incrementStreak: () => void;
  resetStreak: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  theme: "dark",
  xp: 0,
  streak: 0,
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
  gainXp: (value) => set((state) => ({ xp: state.xp + value })),
  incrementStreak: () => set((state) => ({ streak: state.streak + 1 })),
  resetStreak: () => set({ streak: 0 }),
}));

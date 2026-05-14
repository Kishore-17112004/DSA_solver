import { create } from "zustand";

type ThemeMode = "dark" | "light";

type UIState = {
  theme: ThemeMode;
  xp: number;
  streak: number;
  toggleTheme: () => void;
  gainXp: (value: number) => void;
};

export const useUIStore = create<UIState>((set) => ({
  theme: "dark",
  xp: 1240,
  streak: 12,
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
  gainXp: (value) => set((state) => ({ xp: state.xp + value })),
}));

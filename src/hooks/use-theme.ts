"use client";

import { useUIStore } from "@/store/use-ui-store";

export function useTheme() {
  const theme = useUIStore((state) => state.theme);
  const toggleTheme = useUIStore((state) => state.toggleTheme);

  return { theme, toggleTheme };
}

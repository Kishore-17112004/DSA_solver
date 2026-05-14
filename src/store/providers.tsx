"use client";

import { Provider } from "react-redux";
import { ReactNode, useEffect } from "react";
import { store } from "./redux/store";
import { useUIStore } from "./use-ui-store";

function ThemeSync() {
  const theme = useUIStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return null;
}

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeSync />
      {children}
    </Provider>
  );
}

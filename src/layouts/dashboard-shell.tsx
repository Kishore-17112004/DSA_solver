import { ReactNode } from "react";

export function DashboardShell({ children }: { children: ReactNode }) {
  return <section className="space-y-6">{children}</section>;
}

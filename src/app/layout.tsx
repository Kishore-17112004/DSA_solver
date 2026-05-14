import type { Metadata } from "next";
import "./globals.css";
import { TopNav } from "@/components/layouts/top-nav";
import { AppProviders } from "@/store/providers";

export const metadata: Metadata = {
  title: "DSAverse",
  description:
    "Animated AI-powered Data Structures & Algorithms learning platform built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full"
    >
      <body className="min-h-full bg-background text-foreground antialiased">
        <AppProviders>
          <div className="relative min-h-screen overflow-x-hidden">
            <TopNav />
            <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </AppProviders>
      </body>
    </html>
  );
}

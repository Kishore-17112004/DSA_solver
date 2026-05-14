import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";

export default function SignInPage() {
  return (
    <div className="mx-auto max-w-md">
      <GlassCard>
        <h1 className="text-2xl font-semibold">Welcome back</h1>
        <p className="mt-2 text-sm text-foreground/70">Sign in to continue your DSAverse mission.</p>
        <div className="mt-4 space-y-3">
          <input className="w-full rounded-lg border border-border/70 bg-transparent px-3 py-2 text-sm" placeholder="Email" />
          <input type="password" className="w-full rounded-lg border border-border/70 bg-transparent px-3 py-2 text-sm" placeholder="Password" />
          <button type="button" className="w-full rounded-lg bg-accent px-3 py-2 text-sm font-medium text-black">
            Sign In
          </button>
        </div>
        <p className="mt-4 text-xs text-foreground/70">
          New here?{" "}
          <Link href="/auth/sign-up" className="text-accent">
            Create an account
          </Link>
        </p>
      </GlassCard>
    </div>
  );
}

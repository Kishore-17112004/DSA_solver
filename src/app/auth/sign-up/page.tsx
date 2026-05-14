import Link from "next/link";
import { GlassCard } from "@/components/ui/glass-card";

export default function SignUpPage() {
  return (
    <div className="mx-auto max-w-md">
      <GlassCard>
        <h1 className="text-2xl font-semibold">Create your DSAverse account</h1>
        <p className="mt-2 text-sm text-foreground/70">Start your AI-guided learning roadmap in minutes.</p>
        <div className="mt-4 space-y-3">
          <input className="w-full rounded-lg border border-border/70 bg-transparent px-3 py-2 text-sm" placeholder="Full Name" />
          <input className="w-full rounded-lg border border-border/70 bg-transparent px-3 py-2 text-sm" placeholder="Email" />
          <input type="password" className="w-full rounded-lg border border-border/70 bg-transparent px-3 py-2 text-sm" placeholder="Password" />
          <button type="button" className="w-full rounded-lg bg-accent-secondary px-3 py-2 text-sm font-medium">
            Sign Up
          </button>
        </div>
        <p className="mt-4 text-xs text-foreground/70">
          Already registered?{" "}
          <Link href="/auth/sign-in" className="text-accent">
            Sign in
          </Link>
        </p>
      </GlassCard>
    </div>
  );
}

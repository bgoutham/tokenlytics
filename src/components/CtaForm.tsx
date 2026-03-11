"use client";

export default function CtaForm() {
  return (
    <form
      className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="you@company.com"
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <button
        type="submit"
        className="w-full sm:w-auto rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-light transition-colors whitespace-nowrap"
      >
        Get Early Access
      </button>
    </form>
  );
}

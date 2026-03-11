"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="6" fill="#4f46e5" />
            <path d="M8 14h4l2-6 4 12 2-6h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          tokenlytics<span className="text-accent">.ai</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-muted hover:text-foreground transition-colors text-sm">
            Features
          </Link>
          <Link href="/#lifecycle" className="text-muted hover:text-foreground transition-colors text-sm">
            How It Works
          </Link>
          <Link href="/pricing" className="text-muted hover:text-foreground transition-colors text-sm">
            Pricing
          </Link>
          <Link href="/about" className="text-muted hover:text-foreground transition-colors text-sm">
            About
          </Link>
          <Link
            href="/#cta"
            className="rounded-lg bg-accent px-5 py-2 text-sm font-medium text-white hover:bg-accent-light transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          <Link href="/#features" className="text-muted hover:text-foreground transition-colors text-sm" onClick={() => setMobileOpen(false)}>
            Features
          </Link>
          <Link href="/#lifecycle" className="text-muted hover:text-foreground transition-colors text-sm" onClick={() => setMobileOpen(false)}>
            How It Works
          </Link>
          <Link href="/pricing" className="text-muted hover:text-foreground transition-colors text-sm" onClick={() => setMobileOpen(false)}>
            Pricing
          </Link>
          <Link href="/about" className="text-muted hover:text-foreground transition-colors text-sm" onClick={() => setMobileOpen(false)}>
            About
          </Link>
          <Link
            href="/#cta"
            className="rounded-lg bg-accent px-5 py-2 text-sm font-medium text-white text-center hover:bg-accent-light transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold mb-3">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <rect width="28" height="28" rx="6" fill="#6366f1" />
                <path d="M8 14h4l2-6 4 12 2-6h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              tokenlytics<span className="text-accent">.ai</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Helping companies optimize token spend and gain visibility into AI cost efficiency.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/#lifecycle" className="hover:text-foreground transition-colors">How It Works</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/about#careers" className="hover:text-foreground transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted">
              <li><span className="cursor-default">Privacy Policy</span></li>
              <li><span className="cursor-default">Terms of Service</span></li>
              <li><span className="cursor-default">Security</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">&copy; {new Date().getFullYear()} Tokenlytics. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="text-muted text-sm hover:text-foreground transition-colors cursor-pointer">Twitter</span>
            <span className="text-muted text-sm hover:text-foreground transition-colors cursor-pointer">LinkedIn</span>
            <span className="text-muted text-sm hover:text-foreground transition-colors cursor-pointer">GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

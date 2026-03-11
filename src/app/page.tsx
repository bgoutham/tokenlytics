import Link from "next/link";
import CtaForm from "@/components/CtaForm";

const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-8" />
      </svg>
    ),
    title: "Real-Time Dashboards",
    description: "Track token consumption across every model, team, and application with live, interactive dashboards.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
      </svg>
    ),
    title: "Cost Allocation & Tagging",
    description: "Attribute token spend to teams, projects, or features. Know exactly where every token goes.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4m0 14v4M4.22 4.22l2.83 2.83m9.9 9.9l2.83 2.83M1 12h4m14 0h4M4.22 19.78l2.83-2.83m9.9-9.9l2.83-2.83" />
      </svg>
    ),
    title: "Model Rightsizing",
    description: "Identify where you're overspending on large models for simple tasks. Get recommendations to downsize without losing quality.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Budget Alerts & Forecasting",
    description: "Set budgets, get alerts before overruns, and forecast future token spend based on historical trends.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h4" />
      </svg>
    ),
    title: "Prompt Efficiency Analysis",
    description: "Analyze prompt-level token usage. Spot bloated prompts and get optimization suggestions automatically.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4" />
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      </svg>
    ),
    title: "Governance & Policies",
    description: "Enforce token usage policies across your organization. Set guardrails and approval workflows.",
  },
];

const phases = [
  {
    number: "01",
    name: "Inform",
    tagline: "Gain visibility",
    description:
      "Understand where your tokens are going. Allocate spend across teams, tag usage by project, and set budgets that give you a clear picture of your AI costs.",
    items: ["Cost allocation & tagging", "Usage dashboards", "Budget tracking", "Team-level breakdowns"],
    color: "from-indigo-500 to-blue-500",
  },
  {
    number: "02",
    name: "Optimize",
    tagline: "Act on insights",
    description:
      "Identify efficiency opportunities and act on them. Rightsize models, optimize prompts, and eliminate waste across your entire AI stack.",
    items: ["Model rightsizing", "Prompt optimization", "Caching recommendations", "Reserved capacity planning"],
    color: "from-violet-500 to-purple-500",
  },
  {
    number: "03",
    name: "Operate",
    tagline: "Continuously improve",
    description:
      "Treat token cost as a key performance metric. Continuously monitor, govern, and improve your AI spending with automated policies and alerts.",
    items: ["Automated governance", "Anomaly detection", "Cost KPIs & reporting", "Continuous optimization"],
    color: "from-purple-500 to-pink-500",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section aria-label="Hero" className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 md:pt-36 md:pb-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Now in Early Access
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Take control of your{" "}
              <span className="gradient-text">AI token spend</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed mb-10 max-w-2xl mx-auto">
              Tokenlytics gives engineering and finance teams full visibility into token usage, actionable optimization insights, and continuous cost governance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#cta"
                className="w-full sm:w-auto rounded-lg bg-accent px-8 py-3 text-base font-medium text-white hover:bg-accent-light transition-colors text-center"
              >
                Request Early Access
              </Link>
              <Link
                href="#lifecycle"
                className="w-full sm:w-auto rounded-lg border border-border px-8 py-3 text-base font-medium text-foreground hover:bg-surface transition-colors text-center"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "40%", label: "Average cost savings" },
              { value: "10B+", label: "Tokens analyzed" },
              { value: "<5min", label: "Integration time" },
              { value: "99.9%", label: "Platform uptime" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" aria-label="Features" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to manage token costs</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              From real-time visibility to automated governance, Tokenlytics covers every aspect of AI cost management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="card-hover rounded-xl border border-border bg-surface p-8"
              >
                <div className="text-accent mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle Phases */}
      <section id="lifecycle" aria-label="Token Cost Lifecycle" className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Token Cost Lifecycle</h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Three phases to take your organization from reactive spending to proactive cost optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {phases.map((phase) => (
              <div
                key={phase.name}
                className="card-hover rounded-xl border border-border bg-background p-8 relative overflow-hidden"
              >
                {/* Phase number background */}
                <div className="absolute top-4 right-6 text-7xl font-black text-surface-light select-none">
                  {phase.number}
                </div>

                <div className="relative">
                  <div className={`inline-block rounded-full bg-gradient-to-r ${phase.color} px-3 py-1 text-xs font-semibold text-white mb-4`}>
                    Phase {phase.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{phase.name}</h3>
                  <p className="text-accent text-sm font-medium mb-4">{phase.tagline}</p>
                  <p className="text-muted text-sm leading-relaxed mb-6">{phase.description}</p>

                  <ul className="space-y-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 12l2 2 4-4" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section aria-label="Testimonials" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by AI-forward teams</h2>
            <p className="text-muted text-lg">Companies using Tokenlytics to control their AI costs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "Tokenlytics helped us cut our LLM spend by 45% in the first month. The model rightsizing recommendations alone were worth it.",
                name: "Sarah Chen",
                role: "VP of Engineering",
                company: "ScaleAI Corp",
              },
              {
                quote: "We finally have visibility into which teams and features are driving our token costs. The allocation tools are exactly what we needed.",
                name: "Marcus Johnson",
                role: "Head of Platform",
                company: "DataFlow Inc",
              },
              {
                quote: "The continuous monitoring and governance features let us scale our AI usage without the budget anxiety. Game changer for our finance team.",
                name: "Priya Patel",
                role: "CFO",
                company: "NeuralOps",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.name}
                className="card-hover rounded-xl border border-border bg-surface p-8"
              >
                <p className="text-sm leading-relaxed text-muted mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-muted text-xs">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" aria-label="Get early access" className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to optimize your AI spend?
          </h2>
          <p className="text-muted text-lg mb-10 max-w-xl mx-auto">
            Join the early access program and start saving on token costs today. No credit card required.
          </p>

          <CtaForm />
          <p className="text-muted text-xs mt-4">Free during early access. No commitment.</p>
        </div>
      </section>
    </>
  );
}

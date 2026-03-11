import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — AI Token Cost Management Plans",
  description:
    "Simple, transparent pricing for AI token cost management. Start free with 1M tokens/month. Pro plans from $499/mo for model rightsizing, budget alerts, and cost allocation.",
  alternates: {
    canonical: "https://tokenlytics.ai/pricing",
  },
  openGraph: {
    title: "Pricing — Tokenlytics.ai",
    description:
      "Start free. Scale to Pro at $499/mo. Enterprise custom pricing for unlimited token tracking and full governance.",
    url: "https://tokenlytics.ai/pricing",
  },
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For small teams exploring AI cost visibility.",
    features: [
      "Up to 1M tokens tracked/month",
      "Basic usage dashboards",
      "Single workspace",
      "7-day data retention",
      "Community support",
    ],
    cta: "Get Started Free",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$499",
    period: "/mo",
    description: "For growing teams that need optimization and governance.",
    features: [
      "Up to 100M tokens tracked/month",
      "Advanced dashboards & analytics",
      "Cost allocation & tagging",
      "Model rightsizing recommendations",
      "Budget alerts & forecasting",
      "90-day data retention",
      "Priority email support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations operating AI at scale with full governance.",
    features: [
      "Unlimited tokens tracked",
      "Full Inform → Optimize → Operate lifecycle",
      "Prompt efficiency analysis",
      "Governance & policy enforcement",
      "SSO & RBAC",
      "Unlimited data retention",
      "Custom integrations",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, transparent pricing
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Start free, scale as you grow. Every plan includes core visibility features so you never fly blind on AI costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`card-hover rounded-xl border p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-accent glow bg-surface"
                    : "border-border bg-surface"
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-flex self-start rounded-full bg-accent/10 border border-accent/30 px-3 py-1 text-xs font-medium text-accent mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold">{plan.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted text-sm">{plan.period}</span>}
                </div>
                <p className="text-muted text-sm mb-8">{plan.description}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6366f1"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 flex-shrink-0"
                      >
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#cta"
                  className={`block text-center rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
                    plan.highlighted
                      ? "bg-accent text-white hover:bg-accent-light"
                      : "border border-border text-foreground hover:bg-surface-light"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-10">Frequently asked questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How does token tracking work?",
                  a: "Tokenlytics integrates with your LLM provider APIs and proxies. We count tokens at the request level and attribute them to your configured tags and teams automatically.",
                },
                {
                  q: "Can I switch plans at any time?",
                  a: "Yes. Upgrade or downgrade at any time. When you upgrade, you get immediate access to new features. Downgrades take effect at the next billing cycle.",
                },
                {
                  q: "Do you support all LLM providers?",
                  a: "We support OpenAI, Anthropic, Google, AWS Bedrock, Azure OpenAI, and any OpenAI-compatible API. Custom provider integrations are available on Enterprise plans.",
                },
                {
                  q: "Is there a commitment or contract?",
                  a: "No. All plans are month-to-month with no long-term contracts. Enterprise customers can opt for annual billing at a discount.",
                },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-border pb-6">
                  <h3 className="font-semibold text-sm mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

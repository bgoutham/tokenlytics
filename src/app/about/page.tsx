import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Our Mission to Optimize AI Token Costs",
  description:
    "Tokenlytics was founded to make AI costs visible and optimizable. Learn about our mission, values, and how we help companies move from reactive spending to proactive AI cost optimization.",
  alternates: {
    canonical: "https://tokenlytics.ai/about",
  },
  openGraph: {
    title: "About Tokenlytics — Making AI Costs Visible and Optimizable",
    description:
      "Learn about Tokenlytics' mission to help companies optimize their AI token spend through the Inform, Optimize, Operate lifecycle.",
    url: "https://tokenlytics.ai/about",
  },
};

const values = [
  {
    title: "Transparency First",
    description: "We believe in making AI costs visible and understandable. No hidden metrics, no black boxes.",
  },
  {
    title: "Customer Outcomes",
    description: "We measure our success by your savings. Every feature is built to deliver measurable ROI.",
  },
  {
    title: "Continuous Improvement",
    description: "AI is evolving fast. We ship weekly to keep you ahead of cost optimization opportunities.",
  },
  {
    title: "Security & Trust",
    description: "We never see your prompts or completions. We only track token counts and metadata.",
  },
];


export default function AboutPage() {
  return (
    <>
      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Making AI costs <span className="gradient-text">visible and optimizable</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed mb-6">
              As companies adopt AI at scale, token costs are becoming one of the fastest-growing line items in engineering budgets. Yet most teams have no visibility into where those tokens go or how to optimize them.
            </p>
            <p className="text-muted text-lg leading-relaxed">
              Tokenlytics was founded to solve this. We help companies move from reactive spending to proactive cost optimization — through a lifecycle of informing, optimizing, and operating their AI spend.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our values</h2>
            <p className="text-muted text-lg">The principles that guide everything we build.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl border border-border bg-background p-8">
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section id="careers" className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join us</h2>
          <p className="text-muted text-lg mb-8">
            We&apos;re building the cost intelligence layer for AI. If you&apos;re excited about making AI sustainable and accessible, we&apos;d love to talk.
          </p>
          <Link
            href="/#cta"
            className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white hover:bg-accent-light transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

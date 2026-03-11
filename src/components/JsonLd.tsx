export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tokenlytics",
    url: "https://tokenlytics.ai",
    logo: "https://tokenlytics.ai/logo.png",
    description:
      "Tokenlytics helps companies gain visibility into AI token usage, optimize LLM spending, and continuously govern costs.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://tokenlytics.ai/#cta",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tokenlytics.ai",
    url: "https://tokenlytics.ai",
    description:
      "AI token cost management and optimization platform. Inform, Optimize, Operate.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://tokenlytics.ai/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Tokenlytics",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://tokenlytics.ai",
    description:
      "AI token cost management platform that helps companies optimize LLM spending through visibility, optimization, and governance.",
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "0",
        priceCurrency: "USD",
        description: "For small teams exploring AI cost visibility. Up to 1M tokens tracked/month.",
      },
      {
        "@type": "Offer",
        name: "Pro",
        price: "499",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "499",
          priceCurrency: "USD",
          billingDuration: "P1M",
        },
        description: "For growing teams. Up to 100M tokens tracked/month with optimization and governance.",
      },
    ],
    featureList: [
      "Real-time token usage dashboards",
      "Cost allocation and tagging",
      "Model rightsizing recommendations",
      "Budget alerts and forecasting",
      "Prompt efficiency analysis",
      "Governance and policy enforcement",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}

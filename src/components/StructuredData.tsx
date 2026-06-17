import { siteConfig } from "@/lib/constants";

export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    url: siteConfig.websiteUrl,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salt Lake City",
      addressRegion: "UT",
      addressCountry: "US",
    },
    description: siteConfig.seoDescription,
    areaServed: "United States",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import { siteConfig, values } from "./constants";

export const capabilityServiceGroups = [
  {
    title: "Monthly Accounting",
    items: [
      "Bookkeeping",
      "Reconciliations",
      "Month-End Close",
      "Financial Statements",
    ],
  },
  {
    title: "Operational Support",
    items: [
      "Bill Pay",
      "Payroll Coordination",
      "Process Improvements",
      "Technology Implementation",
    ],
  },
  {
    title: "Financial Visibility",
    items: [
      "Cash Flow Reporting",
      "P&L Variance Analysis",
      "Balance Sheet Review",
      "Controller-Level Support",
    ],
  },
];

export const capabilityStatement = {
  documentLabel: "Accounting & Controller Services",
  tagline: "Accurate Books. Actionable Financials. Better Decisions.",
  companyOverview: [
    "Crux Accounting helps growing businesses maintain accurate financial records, streamline accounting processes, and gain confidence in their numbers. We provide reliable monthly accounting support, financial reporting, and operational guidance so business owners can make better decisions and focus on growth.",
    "Based in Salt Lake City, UT, we help owners build reliable financial foundations — from clean bookkeeping and reconciliations to owner-ready reporting and cash flow visibility.",
    "Crux Accounting is the trade name of Crux CPA PLLC.",
  ],
  serviceGroups: capabilityServiceGroups,
  whyCrux: [
    ...values.map((value) => ({
      title: value.title,
      description: value.description,
    })),
    {
      title: "CPA-Led Expertise",
      description:
        "Benefit from the perspective of an experienced CPA with Controller and FP&A leadership experience.",
    },
  ],
  aboutSteven: {
    name: "Steven Senft, CPA",
    paragraphs: [
      "Steven Senft, CPA, is the founder of Crux Accounting and brings more than a decade of accounting, financial reporting, and business finance experience. Throughout his career, he has served as a Controller, Assistant Controller, FP&A Manager, and Senior Manager of FP&A, supporting organizations ranging from small businesses to multi-million-dollar companies.",
      "Steven specializes in helping business owners establish reliable accounting processes, maintain accurate financial records, and gain meaningful insight into their business performance. His approach combines practical bookkeeping expertise with the broader financial perspective of an experienced finance leader, helping clients move beyond simply closing the books and toward making better business decisions.",
      "Based in Salt Lake City, Utah, Steven works directly with clients to deliver accurate books, actionable financials, and greater confidence in their numbers.",
    ],
  },
  credibilityCallout: {
    headline: "CPA | Controller | FP&A Leader",
    description:
      "12+ years of accounting and finance experience supporting businesses from startups to multi-million-dollar organizations.",
  },
  contact: {
    name: "Steven Senft, CPA",
    title: "Owner | Crux Accounting",
    email: "steven@cruxacct.com",
    website: siteConfig.website,
    websiteLabel: "Learn more at cruxacct.com",
    location: "Salt Lake City, UT",
  },
  legalDisclaimer: `${siteConfig.brandName} is the trade name of ${siteConfig.legalName}.`,
};

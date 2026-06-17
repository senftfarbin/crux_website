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
      "Controller Services",
    ],
  },
];

export const capabilityStatement = {
  companyOverview: [
    `${siteConfig.brandName} provides monthly accounting support for growing businesses that need accurate books and actionable financial information.`,
    `Based in ${siteConfig.location}, we help business owners build reliable financial foundations — from clean bookkeeping and reconciliations to owner-ready reporting and cash flow visibility.`,
    `${siteConfig.brandName} is the trade name of ${siteConfig.legalName}.`,
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
  contact: {
    name: "Steven Senft, CPA",
    title: "Owner | Crux Accounting",
    email: "steven@cruxacct.com",
    website: siteConfig.website,
    location: "Salt Lake City, UT",
  },
  tagline: siteConfig.headerTagline,
  legalDisclaimer: `${siteConfig.brandName} is the trade name of ${siteConfig.legalName}.`,
};

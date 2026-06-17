export const siteConfig = {
  brandName: "Crux Accounting",
  legalName: "Crux CPA PLLC",
  website: "cruxacct.com",
  websiteUrl: "https://cruxacct.com",
  tagline: "Accurate books. Actionable financials. Better decisions.",
  headerTagline: "Accurate Books. Actionable Financials.",
  seoTitle: "Crux Accounting | Accurate Books. Actionable Financials.",
  seoDescription:
    "Bookkeeping, bill pay, payroll support, reconciliations, and financial reporting for growing businesses.",
  description:
    "Crux Accounting provides monthly accounting support for small businesses that need accurate, actionable financials — clean books, reconciliations, bill pay, payroll coordination, and owner-ready reporting.",
  email: "contact@cruxacct.com",
  phone: "(775) 527-3009",
  location: "Salt Lake City, UT",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Monthly Bookkeeping",
    description:
      "Clean, categorized transactions and up-to-date books so you always know where your business stands.",
    icon: "book",
  },
  {
    title: "Bill Pay Support via Ramp",
    description:
      "Streamlined vendor payments and expense management through Ramp — less admin, better visibility.",
    icon: "payment",
  },
  {
    title: "Balance Sheet Reconciliations",
    description:
      "Bank, credit card, and balance sheet accounts reconciled monthly for accuracy you can trust.",
    icon: "balance",
  },
  {
    title: "Payroll Processing & Coordination",
    description:
      "Payroll handled directly or coordinated with your provider — employees paid on time, records kept clean.",
    icon: "payroll",
  },
  {
    title: "Monthly P&L Variance Reporting",
    description:
      "Understand what changed month over month with clear variance analysis, not just a static report.",
    icon: "chart",
  },
  {
    title: "Financial Review & Owner-Ready Reporting",
    description:
      "Monthly reviews and reports built for business owners — the numbers you need to make better decisions.",
    icon: "report",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: 700,
    description:
      "For businesses that need accurate books and timely financial statements.",
    features: [
      "Monthly bookkeeping",
      "Bank & credit card reconciliations",
      "Basic financial statements",
      "Month-end close support",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: 1000,
    description: "For businesses that need better visibility into performance.",
    features: [
      "Everything in Starter",
      "Payroll coordination",
      "Bill pay support through Ramp",
      "Monthly P&L review",
      "Basic variance commentary",
    ],
    highlighted: true,
  },
  {
    name: "Controller",
    price: 1500,
    description:
      "For businesses that need actionable financial information.",
    features: [
      "Everything in Growth",
      "Balance sheet review",
      "P&L variance analysis",
      "Cash flow visibility",
      "Monthly owner check-in",
    ],
    highlighted: false,
  },
];

export const values = [
  {
    title: "Accuracy First",
    description:
      "Reconciled books and verified numbers — not estimates. You deserve financials you can rely on.",
  },
  {
    title: "Built for Owners",
    description:
      "Reports and conversations designed for decision-makers, not accountants. Clear, concise, actionable.",
  },
  {
    title: "Less Stress, More Clarity",
    description:
      "We handle the monthly grind so you can focus on running your business with confidence.",
  },
];

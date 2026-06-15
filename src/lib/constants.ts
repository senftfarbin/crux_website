export const siteConfig = {
  name: "Crux CPA PLLC",
  tagline: "Accurate books. Actionable financials. Better decisions.",
  description:
    "Monthly accounting support for small businesses that need accurate, actionable financials — clean books, reconciliations, bill pay, payroll coordination, and owner-ready reporting.",
  email: "Steven@cruxacct.com",
  phone: "(775) 527-3009",
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
    name: "Essential",
    price: 700,
    description: "Solid monthly bookkeeping for businesses ready to move beyond basic records.",
    features: [
      "Monthly bookkeeping & categorization",
      "Bank & credit card reconciliations",
      "Monthly financial statements",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Plus",
    price: 1000,
    description: "Full monthly accounting support with bill pay and variance reporting.",
    features: [
      "Everything in Essential",
      "Bill pay support through Ramp",
      "Monthly P&L variance reporting",
      "Payroll coordination",
      "Quarterly financial review call",
    ],
    highlighted: true,
  },
  {
    name: "Controller",
    price: 1500,
    description: "Comprehensive financial oversight for owners who want a true accounting partner.",
    features: [
      "Everything in Plus",
      "Payroll processing or full coordination",
      "Owner-ready reporting package",
      "Monthly financial review call",
      "Priority support & faster turnaround",
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

/**
 * The Systemiq system lineup.
 *
 * Each entry is a real codebase in ~/projects that has already been built and
 * run. They are presented as productised architectures a new client can be
 * deployed onto and tailored, rather than as bespoke one-off case studies.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * VERIFY BEFORE LAUNCH
 *
 * `status` makes a factual claim about deployment and is the one field here
 * that can mislead a prospect. It is set conservatively:
 *
 *   'live'  — evidence in the repo of a real named deploying organisation.
 *   'ready' — complete, working architecture, not confirmed in production.
 *
 * If a system is not actually running for that organisation today, downgrade it
 * to 'ready'. Do not upgrade anything to 'live' without a real deployment.
 *
 * `tailoringWeeks` is an estimate from architecture size, not measured delivery
 * data. Replace with your real numbers once you have them.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type SystemStatus = "live" | "ready";

export interface SystemProduct {
  /** Catalog code. Stable — used as the visual index across the site. */
  code: string;
  /** Product name. Short, industrial, one word. */
  name: string;
  /** What category of system this is. */
  category: string;
  /** The operational job it does, in the client's language. */
  summary: string;
  /** Named modules, taken from the actual route surface of the codebase. */
  modules: string[];
  /** What gets swapped when it is fitted to a new business. */
  tailoring: string;
  /** Who it was originally engineered for. */
  origin: string;
  status: SystemStatus;
  /** Estimated tailoring-to-launch window, in weeks. */
  tailoringWeeks: string;
  /** Industries this architecture fits without structural change. */
  fits: string[];
  /** Internal — source directory under ~/projects. Not rendered. */
  repo: string;
}

export const systems: SystemProduct[] = [
  {
    code: "SYS-01",
    name: "Ledger",
    category: "Billing & receivables",
    summary:
      "Raise invoices, track what customers owe, record purchases and expenses, and cost a job down to the individual trip. Built for businesses that buy and sell goods.",
    modules: [
      "Invoicing",
      "Customer ledgers",
      "Product master",
      "Purchase records",
      "Expense tracking",
      "Trip costing",
      "PDF & QR documents",
      "Owner dashboard",
    ],
    tailoring:
      "Document templates, tax rules, product fields and approval roles are configuration. The billing engine underneath does not change.",
    origin: "Bath fittings distributor",
    status: "live",
    tailoringWeeks: "3–4",
    fits: ["Trading", "Distribution", "Manufacturing", "Retail"],
    repo: "lenore",
  },
  {
    code: "SYS-02",
    name: "Depot",
    category: "Inventory & warehousing",
    summary:
      "Stock control across multiple warehouses with barcode scanning, purchase intake, transfer records and per-user permissions. Knows what you hold, where it sits, and who moved it.",
    modules: [
      "Multi-warehouse stock",
      "Barcode scanning",
      "Inventory ledger",
      "Purchase intake",
      "Invoicing",
      "Customer records",
      "User roles",
      "Operations dashboard",
    ],
    tailoring:
      "Warehouse topology, stock thresholds, barcode symbology and role matrix are set per client. Add locations without touching code.",
    origin: "Multi-branch bath fittings operation",
    status: "ready",
    tailoringWeeks: "4–6",
    fits: ["Wholesale", "Manufacturing", "Retail chains", "Logistics"],
    repo: "warehouse",
  },
  {
    code: "SYS-03",
    name: "Catalog",
    category: "B2B dealer portal",
    summary:
      "A digital product catalog your dealers and reps browse to build a quotation and send it straight to WhatsApp, with an admin console that bulk-syncs stock from Tally exports.",
    modules: [
      "Searchable catalog",
      "Live stock levels",
      "Quotation builder",
      "WhatsApp handoff",
      "Tally bulk sync",
      "Admin console",
      "Image delivery",
      "Category thresholds",
    ],
    tailoring:
      "Already de-branded as a template. Company identity, catalog structure and pricing tiers swap in through settings. Runs on edge infrastructure, so hosting stays cheap.",
    origin: "Industrial bath fittings manufacturer",
    status: "live",
    tailoringWeeks: "2–3",
    fits: ["Manufacturing", "Wholesale", "Distribution", "Building materials"],
    repo: "wetta",
  },
  {
    code: "SYS-04",
    name: "Storefront",
    category: "Commerce & delivery",
    summary:
      "A complete three-sided commerce operation: a customer storefront with checkout and order tracking, a driver app for the delivery run, and a back-office board that dispatches and reports.",
    modules: [
      "Customer storefront",
      "Cart & checkout",
      "Order tracking",
      "Driver app",
      "Dispatch board",
      "Inventory",
      "Promotions",
      "Sales reports",
    ],
    tailoring:
      "Catalog, delivery zones, payment handling and driver workflow are configured per market. Storefront, driver and back-office surfaces ship together.",
    origin: "Grocery delivery operator, Oman",
    status: "live",
    tailoringWeeks: "5–7",
    fits: ["Grocery", "Quick commerce", "Retail", "Food & beverage"],
    repo: "Oman",
  },
  {
    code: "SYS-05",
    name: "Custody",
    category: "Asset lending & tracking",
    summary:
      "Issue physical assets to people, track what is out and overdue, and record the condition and the handler on every return. A full chain of custody for equipment that leaves the building.",
    modules: [
      "Issue desk",
      "Returns ledger",
      "Overdue tracking",
      "Asset registry",
      "Beneficiary records",
      "Digital receipts",
      "Activity audit log",
      "Push notifications",
    ],
    tailoring:
      "Asset categories, loan periods, condition grades and handler roles are configuration. Installs as a mobile app without an app store.",
    origin: "KMCC Qatar medical equipment aid programme",
    status: "live",
    tailoringWeeks: "3–4",
    fits: ["Equipment rental", "Healthcare", "Construction", "Institutions"],
    repo: "kmcc",
  },
  {
    code: "SYS-06",
    name: "Contract",
    category: "Contract & retainer billing",
    summary:
      "Bill against contracts rather than products. Track clients, sub-contractors and agreements, raise invoices tied to a contract, and email the document out automatically.",
    modules: [
      "Contract registry",
      "Client records",
      "Contractor records",
      "Contract invoicing",
      "Expense tracking",
      "PDF generation",
      "Automated email delivery",
      "Revenue dashboard",
    ],
    tailoring:
      "Contract types, billing milestones, document branding and mail routing are per-client settings.",
    origin: "Services and contracting operation",
    status: "ready",
    tailoringWeeks: "3–4",
    fits: ["Contracting", "Professional services", "Facilities", "Agencies"],
    repo: "MyBilling",
  },
  {
    code: "SYS-07",
    name: "Label",
    category: "Label design & printing",
    summary:
      "Map a stock spreadsheet to a label layout and compile print-ready sheets in the browser. Vector barcodes, QR codes and safety symbols, with no data leaving the machine.",
    modules: [
      "Design canvas",
      "Spreadsheet mapping",
      "Code 128 / EAN-13 / UPC-A",
      "QR generation",
      "GHS safety symbols",
      "Auto text scaling",
      "A4 & thermal sheets",
      "PDF compile",
    ],
    tailoring:
      "Label dimensions, field schema and compliance blocks are set per client. Runs entirely client-side, so it needs no server.",
    origin: "Retail and warehouse labelling",
    status: "ready",
    tailoringWeeks: "2–3",
    fits: ["Retail", "Warehousing", "Food processing", "Chemicals"],
    repo: "lebellr",
  },
  {
    code: "SYS-08",
    name: "Civic",
    category: "Community & directory platform",
    summary:
      "A local services platform: a searchable business directory, community marketplace, event listings, transport information and an emergency services desk, in two languages.",
    modules: [
      "Business directory",
      "Marketplace",
      "Community events",
      "Emergency services",
      "Transport information",
      "Bilingual interface",
      "Map integration",
      "Admin dashboard",
    ],
    tailoring:
      "Locality, languages, directory categories and service desks are configured per region.",
    origin: "Panchayat community platform, Kerala",
    status: "ready",
    tailoringWeeks: "4–5",
    fits: ["Local government", "Associations", "Chambers of commerce"],
    repo: "nadapuram",
  },
];

export const lineupIntro = {
  eyebrow: "System lineup",
  heading: "You are not starting from zero.",
  lead: "Eight operational systems already engineered, already running. Your build starts from a proven architecture and gets fitted to how your business actually works — which is why it takes weeks instead of quarters.",
};

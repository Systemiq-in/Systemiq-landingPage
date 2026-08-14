import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Custom Software Solutions \u2014 ERP, Inventory, Portals & Automation",
  description: "Custom ERP systems, inventory and warehouse management, B2B dealer portals, quotation systems, and WhatsApp and Tally integrations built around how your business runs.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Custom Software Solutions \u2014 ERP, Inventory, Portals & Automation",
    description: "Custom ERP systems, inventory and warehouse management, B2B dealer portals, quotation systems, and WhatsApp and Tally integrations built around how your business runs.",
    url: "/solutions",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

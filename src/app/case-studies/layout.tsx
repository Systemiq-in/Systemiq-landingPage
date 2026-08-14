import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "System Lineup \u2014 Eight Business Systems Ready to Deploy",
  description: "Eight operational systems already engineered and running: ERP billing, multi-warehouse inventory, B2B dealer portals, commerce and delivery, asset tracking and more. Tailored to your business in weeks.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "System Lineup \u2014 Eight Business Systems Ready to Deploy",
    description: "Eight operational systems already engineered and running: ERP billing, multi-warehouse inventory, B2B dealer portals, commerce and delivery, asset tracking and more. Tailored to your business in weeks.",
    url: "/case-studies",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

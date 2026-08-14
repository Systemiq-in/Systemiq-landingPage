import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact \u2014 Talk Directly to the Engineer",
  description: "Reach Muhammad Ramzy on WhatsApp, phone or email about custom ERP, inventory, billing or dealer portal software. Replies within one business day.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact \u2014 Talk Directly to the Engineer",
    description: "Reach Muhammad Ramzy on WhatsApp, phone or email about custom ERP, inventory, billing or dealer portal software. Replies within one business day.",
    url: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

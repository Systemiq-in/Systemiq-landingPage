import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Collaborate \u2014 Paid Per-Module Work for Developers",
  description: "Systemiq brings in developers on a paid, per-module basis for larger builds. Ship real production systems instead of tutorial projects.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Collaborate \u2014 Paid Per-Module Work for Developers",
    description: "Systemiq brings in developers on a paid, per-module basis for larger builds. Ship real production systems instead of tutorial projects.",
    url: "/careers",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Industries \u2014 Manufacturing, Retail, Travel, Construction & Healthcare",
  description: "Operational software for manufacturing, retail and wholesale, travel and hospitality, construction and real estate, healthcare, and education.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries \u2014 Manufacturing, Retail, Travel, Construction & Healthcare",
    description: "Operational software for manufacturing, retail and wholesale, travel and hospitality, construction and real estate, healthcare, and education.",
    url: "/industries",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

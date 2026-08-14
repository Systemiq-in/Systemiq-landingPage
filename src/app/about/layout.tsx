import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Muhammad Ramzy \u2014 Independent Software Engineer",
  description: "Systemiq is an independent software practice run by Muhammad Ramzy, building custom ERP, inventory, billing and portal systems for growing businesses in India and the Gulf.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Muhammad Ramzy \u2014 Independent Software Engineer",
    description: "Systemiq is an independent software practice run by Muhammad Ramzy, building custom ERP, inventory, billing and portal systems for growing businesses in India and the Gulf.",
    url: "/about",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "How an Engagement Runs \u2014 From Workflow Audit to Launch",
  description: "Discovery and workflow analysis, architecture blueprint, fixed-scope proposal, agile build, QA, deployment and training. How a Systemiq project runs end to end.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "How an Engagement Runs \u2014 From Workflow Audit to Launch",
    description: "Discovery and workflow analysis, architecture blueprint, fixed-scope proposal, agile build, QA, deployment and training. How a Systemiq project runs end to end.",
    url: "/process",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

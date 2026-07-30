import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import CommandMenu from '@/components/layout/CommandMenu';
import FloatingCTA from '@/components/layout/FloatingCTA';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Systemiq Technologies | Business Systems Studio',
    template: '%s | Systemiq Technologies',
  },
  description:
    'Systemiq Technologies is a Business Systems Studio engineering custom software systems, ERPs, CRMs, and internal tools for growing SMEs. Engineering systems that scale businesses.',
  keywords: [
    'Business Systems Studio',
    'Custom ERP Software',
    'SME Software Engineering',
    'Internal Dashboards',
    'Inventory Automation',
    'Workflow Software',
    'Systemiq Technologies',
  ],
  authors: [{ name: 'Systemiq Technologies' }],
  creator: 'Systemiq Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://systemiq.tech',
    title: 'Systemiq Technologies | Engineering Systems That Scale Businesses',
    description:
      'We replace spreadsheets, disconnected tools, and manual workflows with custom business systems for growing SMEs.',
    siteName: 'Systemiq Technologies',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systemiq Technologies | Business Systems Studio',
    description: 'Custom Software. Engineered Around Your Business.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} dark`}>
      <body className="bg-[#090909] text-white antialiased selection:bg-[#4F7CFF]/30 selection:text-white min-h-screen flex flex-col relative overflow-x-hidden">
        <ScrollProgress />
        <Navbar />
        <CommandMenu />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollProgress from '@/components/layout/ScrollProgress';
import CommandMenu from '@/components/layout/CommandMenu';
import FloatingCTA from '@/components/layout/FloatingCTA';
import GlobalBackground from '@/components/layout/GlobalBackground';
import { site } from '@/content/site';

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
  metadataBase: new URL(site.domain),
  title: {
    default: 'Systemiq | Custom ERP, Inventory & Business Software in India',
    template: '%s | Systemiq',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  description:
    'Custom ERP, inventory, billing and dealer portal software for growing businesses in India. Eight systems already built and running — yours gets tailored from a proven architecture in weeks, not quarters.',
  keywords: [
    'custom ERP software India',
    'inventory management software',
    'B2B dealer portal',
    'custom billing software',
    'Tally integration',
    'business automation Kerala',
    'custom software developer India',
    'Systemiq',
  ],
  authors: [{ name: site.operator.name }],
  creator: site.operator.name,
  publisher: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: site.domain,
    title: 'Systemiq | Custom Business Software, Built From Systems That Already Run',
    description:
      'Replace spreadsheets and disconnected tools with custom ERP, inventory, billing and portal software — tailored from eight proven architectures.',
    siteName: site.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Systemiq | Custom Business Software',
    description: 'Custom ERP, inventory and portal software. Engineered around your operation.',
  },
};

/** Structured data — helps Google and AI search understand who runs this and how to reach them. */
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${site.domain}/#business`,
      name: site.name,
      description:
        'Independent software practice building custom ERP, inventory, billing, dealer portal and workflow automation systems for small and mid-sized businesses.',
      url: site.domain,
      email: site.contact.email,
      telephone: site.contact.phoneRaw,
      founder: { '@id': `${site.domain}/#operator` },
      areaServed: ['IN', 'OM', 'QA', 'AE'],
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
      knowsAbout: [
        'Custom ERP development',
        'Inventory management systems',
        'B2B dealer portals',
        'Billing and invoicing software',
        'Workflow automation',
        'Tally integration',
      ],
    },
    {
      '@type': 'Person',
      '@id': `${site.domain}/#operator`,
      name: site.operator.name,
      jobTitle: site.operator.role,
      email: site.contact.email,
      telephone: site.contact.phoneRaw,
      worksFor: { '@id': `${site.domain}/#business` },
    },
    {
      '@type': 'WebSite',
      '@id': `${site.domain}/#website`,
      url: site.domain,
      name: site.name,
      publisher: { '@id': `${site.domain}/#business` },
      inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NV4HPRRLMK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NV4HPRRLMK');
          `}
        </Script>
      </head>
      <body className="bg-[#090A0C] text-white/90 antialiased selection:bg-[#0071E3]/30 selection:text-white min-h-screen flex flex-col relative overflow-x-hidden">
        <GlobalBackground />
        <ScrollProgress />
        <Navbar />
        <CommandMenu />
        <main className="flex-1 relative z-20">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}

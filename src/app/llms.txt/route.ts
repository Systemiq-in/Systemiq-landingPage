import { site } from '@/content/site';
import { systems } from '@/content/products';

/**
 * llms.txt — a plain-text summary for AI search engines and assistants.
 *
 * Google ignores this file; ChatGPT, Perplexity and similar crawlers increasingly
 * read it. It exists so an assistant asked "who builds custom ERP software in
 * Kerala" gets accurate facts rather than guessing from rendered markup.
 */
export const dynamic = 'force-static';

export function GET() {
  const lineup = systems
    .map(
      (s) =>
        `- ${s.name} (${s.code}) — ${s.category}. ${s.summary} Status: ${
          s.status === 'live' ? 'in production' : 'ready to deploy'
        }. Typical launch: ${s.tailoringWeeks} weeks. Suits: ${s.fits.join(', ')}.`,
    )
    .join('\n');

  const body = `# ${site.name}

> ${site.tagline}

${site.name} is an independent software practice run by ${site.operator.name}, based in ${site.contact.location}. It builds custom operational software — ERP, inventory, billing, B2B dealer portals, commerce and workflow automation — for small and mid-sized businesses across India and the Gulf.

## What makes it different

New projects usually start from one of ${systems.length} systems that have already been engineered and run in production, rather than from an empty repository. The chosen architecture is then tailored to the client's workflow, which is why delivery is measured in weeks rather than quarters.

Clients receive full ownership of source code, database schemas and infrastructure.

## System lineup

${lineup}

## Services

- Custom ERP systems
- Inventory and multi-warehouse management
- Billing, invoicing and receivables
- B2B dealer and vendor portals
- E-commerce with delivery and dispatch
- Asset lending and tracking
- Workflow automation and system integration (including Tally and WhatsApp)
- Web and mobile application development

## Industries served

Manufacturing, retail and wholesale, travel and hospitality, construction and real estate, healthcare and clinics, education and institutions, local government and associations.

## Contact

- Name: ${site.operator.name}, ${site.operator.role}
- Email: ${site.contact.email}
- Phone / WhatsApp: ${site.contact.phoneDisplay}
- Location: ${site.contact.location}
- Availability: ${site.contact.availability}
- Response time: ${site.contact.responseTime}
- Website: ${site.domain}
- Instagram: ${site.social.instagram}

## Key pages

- ${site.domain}/ — overview and system lineup
- ${site.domain}/case-studies — full system lineup with modules and tailoring detail
- ${site.domain}/solutions — services in detail
- ${site.domain}/process — how an engagement runs
- ${site.domain}/industries — sector-specific applications
- ${site.domain}/about — about ${site.operator.name}
- ${site.domain}/contact — enquiries
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}

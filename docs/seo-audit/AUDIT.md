# Systemiq SEO Audit

**Date:** 2026-08-14
**Audited:** local production build (`next start`), 8 crawlable pages
**Business type:** Local / national service business — independent software practice, Kerala, India

> Audited against the local production build. The live `systemiq.in` still serves the
> previous deployment until it is redeployed, so nothing below is measured against
> production HTML.

---

## SEO Health Score: 82 / 100

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | 88 |
| Content Quality | 23% | 78 |
| On-Page SEO | 20% | 90 |
| Schema / Structured Data | 10% | 80 |
| Performance | 10% | 72 |
| AI Search Readiness | 10% | 85 |
| Images | 5% | 70 |

---

## Fixed during this audit

**Critical — duplicate canonicals across every page.** All eight pages emitted
`<link rel="canonical" href="https://systemiq.in">`, declaring every page a duplicate of
the homepage. Google would have indexed only `/` and dropped the rest. Cause: a blanket
`alternates.canonical: '/'` in the root layout, inherited by every route because the page
components are all `'use client'` and cannot export their own metadata.
**Fix:** added a server `layout.tsx` per route with its own title, description and
self-referencing canonical. Verified all eight are now unique.

**Critical — identical titles and descriptions on all eight pages.** Same root cause,
same fix. Every page now has a distinct, keyword-targeted title and description.

**High — no Open Graph image.** Every share on WhatsApp, LinkedIn and X rendered a blank
card. Added `opengraph-image.tsx`, generated at build time from brand colours so it cannot
drift from a redesign.

**High — fabricated content undermining E-E-A-T.** Invented clients, invented metrics, a
non-existent team and a misspelled owner name. All removed; see the main commit.

**Medium — no `llms.txt`.** Added at `/llms.txt`, generated from `content/site.ts` and
`content/products.ts` so it stays accurate automatically. Google ignores it; ChatGPT and
Perplexity increasingly read it.

**Medium — structured data absent.** Added `ProfessionalService` + `Person` + `WebSite`
JSON-LD with real contact details, `areaServed`, `knowsAbout` and `sameAs`.

---

## Outstanding findings

### High

**No third-party proof anywhere on the site.**
Removing the fabricated testimonials was correct, but it left a real E-E-A-T gap: there is
now nothing on the site that a stranger can verify. This is the single highest-value
remaining item.
*Fix:* get two or three real client quotes with a name, company and city. One honest
sentence from Wetta or the KMCC programme beats five invented paragraphs. Add
`Review`/`AggregateRating` schema once they are real.

**`public/logo.png` is 701 KB and unreferenced.**
Not served to users, but it sits in the repo and will be deployed.
*Fix:* delete it, or if it is the source asset, move it out of `public/`. The 41 KB
`logo_without_bg.png` that is actually used should also be converted to SVG or WebP — it
renders at 20–32 px in the nav and footer, so 41 KB is roughly 40× more than needed.

**No Google Business Profile signals.**
For "custom software developer Kerala" style searches, a GBP listing is usually the
single biggest local ranking factor and none is referenced.
*Fix:* create a Google Business Profile, then add its URL to `site.social` and to the
`sameAs` array in the JSON-LD.

### Medium

**Thin legal pages.** `/legal/privacy` (38 lines) and `/legal/terms` (32 lines) are
below the threshold where Google considers a page substantive. They are also linked
site-wide from the footer, so they get crawled often.
*Fix:* expand to real policies, or add `noindex` if they are placeholders.

**Missing schema types.** `Service` per offering, `FAQPage`, and `BreadcrumbList` are all
absent. FAQ schema in particular can win rich results for "how much does custom ERP cost"
style queries.

**No FAQ content.** There is no page targeting the question-shaped queries this audience
actually searches — cost, timeline, ownership, Tally integration, what happens to existing
data. This is both an SEO gap and a sales gap.

**Sitemap lacks the new routes' priorities.** All eight pages are present and correct, but
`/case-studies` — now the strongest commercial page — sits at the same priority as
`/careers`. Raise it to 0.9.

### Low

**Performance.** 172 KB First Load JS on the homepage, driven largely by framer-motion,
which is imported by nearly every section. The homepage HTML is 113 KB.
*Fix:* not urgent, but lazy-loading below-fold animated sections would cut initial JS
meaningfully. No field data is available yet — check CrUX once the site has traffic.

**`html lang="en"` should be `en-IN`** to match the `en_IN` OG locale and the stated market.

---

## Action plan

**Week 1**
1. Redeploy so the canonical and metadata fixes actually reach production
2. Submit the updated sitemap in Google Search Console
3. Create a Google Business Profile; add to `sameAs`
4. Delete `public/logo.png`; convert the nav logo to SVG
5. Collect two real client testimonials

**Weeks 2–3**
6. Write an FAQ page targeting cost / timeline / ownership / Tally / data migration
7. Add `Service`, `FAQPage` and `BreadcrumbList` schema
8. Expand or `noindex` the legal pages
9. Raise `/case-studies` sitemap priority to 0.9

**Month 2**
10. One case-study page per production system, each targeting its own keyword cluster
    ("inventory management software for bath fittings distributors" and similar) — these
    are long-tail, low-competition, and you have the real material
11. Add `Review` schema once testimonials are live

**Ongoing**
12. Watch Search Console for indexation of all eight pages — confirms the canonical fix
13. Re-run this audit after the first content additions

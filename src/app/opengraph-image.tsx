import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const alt = 'Systemiq — custom ERP, inventory and business software';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * The logo is inlined as a data URI because Satori cannot fetch relative URLs
 * at build time. The mark's braces are near-black, so it sits on a white tile —
 * the same treatment the navbar uses against the dark background.
 */
const logoDataUri = `data:image/png;base64,${readFileSync(
  join(process.cwd(), 'public', 'logo_without_bg.png'),
).toString('base64')}`;

/**
 * Social share card, generated at build time.
 *
 * Kept as code rather than a static PNG so it stays in sync with the brand
 * colours and never goes stale against a redesign.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#090A0C',
          padding: '72px',
          position: 'relative',
        }}
      >
        {/* Ambient brand glow */}
        <div
          style={{
            position: 'absolute',
            top: -260,
            right: -160,
            width: 720,
            height: 720,
            borderRadius: 9999,
            background: 'radial-gradient(circle, rgba(0,113,227,0.32) 0%, rgba(9,10,12,0) 70%)',
            display: 'flex',
          }}
        />

        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <div
            style={{
              width: 156,
              height: 156,
              borderRadius: 34,
              background: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 18px 60px rgba(0,113,227,0.28)',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoDataUri} alt="" width={124} height={124} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span
                style={{
                  color: '#FFFFFF',
                  fontSize: 62,
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  lineHeight: 1,
                }}
              >
                SYSTEMIQ
              </span>
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 9999,
                  background: '#0071E3',
                  display: 'flex',
                }}
              />
            </div>
            <span
              style={{
                color: 'rgba(255,255,255,0.5)',
                fontSize: 25,
                letterSpacing: '0.05em',
              }}
            >
              Business Systems Studio
            </span>
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              color: '#FFFFFF',
              fontSize: 60,
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.06,
            }}
          >
            <span>Custom business software,</span>
            <span style={{ color: '#00A3FF' }}>built from systems that run.</span>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: 27, lineHeight: 1.35 }}>
            ERP · Inventory · Billing · Dealer portals · Automation
          </span>
        </div>

        {/* Footer strip */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: 28,
            color: 'rgba(255,255,255,0.45)',
            fontSize: 24,
          }}
        >
          <span>systemiq.in</span>
          <span>8 systems ready to deploy</span>
        </div>
      </div>
    ),
    size,
  );
}

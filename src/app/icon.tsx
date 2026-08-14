import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

/**
 * Favicon.
 *
 * The raw mark is near-black on transparency, so it vanished against dark
 * browser chrome. It is composited onto a solid light tile here so it reads
 * in both light and dark tab bars.
 */
const logoDataUri = `data:image/png;base64,${readFileSync(
  join(process.cwd(), 'public', 'logo_without_bg.png'),
).toString('base64')}`;

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF',
          borderRadius: 14,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoDataUri} alt="" width={52} height={52} />
      </div>
    ),
    size,
  );
}

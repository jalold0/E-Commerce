import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

async function loadPlayfair(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0',
      },
    }).then((r) => r.text());
    const urlMatch = css.match(/url\((https:\/\/[^)]+)\)/);
    if (!urlMatch?.[1]) return null;
    return await fetch(urlMatch[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

// Sellobay Admin Panel — qora bg + oltin serif SB
export default async function AppleIcon() {
  const fontData = await loadPlayfair();
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #000 0%, #16161A 100%)',
      }}
    >
      <div
        style={{
          fontSize: 120,
          fontWeight: 900,
          letterSpacing: -10,
          color: '#C9A961',
          fontFamily: fontData ? '"Playfair"' : 'Georgia, "Times New Roman", serif',
          display: 'flex',
          lineHeight: 1,
        }}
      >
        SB
      </div>
    </div>,
    {
      ...size,
      fonts: fontData
        ? [{ name: 'Playfair', data: fontData, weight: 900, style: 'normal' }]
        : undefined,
    },
  );
}

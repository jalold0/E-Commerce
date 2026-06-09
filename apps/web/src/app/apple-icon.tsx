import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

// Google Fonts'dan Playfair Display Black yuklab keladi — ImageResponse uchun
async function loadPlayfair(): Promise<ArrayBuffer | null> {
  try {
    const cssUrl = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900';
    // User-Agent kerak — modern UA bilan Google woff2 qaytaradi
    const css = await fetch(cssUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0',
      },
    }).then((r) => r.text());

    // Birinchi url(...) qiymatini ajratamiz
    const urlMatch = css.match(/url\((https:\/\/[^)]+)\)/);
    if (!urlMatch?.[1]) return null;

    return await fetch(urlMatch[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

// Sellobay iOS home-screen icon — elegant serif SB monogram (Playfair Display)
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
        background: 'linear-gradient(180deg, #1A0008 0%, #5C0015 50%, #8B0020 100%)',
        position: 'relative',
      }}
    >
      {/* Subtle radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, rgba(179,0,41,0.3) 0%, transparent 70%)',
        }}
      />
      <div
        style={{
          position: 'relative',
          fontSize: 120,
          fontWeight: 900,
          letterSpacing: -10,
          color: '#fff',
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

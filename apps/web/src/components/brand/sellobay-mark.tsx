import * as React from 'react';

interface SellobayMarkProps {
  size?: number; // px o'lcham
  className?: string;
  variant?: 'bordeaux' | 'dark' | 'white' | 'gold';
  rounded?: number; // border-radius (px)
}

/**
 * Sellobay rasmiy SB monogram — inline SVG.
 * Playfair Display font CSS variable (--font-serif) orqali yuklanadi
 * va SVG ichidagi <text> elementiga ham qo'llaniladi.
 *
 * Variantlar:
 * - bordeaux: bordo gradient bg + oq SB (asosiy)
 * - dark: qora bg + oltin SB (admin)
 * - white: oq bg + bordo SB (light theme)
 * - gold: oltin gradient bg + qora SB (premium accent)
 */
export function SellobayMark({
  size = 40,
  className = '',
  variant = 'bordeaux',
  rounded = 12,
}: SellobayMarkProps) {
  const gradients = {
    bordeaux: { from: '#1A0008', mid: '#5C0015', to: '#8B0020', text: '#fff' },
    dark: { from: '#0A0A0C', mid: '#16161A', to: '#1F1F24', text: '#C9A961' },
    white: { from: '#fff', mid: '#fff', to: '#fff', text: '#8B0020' },
    gold: { from: '#C9A961', mid: '#D4B370', to: '#E5C77A', text: '#5C0015' },
  };
  const g = gradients[variant];
  const gradId = `sb-mark-${variant}`;
  const glowId = `sb-glow-${variant}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Sellobay"
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={g.from} />
          <stop offset="0.5" stopColor={g.mid} />
          <stop offset="1" stopColor={g.to} />
        </linearGradient>
        <radialGradient id={glowId} cx="50%" cy="50%" r="55%">
          <stop offset="0" stopColor="#B30029" stopOpacity={variant === 'bordeaux' ? 0.3 : 0} />
          <stop offset="1" stopColor="#000" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background */}
      <rect width="64" height="64" rx={rounded} fill={`url(#${gradId})`} />
      {variant === 'bordeaux' && (
        <rect width="64" height="64" rx={rounded} fill={`url(#${glowId})`} />
      )}

      {/* SB monogram — Playfair Display Black, interlocking effect via letter-spacing */}
      <text
        x="32"
        y="46"
        textAnchor="middle"
        fontFamily="var(--font-serif), 'Playfair Display', 'Didot', 'Bodoni 72', Georgia, 'Times New Roman', serif"
        fontSize="40"
        fontWeight="900"
        letterSpacing="-4"
        fill={g.text}
        style={{ textRendering: 'geometricPrecision' }}
      >
        SB
      </text>
    </svg>
  );
}

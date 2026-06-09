import Image from 'next/image';
import * as React from 'react';

interface SellobayMarkProps {
  size?: number; // px
  className?: string;
  priority?: boolean; // Next/image priority hint
}

/**
 * Sellobay rasmiy SB logo — foydalanuvchi yuborgan PNG.
 * Manba: /public/sellobay-icon-512.png (340×340 asl, kerakli o'lchamga moslanadi)
 *
 * Bu komponent loyihada SB logoni ko'rsatish uchun yagona yo'l —
 * SVG chizish yo'q, har joyda AYNAN bir xil rasmiy logo ishlatiladi.
 */
export function SellobayMark({ size = 40, className = '', priority = false }: SellobayMarkProps) {
  // O'lchamga qarab eng yaqin assetni tanlaymiz (bandwidth tejash)
  const src =
    size <= 32
      ? '/sellobay-icon-32.png'
      : size <= 64
        ? '/sellobay-icon-64.png'
        : size <= 192
          ? '/sellobay-icon-192.png'
          : '/sellobay-icon-512.png';

  return (
    <Image
      src={src}
      alt="Sellobay"
      width={size}
      height={size}
      className={'rounded-[22%] ' + className}
      priority={priority}
    />
  );
}

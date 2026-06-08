// Mobile uchun deterministik format helperlari — web bilan bir xil.
// SSR yo'q, ammo determinastik ICU farqlardan saqlash uchun manual.

import { formatMoney as fmtMoney, type CurrencyCode } from '@ecom/utils';

export function formatMoney(
  amount: number | string | null | undefined,
  currency: CurrencyCode = 'UZS',
): string {
  if (amount === null || amount === undefined) return '—';
  const n = typeof amount === 'string' ? Number(amount) : amount;
  if (!Number.isFinite(n)) return '—';
  return fmtMoney(n, currency);
}

export function formatNumber(value: number | string | null | undefined): string {
  if (value === null || value === undefined) return '—';
  const n = typeof value === 'string' ? Number(value) : value;
  if (!Number.isFinite(n)) return '—';
  const fixed = Math.abs(Math.trunc(n)).toString();
  const grouped = fixed.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return n < 0 ? `-${grouped}` : grouped;
}

const MONTHS_UZ_SHORT = [
  'yan',
  'fev',
  'mar',
  'apr',
  'may',
  'iyn',
  'iyl',
  'avg',
  'sen',
  'okt',
  'noy',
  'dek',
];

function pad2(n: number): string {
  return n.toString().padStart(2, '0');
}

export function formatDate(value: Date | string | null | undefined): string {
  if (!value) return '—';
  const d = typeof value === 'string' ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return '—';
  return `${pad2(d.getDate())} ${MONTHS_UZ_SHORT[d.getMonth()]}, ${d.getFullYear()}`;
}

export function formatRelative(value: Date | string | null | undefined): string {
  if (!value) return '—';
  const d = typeof value === 'string' ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return '—';
  const diff = d.getTime() - Date.now();
  const past = diff < 0;
  const sec = Math.round(Math.abs(diff) / 1000);
  const suffix = past ? 'oldin' : 'keyin';
  if (sec < 60) return past ? 'hozirgina' : 'hoziroq';
  const min = Math.round(sec / 60);
  if (min < 60) return `${min} daqiqa ${suffix}`;
  const hr = Math.round(min / 60);
  if (hr < 24) return `${hr} soat ${suffix}`;
  const day = Math.round(hr / 24);
  return `${day} kun ${suffix}`;
}

export function discountPercent(price: number, oldPrice?: number | null): number {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round(100 - (price / oldPrice) * 100);
}

export function initials(name?: string | null): string {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase() ?? '').join('') || '?';
}

export function pickLocalized(
  value: Partial<Record<'uz' | 'ru' | 'en', string>> | string | null | undefined,
  locale: 'uz' | 'ru' | 'en' = 'uz',
): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[locale] ?? value.uz ?? '';
}

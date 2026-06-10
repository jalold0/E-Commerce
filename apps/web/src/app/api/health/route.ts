// Sellobay — Health check endpoint
// GET /api/health — DB ulanish holati (monitoring + diagnostika uchun)

import { NextResponse } from 'next/server';

import { prisma } from '../../../lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const startedAt = Date.now();
  try {
    const products = await prisma.product.count();
    return NextResponse.json({
      ok: true,
      db: 'up',
      products,
      latencyMs: Date.now() - startedAt,
      hasDbUrl: Boolean(process.env.DATABASE_URL),
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        db: 'down',
        // Diagnostika: xato nomi va xabari (parol URL'da emas — Prisma uni yashiradi)
        error: err instanceof Error ? `${err.name}: ${err.message.slice(0, 600)}` : String(err),
        hasDbUrl: Boolean(process.env.DATABASE_URL),
        dbUrlHost: process.env.DATABASE_URL?.match(/@([^/]+)\//)?.[1] ?? null,
      },
      { status: 500 },
    );
  }
}

'use client';

import { Sheet, SheetContent, SheetTrigger } from '@ecom/ui';
import { ChevronRight, Heart, Menu, Phone, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

const CATEGORIES = [
  { slug: 'clothing', label: 'Kiyim-kechak', emoji: '👕' },
  { slug: 'shoes', label: 'Poyabzal', emoji: '👟' },
  { slug: 'perfume', label: 'Atirlar', emoji: '🌸' },
  { slug: 'cosmetics', label: 'Kosmetika', emoji: '💄' },
  { slug: 'beauty', label: "Go'zallik", emoji: '✨' },
  { slug: 'accessories', label: 'Aksessuarlar', emoji: '👜' },
];

const QUICK_LINKS = [
  { href: '/profile', label: 'Profil', icon: User },
  { href: '/profile/wishlist', label: 'Sevimlilar', icon: Heart },
  { href: '/orders', label: 'Buyurtmalarim', icon: ShoppingBag },
];

const SUPPORT_LINKS = [
  { href: '/download', label: '📱 Ilovani yuklab olish' },
  { href: '/help', label: "Qo'llab-quvvatlash" },
  { href: '/delivery', label: 'Yetkazib berish' },
  { href: '/returns', label: 'Qaytarish' },
  { href: '/faq', label: 'FAQ' },
  { href: '/sell', label: "Sotuvchi bo'lish" },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          type="button"
          className="hover:bg-accent grid h-10 w-10 place-items-center rounded-md md:hidden"
          aria-label="Menyu"
        >
          <Menu size={20} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 overflow-y-auto p-0">
        <div className="from-primary text-primary-foreground border-b bg-gradient-to-br to-rose-500 p-5">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-white/15 font-black backdrop-blur">
              E
            </div>
            <div className="leading-tight">
              <div className="text-base font-bold">E-Commerce</div>
              <div className="text-[10px] opacity-80">Ekosistema</div>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <Link
              href="/login"
              onClick={close}
              className="text-foreground flex-1 rounded-full bg-white px-3 py-2 text-center text-sm font-medium"
            >
              Kirish
            </Link>
            <Link
              href="/register"
              onClick={close}
              className="flex-1 rounded-full border border-white/40 px-3 py-2 text-center text-sm font-medium"
            >
              Ro&apos;yxatdan
            </Link>
          </div>
        </div>

        <div className="space-y-1 p-3">
          {QUICK_LINKS.map((l) => {
            const Icon = l.icon;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="hover:bg-accent flex items-center gap-3 rounded-md px-3 py-2.5 text-sm"
              >
                <Icon size={18} className="text-muted-foreground" />
                <span>{l.label}</span>
                <ChevronRight size={14} className="text-muted-foreground ml-auto" />
              </Link>
            );
          })}
        </div>

        <div className="border-t p-3">
          <div className="text-muted-foreground mb-1 px-3 text-[10px] font-semibold uppercase tracking-widest">
            Kategoriyalar
          </div>
          <div className="space-y-0.5">
            {CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                href={`/catalog?category=${c.slug}`}
                onClick={close}
                className="hover:bg-accent flex items-center gap-3 rounded-md px-3 py-2 text-sm"
              >
                <span className="text-base">{c.emoji}</span>
                <span>{c.label}</span>
                <ChevronRight size={14} className="text-muted-foreground ml-auto" />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t p-3">
          <div className="text-muted-foreground mb-1 px-3 text-[10px] font-semibold uppercase tracking-widest">
            Yordam
          </div>
          <div className="space-y-0.5">
            {SUPPORT_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="hover:bg-accent block rounded-md px-3 py-2 text-sm"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t p-4">
          <a
            href="tel:+998712000000"
            className="bg-secondary/50 flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium"
          >
            <Phone size={16} className="text-primary" />
            <span>+998 71 200 00 00</span>
          </a>
          <div className="text-muted-foreground mt-1 px-3 text-xs">
            24/7 qo&apos;llab-quvvatlash
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

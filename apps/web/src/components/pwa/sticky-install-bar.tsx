'use client';

import { cn } from '@ecom/ui';
import { Download, Smartphone, X } from 'lucide-react';
import * as React from 'react';

const DISMISS_KEY = 'ecom_sticky_install_dismissed_v1';
const DISMISS_DAYS = 7;

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

// Telefon brauzerida pastda doimo turadigan install bar.
// Faqat install qilish mumkin bo'lganda chiqadi.
export function StickyInstallBar() {
  const [event, setEvent] = React.useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(display-mode: standalone)').matches) return;
    if (window.innerWidth > 768) return; // faqat mobile

    const dismissed = window.localStorage.getItem(DISMISS_KEY);
    if (dismissed && Date.now() - Number(dismissed) < DISMISS_DAYS * 86_400_000) return;

    const onBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setEvent(e as BeforeInstallPromptEvent);
      setVisible(true);
    };
    const onAppInstalled = () => {
      setVisible(false);
      setEvent(null);
    };

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onAppInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  const install = async () => {
    if (!event) return;
    await event.prompt();
    const result = await event.userChoice;
    if (result.outcome === 'accepted') {
      setVisible(false);
      setEvent(null);
    }
  };

  const dismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setVisible(false);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(DISMISS_KEY, String(Date.now()));
    }
  };

  if (!visible || !event) return null;

  return (
    <div
      role="banner"
      className={cn(
        'bg-card fixed inset-x-0 bottom-0 z-50 border-t md:hidden',
        'animate-in slide-in-from-bottom-full duration-300',
      )}
    >
      <button
        onClick={install}
        className="active:bg-accent flex w-full items-center gap-3 px-4 py-3 text-left"
      >
        <div className="from-primary grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br to-rose-500 text-sm font-black text-white">
          E
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-sm font-semibold">E-Commerce ilovasini o&apos;rnating</div>
          <div className="text-muted-foreground text-[11px]">Tezroq, push xabarlar, offline</div>
        </div>
        <div className="bg-primary text-primary-foreground flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-semibold">
          <Download size={12} /> O&apos;rnatish
        </div>
        <button
          onClick={dismiss}
          className="text-muted-foreground hover:bg-accent grid h-8 w-8 place-items-center rounded-full"
          aria-label="Yopish"
        >
          <X size={14} />
        </button>
      </button>
    </div>
  );
}

// Hero install kartochka — bosh sahifaga qo'shish uchun
interface InstallHeroProps {
  className?: string;
}

export function InstallHeroCard({ className }: InstallHeroProps) {
  const [event, setEvent] = React.useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = React.useState(false);
  const [isIos, setIsIos] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setInstalled(true);
      return;
    }
    const ua = window.navigator.userAgent;
    if (/iPhone|iPad|iPod/.test(ua) && /Safari/.test(ua) && !/CriOS|FxiOS/.test(ua)) {
      setIsIos(true);
    }

    const onBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setEvent(e as BeforeInstallPromptEvent);
    };
    const onAppInstalled = () => {
      setInstalled(true);
      setEvent(null);
    };
    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt);
    window.addEventListener('appinstalled', onAppInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt);
      window.removeEventListener('appinstalled', onAppInstalled);
    };
  }, []);

  if (installed) return null;

  const install = async () => {
    if (!event) return;
    await event.prompt();
    const result = await event.userChoice;
    if (result.outcome === 'accepted') {
      setInstalled(true);
      setEvent(null);
    }
  };

  return (
    <div
      className={cn(
        'from-primary relative overflow-hidden rounded-2xl border bg-gradient-to-br via-violet-600 to-rose-600 p-5 text-white shadow-lg md:p-6',
        className,
      )}
    >
      <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />

      <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/15 backdrop-blur md:h-16 md:w-16">
          <Smartphone className="h-7 w-7 md:h-8 md:w-8" />
        </div>
        <div className="flex-1">
          <div className="text-xs font-bold uppercase tracking-widest text-white/80">📱 Yangi</div>
          <h3 className="mt-1 text-lg font-bold leading-tight md:text-xl">
            E-Commerce ilovasini telefoningizga o&apos;rnating
          </h3>
          <p className="mt-1 max-w-md text-xs text-white/85 md:text-sm">
            App Store yoki Google Play kerak emas — to&apos;g&apos;ridan-to&apos;g&apos;ri
            brauzerdan bir bosishda. Tezroq, push xabarlar, offline.
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row">
          {event ? (
            <button
              onClick={install}
              className="text-foreground inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold active:opacity-85"
            >
              <Download size={16} /> O&apos;rnatish
            </button>
          ) : isIos ? (
            <a
              href="/download"
              className="text-foreground inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold active:opacity-85"
            >
              📱 iPhone uchun ko&apos;rsatma
            </a>
          ) : (
            <a
              href="/download"
              className="text-foreground inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold active:opacity-85"
            >
              <Download size={16} /> Yo&apos;riqnoma
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

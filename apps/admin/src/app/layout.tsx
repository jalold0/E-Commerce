import '@ecom/ui/globals.css';

import type { Metadata, Viewport } from 'next';
import type * as React from 'react';

import { Shell } from '../components/layout/shell';
import { InstallPrompt } from '../components/pwa/install-prompt';
import { ServiceWorkerRegister } from '../components/pwa/service-worker-register';
import { Providers } from '../providers';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3001'),
  title: {
    default: 'Sellobay Admin Panel',
    template: '%s | Sellobay Admin',
  },
  description: 'Sellobay marketplace boshqaruv markazi',
  applicationName: 'Sellobay Admin',
  appleWebApp: {
    capable: true,
    title: 'Sellobay Admin',
    statusBarStyle: 'black',
  },
  formatDetection: { telephone: false },
  // Next.js app/icon.png va app/apple-icon.png'ni avtomatik aniqlaydi
};

export const viewport: Viewport = {
  themeColor: '#0A0A0C',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className="bg-background text-foreground min-h-screen antialiased">
        <Providers>
          <Shell>{children}</Shell>
          <InstallPrompt />
          <ServiceWorkerRegister />
        </Providers>
      </body>
    </html>
  );
}

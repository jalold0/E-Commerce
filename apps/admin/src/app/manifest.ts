import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sellobay Admin Panel',
    short_name: 'SB Admin',
    description: 'Sellobay marketplace boshqaruv markazi',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'any',
    background_color: '#ffffff',
    theme_color: '#0A0A0C',
    lang: 'uz',
    categories: ['business', 'productivity'],
    icons: [
      { src: '/sellobay-icon-32.png', sizes: '32x32', type: 'image/png' },
      { src: '/sellobay-icon-180.png', sizes: '180x180', type: 'image/png' },
      { src: '/sellobay-icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/sellobay-icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
      { src: '/sellobay-icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/sellobay-icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
    shortcuts: [
      {
        name: 'Buyurtmalar',
        short_name: 'Orders',
        url: '/orders',
        icons: [{ src: '/sellobay-icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Mahsulotlar',
        short_name: 'Products',
        url: '/products',
        icons: [{ src: '/sellobay-icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Mijozlar',
        short_name: 'Customers',
        url: '/customers',
        icons: [{ src: '/sellobay-icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Analitika',
        short_name: 'Analytics',
        url: '/analytics',
        icons: [{ src: '/sellobay-icon-192.png', sizes: '192x192' }],
      },
    ],
  };
}

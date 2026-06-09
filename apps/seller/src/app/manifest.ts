import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sellobay Sotuvchi paneli',
    short_name: 'SB Sotuvchi',
    description: 'Sellobay marketplace sotuvchi paneli — do`koningizni boshqaring',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'any',
    background_color: '#ffffff',
    theme_color: '#8B0020',
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
        name: 'Mahsulotlarim',
        short_name: 'Products',
        url: '/products',
        icons: [{ src: '/sellobay-icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Inventar',
        short_name: 'Inventory',
        url: '/inventory',
        icons: [{ src: '/sellobay-icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Moliya',
        short_name: 'Finance',
        url: '/finance',
        icons: [{ src: '/sellobay-icon-192.png', sizes: '192x192' }],
      },
    ],
  };
}

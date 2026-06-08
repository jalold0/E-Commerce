/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Custom palette — web bilan moslashtirilgan
        primary: {
          DEFAULT: '#0f172a',
          foreground: '#f8fafc',
        },
        accent: {
          DEFAULT: '#e11d48',
          foreground: '#fff1f2',
        },
        muted: {
          DEFAULT: '#f1f5f9',
          foreground: '#64748b',
        },
        card: '#ffffff',
        border: '#e2e8f0',
        background: '#ffffff',
        foreground: '#0f172a',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444',
      },
      fontFamily: {
        sans: ['System'],
      },
    },
  },
  plugins: [],
};

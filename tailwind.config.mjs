/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,obs,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card-bg, rgba(10, 15, 30, 0.55))',
          foreground: 'var(--foreground)'
        },
        popover: {
          DEFAULT: 'var(--background)',
          foreground: 'var(--foreground)'
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: '#ffffff'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: '#ffffff'
        },
        muted: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          foreground: '#9ca3af'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: '#ffffff'
        },
        border: 'var(--card-border)',
        cyber: {
          cyan: '#00f0ff',
          green: '#00ff9d',
          purple: '#7000ff',
          pink: '#ff0055',
          dark: '#030712',
          surface: '#080d1a',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

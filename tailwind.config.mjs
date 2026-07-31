/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,obs,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
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
  plugins: [],
}

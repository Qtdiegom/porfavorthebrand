import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#b5935a',
        cream: '#f0ead6',
        'brand-red': '#c0392b',
        'brand-green': '#1a6b3a',
        dark: '#080808',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      keyframes: {
        'marquee-left': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        spin3d: {
          from: { transform: 'rotateY(0deg)' },
          to: { transform: 'rotateY(360deg)' },
        },
      },
      animation: {
        'marquee-left': 'marquee-left 28s linear infinite',
        'marquee-right': 'marquee-right 22s linear infinite',
        float: 'float 4s ease-in-out infinite',
        spin3d: 'spin3d 7s linear infinite',
      },
    },
  },
  plugins: [],
}
export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // colors
      // fonts
      fontFamily: {
        'outfit': ['var(--font-outfit)'],
        'syne': ['var(--font-syne)'],
      },
      // screens
      screens: {
        '3xl': '1900px',
      },
    },
  },
  plugins: [],
}
export default config
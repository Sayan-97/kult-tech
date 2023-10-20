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
      colors: {
        'secondaryColor': '#C528C3',
        'textDarkGrey': '#8A8A8A',
      },
      // gradient colors
      backgroundImage: {
        'primaryGradient': 'linear-gradient(90deg, #5416E9 0%, #C528C3 100%)',
      },
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
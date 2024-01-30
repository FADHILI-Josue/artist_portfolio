import { colors } from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        'light-gold': '#FFBA00',
        'dark-gold': '#A77B04',
      },
    },
  },
  plugins: [],
}
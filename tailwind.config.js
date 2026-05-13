/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A45C',
        lightGold: '#D4AF37',
        creamBg: '#F5F1EA',
        darkBg: '#111111',
        darkDarker: '#0A0A0A',
      },
      fontFamily: {
        sans: ['sans-serif'],
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ['Lexend', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        Outfit: ['Outfit'],
      },
      scrollBehavior: 'smooth',
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/**/*.{js,ts,jsx,tsx}",
    "./assets/css/**/*.css",
    "./assets/scss/**/*.scss"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF0000',
        accent: '#ed5b31'
      },
      fontFamily: {
        'Cardo': ['Cardo', 'serif'],
        'Roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
} 
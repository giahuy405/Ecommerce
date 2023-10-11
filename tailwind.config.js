/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary-dark': '#242526',
      'secondary-dark': '#18191A',
      'third-dark': '#3A3B3C',
      'four-dark': '#A8ABAF',
    },
  },
  plugins: [],
  darkMode:'class'
}
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false
  },
  theme: {
    extend: {
      colors: {
        'primary-dark': '#242526',
        'secondary-dark': '#18191A',
        'third-dark': '#3A3B3C',
        'fourth-dark': '#A8ABAF'
      }
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.container': {
          maxWidth:theme('columns.7xl'),
          marginLeft:"auto",
          marginRight:"auto",
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
        }
      })
    })
  ],
  darkMode: 'class'
}

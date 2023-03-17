/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var'],
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': colors.white,
      'red': colors.red,
      'gray': colors.gray,
      'pantone-blue': '#3fada8',
      'pantone-cool-gray-9': '#808080',
      'pantone-cool-gray-11': '#4d4d4d',
      'pantone-gray-4': '#666666',
      'pantone-gray-5': '#333333',
    }
  },
  plugins: [],
}

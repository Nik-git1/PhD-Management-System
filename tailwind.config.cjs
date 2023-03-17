/** @type {import('tailwindcss').Config} */
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
      'white': '#ffffff',
      'pantoneblue': '#3fada8',
      'pantonecoolgrey9': '#808080',
      'pantonecoolgrey11': '#4d4d4d',
      'pantonegrey4': '#666666',
      'pantonegrey5': '#333333',
    }
  },
  plugins: [],
}

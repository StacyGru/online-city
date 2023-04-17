/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      mainOrange: '#FF8A00',
      grayWhite: '#F5F5F5',
      mainWhite: '#FFFFFF',
      darkBlue: '#232F34',
      mainGray: '#8F8F8F',
    },
    dropShadow: {
      'sm': '0 1px 1px rgba(0, 0, 0, 0.25)',
    }
  },
  plugins: [],
}


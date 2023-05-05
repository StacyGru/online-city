/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainOrange: '#FF8A00',
        grayWhite: '#F5F5F5',
        mainWhite: '#FFFFFF',
        darkBlue: '#232F34',
        mainGray: '#8F8F8F',
      },
      dropShadow: {
        'sm': '0 1px 1px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',    // tablet
        'lg': '1024px',   // laptop
        'xl': '1280px',   // desktop
        '2xl': '1536px',
        '3xl': '1800px',  //4K
      },
      width: {
        '1/10': '10%',
        '45': '45%',
      },
      padding: {
        '1/10': '10%',
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseGray: '#1b1b1b',
        mainGray: '#777777',
        borderGray: '#3a3a3a',
      },
      fontSize: {
        'xxs': ['11px', '14px'],
        'xs': ['13px', '16px'],
        'sm': ['15px', '20px'],
        'base': ['17px', '24px'],
        'lg': ['19px', '28px'],
      },
      fontFamily: {
        'cardo': ['Cardo', 'serif'],
      }
    },
  },
  plugins: [],
}
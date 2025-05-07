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
      },
      fontSize: {
        'xxs': ['10px', '14px'],
      },
      fontFamily: {
        'cardo': ['Cardo', 'serif'],
      }
    },
  },
  plugins: [],
}
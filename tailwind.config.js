/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      Lato: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        gold: "#a18a4d",
        blacktext: "#212529",
        lightGray: "#D5D5D5",
        grey: "#333"  
      }
    },
  },
  plugins: [],
}


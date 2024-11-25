/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class', // Bu muhim!
  theme: {
    extend: {
      gap:{
        "11.5":'42px'
      }
    },
  },
  plugins: [],
}


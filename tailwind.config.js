const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "orange": "#ffa500",
      "appGray": "#1a161f",
      "white": colors.white,
      "black": colors.black,
      "gray": colors.gray,
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      '2xl': '22px',
      sm: '15px',
    },
    extend: {
      fontFamily: {
        "outfit": ['Outfit', 'sans-serif']
    }
    },
  },
  plugins: [],
}

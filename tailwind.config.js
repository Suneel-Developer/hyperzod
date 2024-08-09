/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors: {
        "gray-100": "rgba(0,0,0,.12)",
        "gray-250": "rgba(0,0,0,.26)",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors: {
        "gray-100": "rgba(0,0,0,.12)",
        "gray-250": "rgba(0,0,0,.26)",
        "gray-300": "rgb(243, 244, 246)",
        "gray-400": "rgb(229, 229, 229)",
        "gray-500": "rgb(255, 255, 255)",
        "gray-600": "rgb(156 163 175)",
        "gray-700": "rgb(209 213 219)",
        "gray-800": "rgb(230 230 230)",
        "gray-900": "rgb(244, 244, 245)",
        "black-100": "rgb(66, 66, 66)",
      },
      animation: {
        'slide-up': 'slide-up 0.3s ease-out',
      },
      screens: {
        "xlg": "1300px",
        "xxs": "380px"
      }
    },
  },
  plugins: [],
}
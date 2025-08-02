/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        bitcount: ['Bitcount', 'sans-serif']
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
      },
    },
  },
  plugins: [],
}


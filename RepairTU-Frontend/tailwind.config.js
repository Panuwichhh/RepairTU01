/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        anakotmai: ['Anakotmai', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
      // Set Kanit as the default font
      fontFamily: {
        sans: ['Kanit', 'sans-serif'], // This will make Kanit the default font
      },
    },
  },
  plugins: [],
}

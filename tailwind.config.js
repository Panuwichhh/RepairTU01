/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
<<<<<<< Updated upstream
      "!./src/backend/**/*"
=======
    "!./src/backend/**",  
>>>>>>> Stashed changes
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

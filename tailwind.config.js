/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
        customBlue1: '#0088FF',
        customBlue2: '#002244',
        milkyGreen: '#98FF98',
        forGradient: '#1D1FB5'

      }},
  },
  plugins: [],
}


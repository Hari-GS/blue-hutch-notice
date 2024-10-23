/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: {
      customBlue1: '#0088FF',
      customBlue2: '#002244',
      milkyGreen: '#98FF98',
      forGradient: '#1D1FB5'
    }
      
    },
  },
  plugins: [],
};

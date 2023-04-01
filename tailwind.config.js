/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      dropShadow: {
        '3xl' : '0 3px 24px rgba(0, 0, 0, 0.07)',
        '4xl' : '0 3px 24px rgba(0, 0, 0, 0.15)',
      },
      fontFamily:{
        DMSans: ['DM Sans', 'sans-serif'],
        Firacode: ['Fira Code', 'monospace'],
      },
      screens: {
        'sm':'420px',
      },
    },
  },
  plugins: [require('ps-scrollbar-tailwind'),],
}
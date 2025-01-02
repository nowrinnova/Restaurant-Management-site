/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'], // Add Cinzel with a fallback
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


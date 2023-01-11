/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      colors:{
        'genoa': {
          DEFAULT: '#166064',
          '50': '#57D3DA',
          '100': '#47CFD6',
          '200': '#2CC0C8',
          '300': '#25A0A7',
          '400': '#1D8085',
          '500': '#166064',
          '600': '#0C3436',
          '700': '#020808',
          '800': '#000000',
          '900': '#000000'
        },
      }
    },
  },
  plugins: [],
}
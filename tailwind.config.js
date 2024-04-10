/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#C3EFC1",
        "secondary": "#937162",
        "dark": "#534931",
        "light": "#9F7962",
        "white": "#F7F7F7",
        "cream": "#EBE5E1",
        "green": "#05622E",
        "snowDrift":"#F0FEF5"
      },
      fontFamily: {
        'mont': ['Mont', 'sans-serif'],
        'alumni': ['Alumni Sans', 'sans-serif'],
        'brown-wall': ['The Brown Wall', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


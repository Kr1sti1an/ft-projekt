/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'red': '#dc2626',
      'white': '#fef2f2',
      'bg_hero1': 'rgb(245,245,245)',
      'navlinks': '#000000',
      'bg_navbar': 'rgb(255,255,255)',
    },
    extend: {},
  },
  plugins: [],
}


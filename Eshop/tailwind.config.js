/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      red: '#dc2626',
      white: '#fef2f2',
      bg_hero1: 'rgb(245,245,245)',
      navlinks: '#000000',
      bg_navbar: 'rgb(255,255,255)',
      bg_stats: 'rgb(43,46,54)',
      bg_footer: 'rgb(245,245,245)',
      bg_form: '#ffffff',
      bg_button_form: 'rgb(43,46,54)',
      bg_newsletter: 'rgb(43,46,54)',
      bg_button_newsletter: 'rgb(230, 253, 84)'
    },
    extend: {}
  },
  plugins: []
}


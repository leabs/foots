/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'bg-teste': "url('../public/img/testebg1.png')"
      },
      colors: {
        light: '#F8F8F8',
        dark: '#111827',
        bluedark: '#023047',
        skyblue: '#8ECAE6',
        bluegreen: '#219EBC',
        yellow: '#FFB703',
        orange: '#FB8500'
      }
    }
  },
  plugins: []
}

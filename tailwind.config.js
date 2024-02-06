/** @type {import('tailwindcss').Config} */

module.exports = {
    purge: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      extend: {
        backgroundImage: {
          'Avatar': "url('./src/assets/sketch.jpg')",
        },
        colors: {
          primary: '#18181B',
          secondary: '#66666E',
          tertiary: '#0070F0',
        }
      },
    },
    variants: {},
    plugins: [],
  }
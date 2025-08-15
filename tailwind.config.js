/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        pop: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }, 
        },
        deroule: {
          '0%': { height: '0%' },
          '50%': { height: '150px' },
        },
        defil: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        pop: 'pop .8s ease-out',
        deroule: 'deroule .3s ease-out',
        defil: 'defil 1s ease-out',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}


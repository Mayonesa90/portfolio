
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main-font': ['"Work Sans"', 'sans-serif']
      },
      fontWeight: {
        'work-sans-light': '300',
        'work-sans-normal': '400',
        'work-sans-medium': '500',
        'work-sans-semi-bold': '600',
        'work-sans-bold': '700',
      },
    },
    colors: {
      'gray': '#848484',
      'pink': '#FF00AE',
      'black': '#000000'
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, #BEFF68 0.01%, rgba(217, 217, 217, 0.00) 100%);',
    },
    screens: {
      'sm-custom': '520px',
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow': {
          textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        },
      });
    },
  ],
}
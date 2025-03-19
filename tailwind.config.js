
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'main-font': ['"Work Sans"', 'sans-serif'],
        'Gentle': ['"Gentle"', 'sans-serif'],
        'Lato': ['"Lato"', 'sans-serif'],
        'Lato-Italic': ['"Lato"', 'italic'],
      },
      fontWeight: {
        'thin': '100',
        'light': '300',
        'normal': '400',
        'bold': '700',
        'extra-bold': '900',
      },
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, #6CDAAA 0.10%, rgba(255, 255, 255, 0.00) 100%);',
      'polygon-red': 'url("./src/assets/dropdown/polygon-red.svg")',
      'polygon-blue': 'url("./src/assets/dropdown/polygon-blue.svg")',
      'polygon-green': 'url("./src/assets/dropdown/polygon-green.svg")',
    },
    screens: {
      'sm-custom': '520px',
      'md-custom': '768px',
      'lg-custom': '1024px',
      'xl-custom': '1280px',
      '2xl-custom': '1536px'
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
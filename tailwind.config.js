
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
        'Kollektif': ['"Kollektif"', 'sans-serif'],
        'Kollektif-Bold': ['"Kollektif-Bold"', 'sans-serif', 'bold'],
        'Kollektif-Italic': ['"Kollektif-Italic"', 'italic'],
        'Kollektif-BoldItalic': ['"Kollektif-BoldItalic"', 'italic', 'bold'],
      },
      fontWeight: {
        'work-sans-thin': '100',
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
      'gradient-radial': 'radial-gradient(50% 50% at 50% 50%, #6CDAAA 0.10%, rgba(255, 255, 255, 0.00) 100%);',
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
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1300px',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        lg: '1440px',
      },
      colors: {
        color1: '#FCD980',
        color2: '#EEF4FA',
        color3: '#EBEBEB',
      },
    },
    daisyui: {
      themes: ['light', 'dark', 'cupcake'],
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui')],
};

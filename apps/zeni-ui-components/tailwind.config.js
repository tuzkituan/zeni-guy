import colors from '../../colors';

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'cp-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};

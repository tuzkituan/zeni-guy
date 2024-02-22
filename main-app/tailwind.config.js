import colors from '../colors';

/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'mp-',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};

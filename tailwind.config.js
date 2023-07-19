/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
        primary: '#F3A13B',
        secondary: '#FB564C',
      },
    },
  },
  plugins: [],
};

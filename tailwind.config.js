/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"IBM Plex Sans JP"', 'sans-serif'],
      },
      colors: {
        primary: {
          900: '#061126',
          700: '#2B558C',
          500: '#4988BF',
          300: '#88C9F2',
        }
      },
    },
  },
  plugins: [],
};
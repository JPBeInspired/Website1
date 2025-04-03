/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f5f0',
          100: '#d8e6d7',
          200: '#A8C3A5',  // Our main brand color
          300: '#8aad86',
          400: '#6c976a',
          500: '#557b53',
          600: '#446343',
          700: '#324a32',
          800: '#203220',
          900: '#0f1910',
        },
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red: {
          500: '#E63E31',
          600: '#D02E21',
        },
        blue: {
          400: '#2A6CBD',
          500: '#1A5DAD',
          600: '#000000',
          700: '#0A3D8D',
        },
      },
      animation: {
        'bounce': 'bounce 2s infinite',
      },
      boxShadow: {
        'status': '0 0 0 4px rgba(59, 130, 246, 0.1)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
    },
  },
  plugins: [],
};
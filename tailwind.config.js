/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
  extend: {
  colors: {
  bank: {
  bg: "#0a0d14",
  card: "#0f1420",
  accent: "#60a5fa"
  }
  },
  keyframes: {
  gridmove: {
  '0%': { backgroundPosition: '0 0' },
  '100%': { backgroundPosition: '100px 100px' }
  }
  },
  animation: {
    'scroll-left': 'scrollLeft 34s linear infinite',
    'scroll-right': 'scrollRight 34s linear infinite',
  },
  keyframes: {
    scrollLeft: {
      '0%': { transform: 'translateX(0)' },
      '100%': { transform: 'translateX(-50%)' },
    },
    scrollRight: {
      '0%': { transform: 'translateX(-50%)' },
      '100%': { transform: 'translateX(0)' },
    },
  },
  }
  },
  plugins: []
  }

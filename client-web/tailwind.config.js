/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0f172a', // dark navy
        'accent': '#06b6d4', // cyan
        'gradient-start': '#ec4899',
        'gradient-end': '#fbbf24',
      },
      keyframes: {
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in-left': 'fade-in-left 0.5s ease-out forwards',
      },
      fontFamily: {
        times: ['"Times New Roman"', 'serif'], // 👈 Add this
      },
    },
  },
  plugins: [],
};

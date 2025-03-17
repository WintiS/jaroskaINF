/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#991b1b',
          dark: '#7f1d1d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'border-rotate': 'borderRotate 2s linear infinite',
        'slide-in': 'slideIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        borderRotate: {
          '0%': { clipPath: 'inset(0 0 95% 0)' },
          '25%': { clipPath: 'inset(0 0 0 30%)' },
          '50%': { clipPath: 'inset(95% 0 0 0)' },
          '75%': { clipPath: 'inset(0 30% 0 0)' },
          '100%': { clipPath: 'inset(0 0 95% 0)' },
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'],
    theme: {
      light: {
        'primary': '#991b1b',
        'primary-focus': '#7f1d1d',
      },
    },
  },
}; 
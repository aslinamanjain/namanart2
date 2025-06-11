/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#222831',
        'slate-gray': '#393E46',
        'muted-bronze': '#948979',
        'warm-beige': '#DFD0B8',
      },
      fontFamily: {
        'display': ['Space Grotesk', 'sans-serif'],
        'heading': ['Bebas Neue', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'wider': '0.05em',
        'widest': '0.1em',
        'ultra-wide': '0.15em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
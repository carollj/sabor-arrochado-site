import tailwindcss from 'tailwindcss';
import forms from '@tailwindcss/forms';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lime-brand': '#D4D836',
        'green-dark': '#2D5016',
        'dark': '#1a1a1a',
        'off-white': '#f8f7f4',
        'gray-dark': '#4a4a4a',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        label: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(0, 0, 0, 0.08)',
        medium: '0 4px 12px rgba(0, 0, 0, 0.12)',
        strong: '0 10px 30px rgba(0, 0, 0, 0.15)',
        hover: '0 12px 40px rgba(212, 216, 54, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [forms],
} as const;

import type {Config} from 'tailwindcss';

const config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;

export default config;

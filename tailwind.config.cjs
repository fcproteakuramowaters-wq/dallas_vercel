/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{ts,tsx,js,jsx}',
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/pages/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-gold)',
        primaryDark: 'var(--primary-dark)',
        accentBlue: 'var(--accent-blue)',
        warm: 'var(--accent-warm)',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'ui-sans-serif', 'system-ui'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'SFMono-Regular'],
      },
      transitionDuration: {
        250: '250ms',
      },
    },
  },
  plugins: [],
};

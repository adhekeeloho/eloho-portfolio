/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'code-drift': 'code-drift 10s ease-in-out infinite',
        'terminal-blink': 'terminal-blink 1s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'code-drift': {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%':  { transform: 'translateY(-12px) translateX(4px)' },
          '50%':  { transform: 'translateY(-6px) translateX(-6px)' },
          '75%':  { transform: 'translateY(5px) translateX(3px)' },
        },
        'terminal-blink': {
          '0%, 100%': { opacity: '1' },
          '50%':       { opacity: '0' },
        },
      },
      boxShadow: {
        'glow': '0 0 40px rgba(45,212,191,0.15)',
        'glow-lg': '0 0 80px rgba(45,212,191,0.2)',
        'glow-purple': '0 0 40px rgba(167,139,250,0.15)',
        'card': '0 24px 48px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        royal: '#0a1a4f',
        green: '#00ff99',
        glass: 'rgba(255,255,255,0.15)'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        neu: '8px 8px 24px #d1d9e6, -8px -8px 24px #ffffff',
        glass: '0 4px 32px 0 rgba(31, 38, 135, 0.37)'
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 
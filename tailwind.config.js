/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F4C430',
        accent: '#FFE082',
        cream: '#FFF8E8',
        bg: '#FFFEFC',
        card: '#FFF9EF',
        ink: '#1C1C1C',
        muted: '#666666',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

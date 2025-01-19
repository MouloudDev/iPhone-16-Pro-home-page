/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '14': 'repeat(14, minmax(0, 1fr))',
      }
    },
    screens: {
      'laptop': '833px',
      '480px': '480px',
      '734px': '734px',
      '1068px': '1068px',
      '1440px': '1440px'
    }
  },
  plugins: [],
}

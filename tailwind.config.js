module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  /* darkMode: 'class', */
  theme: {
    extend: {
      colors: {
        'charleston-green': '#192224',
        'alice-blue': '#EDF5FD',
        'black': '#000000',
      },
      keyframes: {
        slide: {
          '0%': { opacity: 0, transform: 'translateY(-3rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        slide: 'slide .3s ease-in'
      }
    },
  },
  plugins: [],
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  /* darkMode: 'class', */
  theme: {
    extend: {
      colors: {
        'charleston-green': '#192224',
        'alice-blue': '#EDF5FD',
        black: '#000000',
      },
      keyframes: {
        slide: {
          '0%': { opacity: 0, transform: 'translateY(-3rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateY(20rem)' },
          '100%': { transform: 'translateY(0)' }
        },
        bump: {
          '0%': { transform: 'scaleX(1) scaleY(1)' },
          '10%': { transform: 'scaleX(0.9) scaleY(0.9)' },
          '30%': { transform: 'scaleX(1.1) scaleY(1.1)' },
          '50%': { transform: 'scaleX(1.15) scaleY(1.15)' },
          '100%': { transform: 'scaleX(1) scaleY(1)' },
        },
      },
      animation: {
        slide: 'slide .3s ease-in',
        bump: 'bump .3s ease-out',
        'slide-in': 'slide-in .3s linear'
      },
    },
  },
  plugins: [],
}

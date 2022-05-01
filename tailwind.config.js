const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue"
  ],
  theme: {
    colors: {
      primary: '#03438D',
      white: '#FFFFFF',
      black: '#000400',
      grey: {
        100: '#707070',
        200: '#00040029',
        300: '#EFECE7',
        400: '#9B9893',
        500: '#A8B0B9',
        600: '#808080'
      },
      light: '#E2EDFA',
      negative: '#F57375',
      yellow: '#EEC32A'
    },
    fontFamily: {
      paytone: ['Paytone One'],
      helvetica: ['Helvetica Neus'],
      mono: ['Azeret Mono'],
      noto: ['Noto Sans TC'],
      baloo: ['"Baloo Da 2"'],
      tapestry: ['Tapestry']
    },
    borderRadius: {
      DEFAULT: '0.5rem'
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.2xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}

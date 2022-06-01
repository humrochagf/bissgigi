const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./content/**/*.md",
    "./content/**/*.html",
    "./layouts/**/*.html",
  ],
  theme: {
    fontFamily: {
      'sans': ['Calibri', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      blue: "#7887e6",
      pink: "#f99ebc",
      orange: "#f8bea5",
      white: "#ffffff",
    },
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "680px",
      }
    },
  },
}

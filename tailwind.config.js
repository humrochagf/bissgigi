module.exports = {
  mode: "jit",
  purge: ["./content/**/*.md", "./content/**/*.html", "./layouts/**/*.html"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "680px",
      }
    },
  },
};

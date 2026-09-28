module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        nbmc: {
          green: "#157D3C",
          greenHover: "#199447",
          silver: "#A4A3A3",
          charcoal: "#242424",
          ink: "#080808",
          steel: "#555555",
          mist: "#F4F4F4",
          soft: "#C8C8C8",
        },
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans Arabic", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

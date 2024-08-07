module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryblue: "#4681f4",
        primarygreen: "#10B205",
        lightgrey: "#CCC",
        darkgrey: "#333",
        extralight: "#E3E3E3",
        selectedprimary: "#6C94FF",
        danger: "#FF5139",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  important: "#root",
};

module.exports = {
  content: [
    "storyblok/**/*.{vue,js}",
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
  ],
  theme: {
    fontFamily: {
      sans: "Roboto, sans-serif",
    },
    extend: {
      colors: {
        primary: "#f0f0f0",
        secondary: "#f0f0f0",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1350px",
        },
      },
    },
  },
};

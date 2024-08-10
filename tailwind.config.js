module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      flex: {
        2: "2 2 0%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

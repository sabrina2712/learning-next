module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/car.jpeg')",
        "weather-pattern": "url('/weather-1.jpeg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

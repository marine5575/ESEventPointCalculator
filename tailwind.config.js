const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Spoqa Han Sans Neo", ...defaultTheme.fontFamily.sans],
        futura: "futura-pt",
        pretendard: "Pretendard-Regular",
        YUniverse: "YUniverse-B",
        SUIT: "SUIT-Medium",
        Elice: "EliceDigitalBaeum-Bd",
      },
      colors: {
        gray: {
          100: "#F7F8F9",
          200: "#E8EBED",
          300: "#C9CDD2",
          400: "#9EA4AA",
          500: "#72787F",
          600: "#454C53",
          700: "#26282B",
          800: "#1B1C1F",
        },
      },
    },
  },
  plugins: [],
};

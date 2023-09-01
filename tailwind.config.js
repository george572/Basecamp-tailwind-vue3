/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue", "./src/**/**/*.vue"],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#585EE3",
        "primary-light": "#F5F8FF",
        "interface-black": "#000000",
        "interface-dark-1": "#21343D",
        "interface-dark-2": "#657178",
        "interface-white-1": "#FFFFFF",
        "interface-white-2": "#F0F4F5",
      },
      fontFamily: {
        bannerCaps: ["Banner-Caps", "sans-serif"],
      },
      boxShadow: {
        "big-shadow": "0px 0px 40px 0px #00000014",
        "small-shadow": "0px 0px 20px 0px #0000001A",
      },
      borderRadius: {
        "base-radius": "20px",
      },
      screens: {
        sm: "320px",
        md: "640px",
        lg: "1080px",
        xl: "1280px",
      },
      keyframes: {
        'fromTop': {
          "0%": { top: "50px" },
          "50%": { top: "100px" },
          "100%": { top: "80px" },
        },
      },
      animation: {
        'navFromTop': "fromTop 300ms linear 1",
      },
    },
  },
  plugins: [],
};

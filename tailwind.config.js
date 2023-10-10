const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "md-mobile": "360px",
        "xl-mobile": "460px",
        "xs-tablet": "640px",
        "md-tablet": "768px",
        "xl-tablet": "1280px",
        "xs-desktop": "768px",
        "md-desktop": "1080px",
        "xl-desktop": "1320px",
        "2xl-desktop": "1600px",
        xxl: { max: "1340px" },
      },
    },
  },
  plugins: [],
});

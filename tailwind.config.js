const withMT = require("@material-tailwind/react/utils/withMT");


/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark-gray": "#333333",
        "custom-deep-plum": "#5C284F",
        "custom-soft-lavender": "#B3A2C7",
        "custom-vibrant-orchid": "#DA70D6",
        "custom-off-white": "#F5F5F5",
        "custom-sage-green": "#9DBF9E",
      }
    },
  },
  plugins: [],
})

// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Source files (React/JSX etc.)
    "./public/index.html", // HTML files
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add your Google Font here
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["src/**/*.{html,css,tsx}", "index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#A80C04",
        secondary: "#152635",
        tertiary: "#888888",
      },
      fontFamily: {
        sans: ["Fira Sans", "sans-serif"],
        mono: ["Fira Mono", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
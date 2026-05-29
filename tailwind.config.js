/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        void:    "#08090e",
        void2:   "#0e1018",
        paper:   "#f0ede8",
        dim:     "#6a6860",
        faint:   "#2a2c34",
        signal:  "#c94b25",
        signal2: "#e8603a",
      },
      fontFamily: {
        display: ['"Bebas Neue"', "sans-serif"],
        serif:   ['"DM Serif Display"', "serif"],
        body:    ['"Outfit"', "sans-serif"],
        mono:    ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};

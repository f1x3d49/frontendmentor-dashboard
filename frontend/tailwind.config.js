/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pblue: "hsl(var(--color-pblue) / <alpha-value>)",
        lred: "hsl(var(--color-lred) / <alpha-value>)",
        sblue: "hsl(var(--color-sblue) / <alpha-value>)",
        studyred: "hsl(var(--color-studyred) / <alpha-value>)",
        lgreen: "hsl(var(--color-lgreen) / <alpha-value>)",
        violet: "hsl(var(--color-violet) / <alpha-value>)",
        sorange: "hsl(var(--color-sorange) / <alpha-value>)",
        vdblue: "hsl(var(--color-vdblue) / <alpha-value>)",
        dblue: "hsl(var(--color-dblue) / <alpha-value>)",
        deblue: "hsl(var(--color-deblue) / <alpha-value>)",
        pablue: "hsl(var(--color-pablue) / <alpha-value>)",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};

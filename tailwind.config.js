/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
      
        sm: "500px",
        md: "800px",
        lg: "1000px",
        xl: "1440px",
      },
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },
      content: {
        "bg-left": 'url("/patterns/pattern-curve-top-left.svg")',
        "bg-right": 'url("/patterns/pattern-curve-top-right.svg")',
      },
    },
  },
  plugins: [],
};

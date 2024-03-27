/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "hsl(var(--bg-base))",
      },

      textColor: {
        primary: "hsl(var(--bg-base))",
      },
    },
  },
  plugins: [],
};

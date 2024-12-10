/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#36394A",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "7rem",
        },
      },
      screens: {
        vs: "400px",
        vsm: "500px", // Used for afterHero section
        vm: "900px",
        vl: "1010px",
        llg: "1100px",
        ixl: "1350px",
      },
    },
  },
  plugins: [],
};

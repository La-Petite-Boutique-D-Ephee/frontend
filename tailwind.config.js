/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
          xl: "5rem",
          "2xl": "2rem",
        },
      },
      colors: {
        background: {
          500: "#FDF7F5",
        },
        primary: {
          500: "#5A7354",
          250: "rgb(90 115 84 / 0.8)",
        },
        secondary: {
          500: "#C1B65C",
          250: "rgb(193 182 92 / 0.8)",
        },
        heading: {
          500: "#0D2915",
        },
        body: {
          500: "#413F4A",
          250: "rgb(65 63 74 / 0.8)",
        },
      },
      fontSize: {
        h1: [
          "3.75rem",
          {
            lineHeight: "3.75rem",
            fontWeight: 700,
          },
        ],
        h2: [
          "3rem",
          {
            lineHeight: "3rem",
            fontWeight: 700,
          },
        ],
        h3: [
          "2.25rem",
          {
            lineHeight: "2.5rem",
            fontWeight: 700,
          },
        ],
        h4: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            fontWeight: 700,
          },
        ],
        h5: [
          "1.5rem",
          {
            lineHeight: "2rem",
            fontWeight: 700,
          },
        ],
        h6: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: 700,
          },
        ],
        base: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            fontWeight: 400,
          },
        ],
        "text-btn": [
          "1rem",
          {
            lineHeight: "1",
            fontWeight: 700,
          },
        ],
      },
      screens: {
        320: "320px",
        388: "388px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        "radial-gradient":
          "radial-gradient(circle at 100% 0%, transparent 25px, #fdf7f5 25px)",
      },
      spacing: {
        top: "calc(0px - 25px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

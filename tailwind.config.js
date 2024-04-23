/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{jsx, tsx, js,tsx}"],
  theme: {
    screens: {
      mb: "320px",
      tab: "481px",
      nb: "769px",
      lg: "1025px",
    },
    extend: {
      colors: {
        layout: {
          bg: "#4364f7",
          text: "#2E86C1",
        },
        background: "#eef8ff",
        text: "#8c8c8c",
        error: "#e74c3c",
        activeBtn: " #e5e7e9",
      },
    },
  },
  plugins: [],
};

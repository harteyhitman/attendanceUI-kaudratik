/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#33357D",
        hovering: "#F3F6FF",
        hoveringBorderLine: "#CCE6FF",
        dimGreen: "rgba(0, 129, 36, 1)",
        dimRed: "rgba(255, 47, 47, 1)",
        textColor: "rgba(64, 64, 64, 1)",
        borderLine: "#F2F2F2",
        tintBlue: "rgba(47, 168, 255, 1)"
      },
    

    },
  },
  plugins: [],
}
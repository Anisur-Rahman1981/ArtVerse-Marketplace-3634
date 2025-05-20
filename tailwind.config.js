/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D3250",
        secondary: "#424769",
        accent: "#7077A1",
        light: "#F6B17A"
      }
    }
  },
  plugins: []
}
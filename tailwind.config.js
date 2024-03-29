/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        robotoFont:"Roboto, sans-serif",
        cursive:"Recursive, sans-serif"
      },
      boxShadow:{
        shadow1:"rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
        shadow2:"rgba(0, 0, 0, 0.1) 0px 4px 12px"
      }
    },
  },
  plugins: [],
}


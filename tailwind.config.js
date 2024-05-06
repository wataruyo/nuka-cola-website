/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'hsl(176, 80%, 4%)',
        'background': 'hsl(26, 100%, 97%)',
        'primary': 'hsl(0,75.51%,38.43%)',
        'secondary': 'hsl(174, 17%, 78%)',
        'accent': 'hsl(30, 74%, 67%)',
       },
    },
  },
  plugins: [],
}
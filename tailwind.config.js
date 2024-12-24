/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#243642',
        customGreen: '#387478',
      },
      backgroundImage: {
        customBg: "url('/src/assets/Background.jpg')", 
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


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
  daisyui: {
    themes: [
      {
        light: {
          "text" : "#040605",
          "neutral": "#040605",
          "background": "#fff",
          "primary": "#6c947a", //
          "secondary": "#c7b2c2",
          "accent": "#397579",
          "base-100": "#f0fdf4",
          "info": "#000",
        },
      },
      {
        dark: {
          "text" : "#f9fbfa",
          "neutral": "#f9fbfa",
          "background": "#041320",
          "primary": "#6b9479",
          "secondary": "#4885ef",
          "accent": "#428387",
          "base-100": "#1E1E1E",
          "info": "#fff",
        },
      },
    ],
  },
}


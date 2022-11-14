/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#E71A7F",          
      "secondary": "#ec4899",               
      "accent": "#1AE782",               
      "neutral": "#191D24",              
      "base-100": "#2A303C",               
      "info": "#3ABFF8",               
      "success": "#36D399",               
      "warning": "#FBBD23",               
      "error": "#F87272",
      "white": "#ffffff",
      "footer": "#fcdeed"
    },
    extend: {
      backgroundImage:{
        'business-image': 'url("/public/assets/background.jpg")'
      },
      height: {
        'img-height': '10%',
        'footer-height': '50%'
      }
    },

  },
  plugins: [],
}
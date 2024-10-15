/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      colors: {
        'custom_blue': '#130f40',
        'custom-yellow': '#F7C503',
        'custom_green': '#1eb2a6',
        'custom_orange': '#cc5500',
        'custom_pink': '#D7385E',
        'custom_white': '#fffaf0',
        'custom_red': '#ff0000',
         'custom-gray' : '#F7F7F7',
         'custom-half' :'#ffffff',
         'custom-light-yellow' :'#f8e992'
      },
      borderRadius: {
        'custom_lg': '10px',
      },
    },
  },
  plugins: [],
};

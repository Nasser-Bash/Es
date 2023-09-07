/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColors: {
        'customgradient': 'radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)',

      },
      backgroundColor: {
        'primary': '#00040F',
        'second': '#0db8df',
        'third': '#8ca0c0 ',
        'fourth': '#ffffff ',
       
      },
      textColor: {
        'primary': '#00040F',
        'second': '#0db8df',
        'third': '#8ca0c0 ',
        'fourth': '#ffffff ',
      },
      borderColor: {
        'primary': '#00040F',
        'second': '#0db8df',
        'third': '#8ca0c0 ',
        'fourth': '#ffffff ',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      fontFamily: {
        custom: ['Sacramento', 'cursive'],
        custom1: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      },
    },
  },
  plugins: [],
}


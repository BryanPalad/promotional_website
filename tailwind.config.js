/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      jakartaSansExtraBold: 'PlusJakartaSansExtraBold',
      jakartaSansMedium: 'PlusJakartaSansMedium',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      colors: {
        primary: '#C2465C',
        secondary: '#fde2ec',
      },
    },
  },
  plugins: [],
}


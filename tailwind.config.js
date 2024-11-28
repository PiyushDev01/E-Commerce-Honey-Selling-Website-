/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 3s ease-in-out infinite', // Define the float animation
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)', // Start and end at the original position
          },
          '50%': {
            transform: 'translateY(-10px)', // Move up 10px at the middle of the animation
          },
        },
      },
      colors: {
        main : '#FFCE23',
        Dark1: '#F6B012',
        Dark2: '#DA8A00',
        Dark3: '#B17E0F',
        active: '#111111',
        unactive: '#EAEDF1'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, #FFCE23, #F6B012)',
      },
    },
  },
  plugins: [],
}


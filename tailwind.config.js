/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridAutoRows: {
        '500': '600px',
      },
      gridTemplateColumns: {
        'custom': ' repeat(2,400px)',
        'custom-2': 'repeat(2,350px)'

      },
      screens:{
        ssm:'480px'
      }
    },
  },
  plugins: [],
}


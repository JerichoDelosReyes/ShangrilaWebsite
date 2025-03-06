/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
      },
      height: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}


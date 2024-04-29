/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","./src/pages/**/*.{html}" ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
        caveat: ["Caveat", 'cursive'],
        onest: ["Onest", 'sans-serif']
      },
    },
  },
  plugins: [],
}
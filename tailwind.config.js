module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Inter', 'Arial', 'sans-serif'],
      'display': ['Inter', 'Arial', 'sans-serif'],
      'sans': ['Inter', 'Arial', 'sans-serif'],
    },
    extend: {
      colors: {
        snhblue: '#63caf3',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

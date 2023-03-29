/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./assets/**/*.css",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue"
  ],
  theme: {
    screens: {
      xs: "614px",
      sm: "1002px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },

    extend: {
      colors: {
        primary: '#363D47',
        secondary: '#349898',
        'secondary-light': '#9BDAD6',
        gray: '#ADAFA6',
        'gray-light': '#F6F5F1',
        accent: '#FDBD31',
      },
    },
  },
};

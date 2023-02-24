/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  daisyui: {
    themes: [
      {
        nerdthemes: {
          primary: '#4568dc',
          secondary: '#b06ab3',
          accent: "#081229",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      },
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

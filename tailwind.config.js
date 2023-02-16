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
          primary: '#7B33FD',
          base: '#B337E3',
          secondary: '#2c3e50',
          accent: "#3A4256",
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

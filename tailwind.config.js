/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      robotoSlab: ["Roboto", "sans-serif"],
      kumbh: ["Kumbh Sans", "sans-serif"],
      spaceMono: ["Space Mono", "monospace"],
    },

    extend: {
      colors: {
        white: "#FFFFFF",
        gray: "#EFF1FA",
        darkblue: "#1E213F",
        darkestblue: "#161932",
        lightblue: "#D7E0FF",
        violet: "#D881F8",
        cyan: "#70F3F8",
        red: "hsl(0, 91%, 71%)",
        "red-300": "hsl(0, 91%, 81%)",
      },
    },
  },
  plugins: [],
};

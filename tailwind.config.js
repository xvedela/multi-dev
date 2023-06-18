/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header': "#5A58AB",
        'home': "#6967CE",
        'input': "#F4F8FB",
        'button': "#FFB902",
        'footer': "#0B0B0B",
      },
    },
  },
  plugins: [],
}


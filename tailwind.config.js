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
        'desc': "#BDC8DB",
        'home': "#6967CE",
        'label': "#25344F",
        'meta': "#407BEC",
        'txt': "#556D9A",
        'input': "#F4F8FB",
        'button': "#FFB902",
        'footer': "#0B0B0B",
        'section': '#EEF2F6',
      },
      borderRadius: {
        '4xl': "40px",
      }
    },
  },
  plugins: [],
}


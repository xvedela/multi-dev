/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'footer': "#0B0B0B",
                'header': "#5A58AB",
            },
        },
    },
    plugins: [],
}


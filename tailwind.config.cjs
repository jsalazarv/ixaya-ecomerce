/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        './pages/**/*.{html,js}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#19a2ae",
                secondary: "#2d3248",
                gray: {
                    dark: "#6a6f81",
                    light: "#969696",
                }
            },
        },
    },
    plugins: [],
}

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
                    100: "#E5E5E5",
                    200: "#D3D3D3",
                }
            },
        },
    },
    plugins: [],
}

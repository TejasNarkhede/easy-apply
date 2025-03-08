/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'primary': '#ff49db',
            },
            fontFamily: {
                'sans': ['Helvetica', 'Arial', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
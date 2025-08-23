/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"], // required for shadcn/ui dark mode toggling
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",      // all your app code
        "./components/**/*.{js,ts,jsx,tsx}", // if you keep components outside src
        "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}" // shadcn components
    ],
    theme: {
        extend: {
            colors: {
                primary: "hsl(var(--primary))",
                "primary-foreground": "hsl(var(--primary-foreground))",
                secondary: "hsl(var(--secondary))",
                "secondary-foreground": "hsl(var(--secondary-foreground))",
            }

        },
    },
    plugins: [
        require("tailwindcss-animate"), // required by shadcn/ui for animations
    ],
}

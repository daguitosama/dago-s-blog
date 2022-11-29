const defaultTheme = require("tailwindcss/defaultTheme");
const twColors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.vue", "./components/**/*.vue"],
    darkMode: "class",
    theme: {
        colors: {
            // tw colors
            ...twColors,

            // design colors
            primary: {
                on: {
                    light: {
                        base: "#2563EB",
                    },
                    dark: {
                        base: "#60a5fa",
                    },
                },
            },
            type: {
                on: {
                    light: {
                        base: "#292929",
                        dimmed: "#757575",
                    },
                    dark: {
                        base: "#E3E8EF",
                    },
                },
            },

            light: {
                base: "#fff",
                elevation: "#E6E6E6",
            },
            dark: {
                base: twColors.zinc[800],
                elevation: twColors.zinc[900],
            },
            // dark: {
            //     base: "#1D1F22", // apple dark mode solid bg
            //     // google dark mode bg (nice to)
            //     // 202124
            // },
        },

        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
                bespoke: ["BespokeSerif var", ...defaultTheme.fontFamily.sans],
                mono: ["Fira Code VF", ...defaultTheme.fontFamily.mono],
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        "h1 a, h2 a, h3 a, h4 a ": {
                            color: "var(--tw-prose-headings)",
                            textDecoration: "none",
                            "font-weight": "600",
                        },

                        // ...
                    },
                },
            }),
        },
    },
    plugins: [require("@tailwindcss/typography")],
};

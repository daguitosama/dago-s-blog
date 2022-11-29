// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: [
        /* Fonts */
        "~/assets/css/main.css",
        "~/assets/css/fonts.css",
    ],

    modules: [
        "@nuxt/content",
        "@nuxtjs/tailwindcss",
        "@nuxtjs/color-mode",
        "@nuxtjs/i18n",
    ],

    i18n: {
        baseUrl: process.env.ORIGIN ? process.env.ORIGIN : "https://localhost",
        defaultLocale: "en",
        // langDir: 'content',
        // lazy: true,
        vueI18n: {
            legacy: false,
        },
        locales: [
            {
                code: "en",
                iso: "en-US",
                name: "English",
                // file: 'en-US.json',
            },
        ],
    },

    colorMode: {
        classSuffix: "",
    },

    content: {
        documentDriven: true,
        highlight: {
            // Theme used in all color schemes.
            // theme: "github-light",
            // OR
            theme: {
                // Default theme (same as single string)
                default: "github-light",
                // Theme used if `html.dark`
                dark: "github-dark",
                // Theme used if `html.sepia`
                // sepia: "monokai",
            },
        },
    },

    runtimeConfig: {
        public: {
            siteName: process.env?.SITE_NAME || "localhost",
            twitterSite: process.env?.TWITTER_SITE || "",
            storyblokApiUrl: process.env.STORYBLOK_API_URL,
            storyblockAccessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        },
        contentVersionSelectorPassword:
            process.env.CONTENT_VERSION_SELECTOR_PASSWORD || "supper-foo-pass",
    },

    // postcss: {
    //     plugins: {
    //         tailwindcss: {},
    //     },
    // },
});

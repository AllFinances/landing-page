// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4,
	},
	experimental: {
		payloadExtraction: false,
	},
	nitro: {
		esbuild: {
			options: {
				target: "esnext",
			},
		},
	},
	app: {
		buildAssetsDir: "/landing-page/",
	},
	css: ["~/assets/css/tailwind.css"],
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode", "@nuxt/icon", "@nuxtjs/i18n", "@nuxtjs/sitemap", "@pinia/nuxt", "@nuxtjs/robots"],

	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	colorMode: {
		classSuffix: "",
		preference: "light",
		fallback: "light",
	},
	i18n: {
		locales: [
			{ code: "en", language: "en-US", name: "English" },
			{ code: "lv", language: "lv-LV", name: "Latviešu" },
		],
		strategy: "prefix",
		defaultLocale: "en",
		baseUrl: process.env.NUXT_PUBLIC_SITE_URL,
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "i18n_redirected",
			redirectOn: "root",
		},
	},
	pinia: {
		storesDirs: ["./app/store/**"],
	},
	robots: {
		disallow: ["/secret", "/admin"],
	},
	imports: {
		dirs: ["store", "types"],
	},
	runtimeConfig: {
		emailPort: process.env.NUXT_EMAIL_PORT,
		emailServer: process.env.NUXT_EMAIL_SERVER,
		emailUser: process.env.NUXT_EMAIL_USER,
		emailPassword: process.env.NUXT_EMAIL_PASSWORD,
		emailFrom: process.env.NUXT_EMAIL_FROM,
	},
});

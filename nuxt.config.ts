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
		prerender: {
			routes: ["/en", "/lv", "/"],
		},
		esbuild: {
			options: {
				target: "esnext",
			},
		},
	},
	app: {
		buildAssetsDir: "/_flowture/",
		head: {
			title: "Flowture",
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			link: [{ rel: "icon", type: "application/xml", href: "/lv.svg" }],
		},
	},
	css: ["~/assets/css/tailwind.css"],
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"@nuxt/icon",
		"@nuxtjs/i18n",
		"@nuxtjs/sitemap",
		"@pinia/nuxt",
		"@nuxtjs/robots",
		"@nuxt/image",
	],

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
		allow: ["/en", "/lv", "/"],
	},
	site: { indexable: true },
	image: {
		inject: true,
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
		supabaseKey: process.env.NUXT_SUPABASE_KEY,
	},
});
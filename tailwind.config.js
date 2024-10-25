/** @type {import('tailwindcss').Config} */
export default {
	important: "#app",
	content: ["./components/**/*.{vue,js}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				"transparent": "transparent",
				"current": "currentColor",
				"background": "rgb(var(--color-background) / <alpha-value>)",
				"on-background": "rgb(var(--color-on-background) / <alpha-value>)",
				"surface": "rgb(var(--color-surface) / <alpha-value>)",
				"on-surface": "rgb(var(--color-on-surface) / <alpha-value>)",
				"primary": "rgb(var(--color-primary) / <alpha-value>)",
				"on-primary": "rgb(var(--color-on-primary) / <alpha-value>)",
				"primary-variant": "rgb(var(--color-primary-variant) / <alpha-value>)",
				"secondary": "rgb(var(--color-secondary) / <alpha-value>)",
				"on-secondary": "rgb(var(--color-on-secondary) / <alpha-value>)",
				"secondary-variant": "rgb(var(--color-secondary-variant) / <alpha-value>)",
				"success": "rgb(var(--color-success) / <alpha-value>)",
				"on-success": "rgb(var(--color-on-success) / <alpha-value>)",
				"info": "rgb(var(--color-info) / <alpha-value>)",
				"on-info": "rgb(var(--color-on-info) / <alpha-value>)",
				"warn": "rgb(var(--color-warn) / <alpha-value>)",
				"on-warn": "rgb(var(--color-on-warn) / <alpha-value>)",
				"error": "rgb(var(--color-error) / <alpha-value>)",
				"on-error": "rgb(var(--color-on-error) / <alpha-value>)",
			},

			fontFamily: {
				sans: ["Inter", "sans-serif"],
				heading: ["Poppins", "sans-serif"],
			},

			spacing: {
				1: "8px",
				2: "12px",
				3: "16px",
				4: "24px",
				5: "32px",
				6: "48px",
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/container-queries"),
	],
};

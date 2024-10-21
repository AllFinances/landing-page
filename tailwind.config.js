/** @type {import('tailwindcss').Config} */
export default {
	important: "#app",
	content: ["./components/**/*.{vue,js}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				background: "rgb(var(--color-background) / <alpha-value>)",
				surface: {
					100: "rgb(var(--color-surface-level-1) / <alpha-value>)",
					200: "rgb(var(--color-surface-level-2) / <alpha-value>)",
					300: "rgb(var(--color-surface-level-3) / <alpha-value>)",
				},
				primary: "rgb(var(--color-primary) / <alpha-value>)",
				secondary: "rgb(var(--color-secondary) / <alpha-value>)",
				success: "rgb(var(--color-success) / <alpha-value>)",
				info: "rgb(var(--color-info) / <alpha-value>)",
				warn: "rgb(var(--color-warn) / <alpha-value>)",
				error: "rgb(var(--color-error) / <alpha-value>)",
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

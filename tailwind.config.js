/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./components/**/*.{vue,js}",
	  "./layouts/**/*.vue",
	  "./pages/**/*.vue",
	  "./plugins/**/*.{js,ts}",
	  "./nuxt.config.{js,ts}"
	],
	theme: {
	  extend: {
		colors: {
		  primary: '#1E3A8A',   // Custom primary color (dark blue)
		  secondary: '#1D4ED8', // Custom secondary color (lighter blue)
		  accent: '#F59E0B',    // Custom accent color (orange)
		  background: '#F3F4F6',// Custom background color (light gray)
		},
		fontFamily: {
		  sans: ['Inter', 'sans-serif'],   // Custom sans-serif font
		  heading: ['Poppins', 'sans-serif'], // Custom font for headings
		},
		spacing: {
		  '72': '18rem', // Add larger spacing value for padding/margin
		  '84': '21rem',
		  '96': '24rem',
		},
		borderRadius: {
		  'xl': '1rem',   // Custom border radius size for large buttons/cards
		  '2xl': '1.5rem',
		},
		boxShadow: {
		  'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',  // Custom box shadow for elevation
		  'xl': '0 20px 25px rgba(0, 0, 0, 0.15)',
		},
	  },
	},
	plugins: [
	  require("@tailwindcss/forms"), 
	  require("@tailwindcss/aspect-ratio"), 
	  require("@tailwindcss/typography"),
	],
  }
  
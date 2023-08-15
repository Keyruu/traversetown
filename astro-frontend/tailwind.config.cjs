/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [{
			mytheme: {
				"primary": "#56bdf4",
				"secondary": "#275de2",
				"accent": "#f7cea0",
				"neutral": "#1d283a",
				"base-100": "#0b0e10",
				"info": "#0ca6e9",
				"success": "#2bd4bd",
				"warning": "#f4c152",
				"error": "#fb6f84",
			},
		},]
	}
}

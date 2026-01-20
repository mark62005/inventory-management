import { type Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
	darkMode: "class",

	content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],

	theme: {
		extend: {
			colors: {
				// Semantic color tokens mapped to CSS variables
				background: "rgb(var(--background) / <alpha-value>)",
				foreground: "rgb(var(--foreground) / <alpha-value>)",

				primary: "rgb(var(--primary) / <alpha-value>)",
				secondary: "rgb(var(--secondary) / <alpha-value>)",
				muted: "rgb(var(--muted) / <alpha-value>)",
				border: "rgb(var(--border) / <alpha-value>)",
			},
		},
	},

	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities(
				{
					".grid-rows-dashboard": {
						gridTemplateRows: "repeat(8, 20vh)",
					},
					".grid-rows-dashboard-xl": {
						gridTemplateRows: "repeat(8, 7.5vh)",
					},
				},
				{
					variants: ["responsive"],
				},
			);
		}),
	],
};

export default config;

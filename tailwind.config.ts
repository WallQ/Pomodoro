import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				lust: '#E22225',
				forest: '#238735',
				eigengrau: '#211D2B',
			},
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans],
				mono: ['var(--font-roboto-mono)', ...fontFamily.mono],
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
	],
} satisfies Config;

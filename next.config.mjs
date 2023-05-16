await import('./src/env.mjs');

/** @type {import("next").NextConfig} */
const config = {
	images: {
		domains: ['images.unsplash.com'],
	},
	reactStrictMode: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
};

export default config;

/** @type {import("prettier").Config} */
const config = {
	printWidth: 80,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	jsxSingleQuote: true,
	quoteProps: 'as-needed',
	trailingComma: 'all',
	bracketSpacing: true,
	bracketSameLine: true,
	arrowParens: 'always',
	endOfLine: 'lf',
	singleAttributePerLine: false,
	plugins: [require.resolve('prettier-plugin-tailwindcss')],
};

module.exports = config;

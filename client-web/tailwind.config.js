/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'primary': '#0f172a', // dark navy
				'accent': '#06b6d4', // cyan
				'gradient-start': '#ec4899',
				'gradient-end': '#fbbf24',
			},
		},
	},
	plugins: [],
};

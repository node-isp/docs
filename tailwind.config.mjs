import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: 'rgb(var(--primary-200))', 600: 'rgb(var(--primary-600))', 900: 'rgb(var(--primary-900))', 950: 'rgb(var(--primary-950))' };

const gray = { 100: '#f5f6f8', 200: '#eceef2', 300: '#c0c2c7', 400: '#888b96', 500: '#545861', 700: '#353841', 800: '#24272f', 900: '#17181c' };

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: { accent, gray },
        },
    },
    plugins: [starlightPlugin()],
};

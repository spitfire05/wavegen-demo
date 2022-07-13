import { sveltekit } from '@sveltejs/kit/vite';
import wasmPack from 'vite-plugin-wasm-pack';
import preprocess from "svelte-preprocess";

/** @type {import('vite').UserConfig} */
const config = {
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	plugins: [
		sveltekit(),
		wasmPack('./rust'),
	]
};

export default config;

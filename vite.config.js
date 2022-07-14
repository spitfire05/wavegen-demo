import { sveltekit } from '@sveltejs/kit/vite';
import wasmPack from 'vite-plugin-wasm-pack';
import preprocess from "svelte-preprocess";

import { execSync } from "child_process";

function get_git_hash() {
	let git_hash = execSync("git rev-parse --short HEAD", {encoding: "utf-8"});
	console.log(git_hash);
	return git_hash;
}

/** @type {import('vite').UserConfig} */
const config = {
	define: {
		__GIT_HASH__: JSON.stringify(get_git_hash())
	},
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
	plugins: [
		sveltekit(),
		wasmPack('./wavegen-wasm'),
	]
};

export default config;

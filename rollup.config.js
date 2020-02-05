import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

function mod(input, output, type) {
	return {
		input: input,
		external: [
			'store',
			'store/dist/store.modern',
			'store/plugins/observe',
		],
		output: [
			{ file: output, format: type },
			{ file: output, format: type },
		],
	}
}

export default [
	mod('src/main.js', pkg.module, 'esm'),
	mod('src/main.js', pkg.main, 'cjs'),
	mod('src/main.legacy.js', pkg.legacyModule, 'esm'),
	mod('src/main.legacy.js', pkg.legacyMain, 'cjs'),
];

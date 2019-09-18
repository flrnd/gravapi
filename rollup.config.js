import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: './src/cli.js',
  output: {
    file: './build/cli.js',
    format: 'cjs',
    name: 'gravapi-cli',
  },
  plugins: [
    json({
      exclude: ['node_modules'],
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
};

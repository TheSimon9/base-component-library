import babel from '@rollup/plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import sass from 'rollup-plugin-sass';

export default {
  input: pkg.source, // entry point to the components we want to bundle.
  output: [ // output directory where save the bundled library.
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'esm' }
  ],
  plugins: [ //plugins we wish to use and their respective configs
    external(),
    babel({
      exclude: 'node_modules/**'
    }),
    del({ targets: ['dist/*'] }),
    sass()
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
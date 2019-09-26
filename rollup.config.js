import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default [{
    input: 'lib/index.js',
    output: {
        name: 'OnScreen',
        file: 'dist/on-screen.umd.js',
        format: 'umd'
    },
    plugins: [
        babel(),
        resolve(), // so Rollup can find `ms`
        commonjs() // so Rollup can convert `ms` to an ES module
    ]
}];

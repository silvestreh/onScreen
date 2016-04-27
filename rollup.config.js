import babel from 'rollup-plugin-babel';

export default {
    entry: 'lib/index.js',
    sourceMap: true,
    plugins: [babel()]
};

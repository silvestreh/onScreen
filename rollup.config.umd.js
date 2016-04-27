import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/onScreen.umd.js';
config.moduleName = 'onScreen';

export default config;

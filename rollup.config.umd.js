import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/OnScreen.umd.js';
config.moduleName = 'OnScreen';

export default config;

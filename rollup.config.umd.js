import config from './rollup.config';

config.format = 'umd';
config.dest = 'dist/on-screen.umd.js';
config.moduleName = 'OnScreen';

export default config;

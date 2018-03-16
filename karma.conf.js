module.exports = (config) => {
    config.set({
        browserConsoleLogOptions: {
            level: 'debug',
            format: '%b %T: %m',
            terminal: true
        },
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [
            'test/*_test.js'
        ],
        preprocessors: {
            'lib/index.js': ['rollup', 'coverage'],
            'test/*_test.js': ['rollup']
        },
        rollupPreprocessor: {
            plugins: [
                require('rollup-plugin-babel')(),
                require('rollup-plugin-istanbul')({
                    exclude: ['test/*_test.js'],
                }),
            ],
            format: 'iife',
            sourceMap: 'inline'
        },
        customContextFile: 'test/context.html',
        customLaunchers: {
            PhantomJS_Desktop: {
                base: 'PhantomJS',
                options: {
                    viewportSize: {
                        width: 800,
                        height: 600,
                    }
                }
            },
        },
        browsers: ['PhantomJS_Desktop'],
        reporters: ['mocha', 'coverage'],
        coverageReporter: {
            reporters: [{ type: 'lcov' }]
        },
        singleRun: true,
    });
};

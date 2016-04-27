# rollup-starter-project

This package shows how to get started with [rollup][rollup] (and [babel][babel]) for writing
npm packages using ES6 modules. Writing npm packages with a [jsnext:main][jsnext:main] allows
users of your package to choose whether they use it using the traditional
`require` function understood by node.js, or using the `import` statement added
in ES6 which can result in smaller bundles through live-code inclusion static
analysis.

[babel]: https://github.com/babel/babel
[jsnext:main]: https://github.com/rollup/rollup/wiki/jsnext:main
[rollup]: https://github.com/rollup/rollup

## Usage

You can simply use this project as inspiration for how to configure your own,
or clone it and edit the metadata files when starting your own project (i.e.
README.md, package.json, and LICENSE).

### lib/index.js

This is the main source file in your application, and the main file you'll start
editing to implement the functionality of your package. As shown in this
example, you can `import` other files from this file similarly to how you would
`require` packages typically (e.g. `lib/utils.js`).

### test/index_test.js

This is the starting point for tests in your package. You should import the
code to test from `lib/` as shown in the example. The project is already
configured to use mocha when you run `npm test`.

### dist/rollup-starter-project.umd.js

This is the `main` file of the package and includes all the code needed to run
your package. If your package has dependencies you do not want bundled, be sure
to configure rollup to exclude them by marking them as `external`.

### dist/rollup-starter-project.es6.js

This is the `jsnext:main` file of the package and includes all the code needed
to run your package. Compared to the `umd` version, this one preserves ES6
imports and exports at the package boundary for tools that support it (such as
rollup). If your package has dependencies you do not want bundled, be sure to
configure rollup to exclude them by marking them as `external`.

### .eslintrc

This controls how the package is linted and starts off with the recommended set
of rules from eslint itself. It also uses `babel-eslint` to parse your code,
allowing syntax that the standard eslint parser may not understand (e.g. type
annotations).

## Dependencies

This section explains what all the dependencies are and what they're for, so
you can decide which ones you actually need.

### babel-eslint

Enables eslint to understand all JavaScript syntax that
[babel](http://babeljs.io) understands, and adds a few rules for linting ES2015
code. This can be removed if you plan not to use babel to transform ES2015 code
to ES5 or if you plan not to use eslint.

### babel-preset-es2015-rollup

The base preset of babel plugins required to support all ES2015 syntax is the
`babel-preset-es2015` preset. This preset is the same thing, but without
support for ES2015 modules since rollup handles them instead of babel. This can
be removed if you plan not to use babel to transform ES2015 code to ES5 or you
plan to specify all the babel plugins manually.

### eslint

[eslint](http://eslint.org) checks your code for common errors and ensures it
adheres to the style you configure in `.eslintrc`. You can remove this if you
plan not to lint your code or if you're using another linter, such as
[jshint](http://jshint.com) or [jscs](http://jscs.info).

### mocha

[mocha](https://mochajs.org) is a test runner. You can remove this if you plan
not to write tests (don't do that!) or if you plan to use another test runner
such as [Jasmine](http://jasmine.github.io).

### rollup

[rollup](http://rollupjs.org) is a JavaScript module bundler and the reason
you're looking at this project in the first place, so you probably don't want
to remove this dependency.

### rollup-plugin-babel

This plugin enables support for [babel](http://babeljs.io), which transforms
ES2015 code to ES5. You can remove this if you plan not to use ES2015 code.

### rollup-plugin-multi-entry

Used in `rollup.config.test.js` to enable using all the testing files as the
entry point for the test build. You can remove this if you only have a single
test file, or if you want to test your built file in `dist/` instead of
referencing your source files directly. Doing so has the advantage of testing
the exact bytes that you plan to distribute, but the disadvantage of being
unable to unit test private module functionality (i.e. you can only test things
exported by your package). A hybrid approach might be the best of both worlds.

### source-map-support

Used in `rollup.config.test.js` to provide error messages with stack traces
referencing the original source files. You can remove this if you do not care
about stack trace lines matching source files, or if you use some other
mechanism to achieve this.

## Contributing

If you think a project built with rollup should be set up differently, open an
issue to discuss it or create a pull request.

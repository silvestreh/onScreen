const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const watchify = require('watchify');
const babel = require('babelify');

function compile(watch) {
    var bundler = watchify(browserify('./src/main.js', { debug: true }).transform(babel));

    function rebundle() {
        bundler.bundle()
            .on('error', function(err) {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('build.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({
                loadMaps: true
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./build'));
    }

    if (watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle();
        });
    }

    rebundle();
}

function watch() {
    return compile(true);
}

gulp.task('build', function() {
    return compile();
});

gulp.task('watch', function() {
    return watch();
});

gulp.task('default', ['watch']);

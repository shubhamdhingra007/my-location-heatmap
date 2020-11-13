const jsonminify = require('gulp-jsonminify');
const {
    src,
    dest
} = require('gulp');

function defaultTask() {
    return src(['public/*.json'])
        .pipe(jsonminify())
        .pipe(dest('dist'));
}

exports.default = defaultTask
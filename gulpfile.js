// Connect
const { src, dest, watch, parallel, series } = require("gulp");
const postcss = require('gulp-postcss');
const autoPrefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));

function scssTask() {
  return src("src/styles/style.scss")
         .pipe(autoPrefixer({
           cascade: false
         }))
         .pipe(sass.sync({outputStyle: 'expanded'}).on('error', sass.logError))
         .pipe(dest("dist/styles/style.css"));
};

function watchFiles() {
  watch("src/styles/style.scss", scssTask);
}

exports.scss = scssTask;
exports.watchFiles = watchFiles;
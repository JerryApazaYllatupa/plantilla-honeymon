const gulp = require( 'gulp')
const sass = require( 'gulp-sass')
const browser = require('browser-sync').create()
const postcss = require( 'gulp-postcss')
const autoprefixer = require( 'autoprefixer')
const cssnext = require( 'cssnext')
// const precss = require( 'precss')
const sourcemaps = require( 'gulp-sourcemaps')
const pug = require('gulp-pug')

//Compile scss into css

function style() {
  var processors = [
    autoprefixer({ overrideBrowserslist: ['last 2 version'] }),
    cssnext
  ];
  // 1- Where is my scss file
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    //  2- pass that  file trough  sass compile
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))

    .pipe(postcss(processors))
    .pipe(sourcemaps.write())
    // 3- Where  do i save the compiled scss ?
    .pipe(gulp.dest('./public/css'))
    //4- stream  changes  to all  browser
    .pipe(browser.stream())
}

function pugCompile(){

 return gulp.src('./src/pug/*.pug')
  .pipe(pug({
    pretty:true
  }))
  .pipe(gulp.dest('./public/'))
}

function watch() {
  browser.init({
    server: {
      baseDir: './public/'
    }
  });

  gulp.watch('./src/scss/**/*.scss', style)
  gulp.watch('./src/pug/**/*.pug', pugCompile)
  gulp.watch('./src/pug/**/*.pug').on('change', browser.reload)
  gulp.watch('./src/scss/**/*.scss').on('change', browser.reload)
  gulp.watch('./public/js/**/*.js').on('change', browser.reload)

}

exports.style = style
exports.pugCompile = pugCompile
exports.watch = watch
var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var minify = require('gulp-minify')
var pump = require('pump')

gulp.task('js', function () {
	// pump([
		return gulp.src(['ng/module.js','ng/**/*.js'])
		 	// .pipe(minify())
			.pipe(concat('app.js'))
			// .pipe(uglify({ mangle: false }))
			//.pipe(uglify())
			.pipe(gulp.dest('layouts'))
		
		// ]
		// , function (err) {
		// 	console.log('Finished', err)
		// })

		// gulp.src(['node-app.js', 'websockets.js' ])
		// 	.pipe(concat('websocks.js'))
		// 	.pipe(gulp.dest('layouts'))
	})
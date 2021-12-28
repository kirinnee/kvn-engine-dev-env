/*
 * Compiling sequence for KVN engine by Kirinnee97
 * Please refer any questions, bugs and copyright issue to https://bigbulb.studio or email me at kirinnee97@gmail.com
 * THANK YOU SO MUCH <3
 */
var gulp = require('gulp');
var babel = require('gulp-babel');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var strip = require('gulp-strip-comments');
var stripCssComments = require('gulp-strip-css-comments');
var concat = require('gulp-concat');
var del = require('del');
var replace = require('gulp-replace');
var concatCss = require('gulp-concat-css');
var htmlmin = require('gulp-htmlmin');
var imagemin = image = require('gulp-image');
var rename = require('gulp-rename');
var imageResize = require('gulp-image-resize');
var fs = require('fs');
var merge = require('merge-stream');
var cleaner = postcss([autoprefixer({
	add: false,
	browsers: []
})]);
var prefixer = postcss([autoprefixer({
	browsers: ['last 3 version']
})]);
var cn = postcss([cssnano({
	zindex: false,
	reduceIdents: false,
	reduceTransforms: false
})]);
//custom config
var customConfig = require('./config');
//get scripts
gulp.cusConfig = {
	scripts: [],
	pace: true,
	sprites: [],
	useResp: false,
	respKey: "def",
	respSize: 2000,
	respImg: {
		"def": 100
	}
};

function string(string) {
	if (typeof string === "string" && string.trim() !== "") {
		return true;
	}
	return false;
}

function genCSS(arr) {
	var ret = "";
	for (var x in arr) {
		ret += "<link rel='stylesheet' href='" + arr[x] + "'/>";
	}
	return ret;
}

function genJS(arr) {
	var ret = "";
	for (var x in arr) {
		ret += "<script src='" + arr[x] + "'></script>";
	}
	return ret;
}

function genImg(gcc, srcArr) {
	console.log(srcArr);
	if (string(srcArr[0]) && string(srcArr[1])) {
		if (gcc.useResp) {
			var name = srcArr[0].trim();
			var ext = srcArr[1].trim();
			var src = name + "_" + gcc.respKey.trim() + ext;
			var srcset = "";
			for (var k in gcc.respImg) {
				if (string(k) && typeof gcc.respImg[k] === "number") {
					var key = k.trim();
					var val = parseInt(gcc.respImg[k]) * gcc.respSize / 100;
					srcset += ((name + "_" + key + ext).trim() + " " + (val + "w").trim() + ",").trim();
				}
			}
			var lastChar = srcset.slice(-1);
			if (lastChar === ',') {
				srcset = srcset.slice(0, -1);
			}
			var i = "<img src='" + src + "'";
			if (srcset.trim() !== "") {
				i += " srcset='" + srcset.trim() + "' sizes='100vw'"
			}
			i += "/>";
			return i;
		} else {
			return "<img src='" + srcArr.join("") + "'/>"
		}
	} else {
		return "";
	}
}

function copyTo(src, des) {
	return function() {
		return gulp.src(src)
			.pipe(gulp.dest(des));
	}
}
//test
gulp.task('test', function() {
	console.log(customConfig.penis);
})
//tryloading initFile
gulp.task('loadinit', function() {
	var init = fs.readFileSync('./workspace/kvn/scripts/' + customConfig.initFile).toString();
	return gulp.src(['bin/char.js'])
		.pipe(replace('@@HERE@@', init))
		.pipe(replace('window.','var '))
		.pipe(gulp.dest('tempclass'));
});
gulp.task('executeinit', function(done) {
	var char = require('./tempclass/char');
	var f = char([
		[],
		[]
	]);
	gulp.cusConfig.sprites = f;
	done();
});
gulp.task('boot', gulp.series('loadinit', 'executeinit'));
//load all the configs!!
gulp.task('loadconfig', function(done) {
	var config = fs.readFileSync('./workspace/kvn/config.js');
	gulp.cusConfig.scripts = eval(config + 'scripts');
	gulp.cusConfig.pace = eval(config + 'paceIntegration');
	gulp.cusConfig.useResp = eval(config + 'useResponsiveImages');
	gulp.cusConfig.respKey = eval(config + 'responsiveImageDefKey');
	gulp.cusConfig.respSize = eval(config + 'responsiveImageDefSize');
	gulp.cusConfig.respImg = eval(config + 'responsiveImage');
	done();
});
//cleans all temp files
gulp.task('clean', function(done) {
	return del(['export', 'temp', customConfig.patchDir]);
});
//bootstrap runs clean and getscripts on parrallel
gulp.task('bootstrap', gulp.parallel('loadconfig', 'clean', 'boot'));
//clones the workspace into temp
gulp.task('copy', function() {
	return gulp.src('workspace/**/*.*')
		.pipe(gulp.dest('temp'));
});
//babeling kvn core
gulp.task('pure', function() {
	return gulp.src(['temp/kvn/kvn.js'])
		.pipe(babel())
		.pipe(gulp.dest('temp/js'));
})
//concats all dependecies
gulp.task('concatDep', function() {
	return gulp.src([
			'temp/js/TweenLite.min.js',
			'temp/js/CSSPlugin.min.js',
			'temp/js/EasePack.min.js',
			'temp/js/jq.js',
			'temp/js/jqui.js',
			'temp/js/jquery.mousewheel.js',
			'temp/js/swipe.js',
			'temp/js/notification.js',
			'temp/js/fullscreen.js'
		])
		.pipe(concat('dependencies.js'))
		.pipe(gulp.dest('temp/js/'));
});
//concats backend classes
gulp.task('concatBackend', function() {
	return gulp.src([
			'temp/kvn/backend/character.js',
			'temp/kvn/backend/frame.js',
			'temp/kvn/backend/option.js',
			'temp/kvn/backend/scene.js',
			'temp/kvn/backend/sound.js',
			'temp/kvn/backend/soundtype.js',
			'temp/kvn/backend/stage.js',
			'temp/kvn/backend/textbox.js',
			'temp/kvn/backend/vnconsole.js',
			'temp/kvn/soundengine.js',
			'temp/kvn/backend/core.js',
			'temp/kvn/backend/debug.js',
			'temp/js/kvn.js',
			'temp/kvn/scripts/' + customConfig.initFile,
		])
		.pipe(concat('backend.js'))
		.pipe(gulp.dest('temp/js/'));
});
//concats all scripts
gulp.task('concatScripts', function() {
	var s = gulp.cusConfig.scripts;
	var ns = [];
	for (var x in s) {
		ns.push("temp/kvn/scripts/" + s[x]);
	}
	console.log(ns);
	return gulp.src(ns)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('temp/js/'));
});
//concat css
gulp.task('concatCSS', function() {
	var src = ['temp/css/vn.css', 'temp/css/config.css', 'temp/css/jqui.css'];
	if (gulp.cusConfig.pace === true) {
		src.push('temp/css/pace.css');
	}
	return gulp.src(src)
		.pipe(concatCss('vnf.css'))
		.pipe(cleaner)
		.pipe(prefixer)
		.pipe(cn)
		.pipe(gulp.dest('temp/css'));
});
//compress and resize all characters
gulp.task('charCompressResize', function(done) {
	if (gulp.cusConfig.useResp) {
		//resize and compress
		function genTask(suffix, percentage, resolve) {
			gulp.src(['temp/' + customConfig.charImgDir + '/**/*.*'])
				.pipe(rename(function(path) {
					path.basename += "_" + suffix;
				}))
				.pipe(
					imageResize({
						percentage: percentage,
						background: "none"
					}))
				.pipe(imagemin({
					pngquant: true,
					optipng: true,
					zopflipng: true,
					jpegRecompress: true,
					mozjpeg: true,
					guetzli: false,
					gifsicle: true,
					svgo: true,
					concurrent: customConfig.concurrentThreads,
					quiet: false // defaults to false
				}))
				.pipe(gulp.dest('temp/' + customConfig.charImgDir + '/com'))
				.on('end', resolve);
		}
		var ri = gulp.cusConfig.respImg;
		var tasks = [];
		for (var x in ri) {
			if (string(x) && typeof ri[x] === "number") {
				tasks.push(new Promise(function(resolve, reject) {
					genTask(x.trim(), ri[x], resolve)
				}));
			}
		}
		return Promise.all(tasks);
	} else {
		//just compress
		return gulp.src(['temp/' + customConfig.charImgDir + '/**/*.*'])
			.pipe(imagemin({
				pngquant: true,
				optipng: false,
				zopflipng: true,
				jpegRecompress: true,
				mozjpeg: true,
				guetzli: false,
				gifsicle: true,
				svgo: true,
				concurrent: customConfig.concurrentThreads,
				quiet: false // defaults to false
			}))
			.pipe(gulp.dest('temp/' + customConfig.charImgDir));
	}
});
gulp.task('backgroundCompressResize', function(done) {
	if (gulp.cusConfig.useResp) {
		//resize and compress
		function genTask(suffix, percentage, resolve) {
			gulp.src(['temp/' + customConfig.bkgdDir + '/**/*.*'])
				.pipe(rename(function(path) {
					path.basename += "_" + suffix;
				}))
				.pipe(
					imageResize({
						percentage: percentage,
						background: "none"
					}))
				.pipe(imagemin({
					pngquant: true,
					optipng: true,
					zopflipng: true,
					jpegRecompress: true,
					mozjpeg: true,
					guetzli: false,
					gifsicle: true,
					svgo: true,
					concurrent: 1,
					quiet: false // defaults to false
				}))
				.pipe(gulp.dest('temp/' + customConfig.bkgdDir + '/com'))
				.on('end', resolve);
		}
		var ri = gulp.cusConfig.respImg;
		var tasks = [];
		for (var x in ri) {
			if (string(x) && typeof ri[x] === "number") {
				tasks.push(new Promise(function(resolve, reject) {
					genTask(x.trim(), ri[x], resolve)
				}));
			}
		}
		console.log(tasks.length);
		return Promise.all(tasks);
	} else {
		//just compress
		return gulp.src(['temp/' + customConfig.bkgdDir + '/**/*.*'])
			.pipe(imagemin({
				pngquant: true,
				optipng: false,
				zopflipng: true,
				jpegRecompress: true,
				mozjpeg: true,
				guetzli: false,
				gifsicle: true,
				svgo: true,
				concurrent: 20,
				quiet: false // defaults to false
			}))
			.pipe(gulp.dest('temp/' + customConfig.bkgdDir));
	}
});
//parallel concatination and resizing
gulp.task('concats',
	function() {
		if (customConfig.compressImage) {
			return new Promise(gulp.parallel('charCompressResize', 'backgroundCompressResize', 'concatCSS', 'concatScripts', 'concatDep', 'concatBackend'));
		} else {
			return new Promise(gulp.parallel('concatCSS', 'concatScripts', 'concatDep', 'concatBackend'));
		}
	}
);
//compile to singular file
gulp.task('one', function(done) {
	var fn = customConfig.fileName;
	var add = typeof fn === "string" && fn !== "" ? "_" + fn : "";
	return gulp.src([
			'temp/js/dependencies.js', //obtain dep
			'temp/kvn/' + customConfig.configFile,
			'temp/js/backend.js', //obtain Backend
			'temp/js/scripts.js', //obtain scripts
			'temp/kvn/backend/initialize.js' //obtain bootstrapper
		])
		.pipe(concat('kvn' + add + '.js'))

		.pipe(babel()).on("error",function(a,b,c){
			console.log(a);
			console.log(b);
			console.log(c);
		})
		.pipe(gulp.dest('temp/js'));

})
//compile to sepearate file for dependecny
gulp.task('sepDep', function() {
	return gulp.src([
			'temp/js/dependencies.js'
		])
		.pipe(concat('dependency.js'))
		.pipe(strip())
		.pipe(babel())
		.pipe(gulp.dest('temp/js'));
});
//compile to sepearte file for game
gulp.task('sepKVN', function() {
	var fn = customConfig.fileName;
	var add = typeof fn === "string" && fn !== "" ? "_" + fn : "";
	return gulp.src([
			'temp/kvn/' + customConfig.configFile,
			'temp/js/backend.js', //obtain Backend
			'temp/js/scripts.js', //obtain scripts
			'temp/kvn/backend/initialize.js' //obtain bootstrapper
		])
		.pipe(concat('kvn' + add + '.js'))
		.pipe(strip())
		.pipe(babel())
		.pipe(gulp.dest('temp/js'));
});
//full parallel compilations
gulp.task('two', gulp.parallel('sepDep', 'sepKVN'));
//exporttypes
gulp.task('exportCSS', function() {
	return gulp.src(['temp/css/**/*.*', '!temp/css/**/*.css', 'temp/css/**/vnf.css'])
		.pipe(gulp.dest('export/css'));
});
gulp.task('exportPlug', copyTo('temp/js/plugins/*.js', 'export/js/plugins'));
gulp.task('exportHowler', copyTo('temp/js/howler.core.js', 'export/js'));
gulp.task('exportDebug', copyTo('temp/debug/**/*.*', 'export/debug'));
gulp.task('exportCharacters', function() {
	var dir = gulp.cusConfig.useResp ? 'temp/' + customConfig.charImgDir + '/com/**/*.*' : 'temp/' + customConfig.charImgDir + '/**/*.*';
	return gulp.src([dir])
		.pipe(gulp.dest('export/' + customConfig.charImgDir));
});
gulp.task('exportBackground', function() {
	var dir = gulp.cusConfig.useResp ? 'temp/' + customConfig.bkgdDir + '/com/**/*.*' : 'temp/' + customConfig.bkgdDir + '/**/*.*';
	return gulp.src([dir])
		.pipe(gulp.dest('export/' + customConfig.bkgdDir));
});
gulp.task('exportSound', copyTo('temp/kvn/sound/**/*.*', 'export/kvn/sound'));
gulp.task('exportRS', copyTo(
	['temp/*', '!temp/*.html', '!temp/interpreter', '!temp/node_modules', '!temp/*.bat', '!temp/gulpfile.js', '!temp/*.json','!temp/.gitignore','!temp/.git','!temp/kvn-interpreter'], 'export'));
gulp.task('exportHTML', function() {
	var cc = customConfig;
	//get custom file name
	var fn = cc.fileName;
	var htmln = typeof fn === "string" && fn !== "" ? fn : "vn";
	var add = typeof fn === "string" && fn !== "" ? "_" + fn : "";
	//getcss
	var css = genCSS(['css/vnf.css']);
	//get js
	var jses = [];
	if (cc.seperate) {
		jses.push('js/dependencies.js');
	}
	jses.push('kvn/kvn' + add + ".js");
	var js = genJS(jses);
	//get img
	var img = "";
	if (customConfig.appendImage) {
		var gcc = gulp.cusConfig;
		var sprites = gcc.sprites;
		for (var x in sprites) {
			img += genImg(gcc, sprites[x]);
		}
	}
	return gulp.src(["bin/vn-compiled.html"])
		.pipe(replace('@@TITLE@@', cc.name))
		.pipe(replace('@@CSS@@', css))
		.pipe(replace('@@SCRIPTS@@', js))
		.pipe(replace('@@IMAGELOAD@@', img))
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(rename(function(path) {
			path.dirname = "";
			path.basename = htmln;
		}))
		.pipe(gulp.dest('export'));
});
//basic exports
gulp.task('exportBasic', gulp.parallel('exportHTML', 'exportCSS', 'exportPlug', 'exportHowler', 'exportDebug', 'exportCharacters', 'exportBackground', 'exportSound', 'exportRS'));
//single export
gulp.task('singleExport', function() {
	var fn = customConfig.fileName;
	var add = typeof fn === "string" && fn !== "" ? "_" + fn : "";
	var src = 'temp/js/kvn' + add + '.js';
	return gulp.src([src])
		.pipe(gulp.dest("export/kvn"))
});
gulp.task('doubleExport', function() {
	var src = 'temp/js/dependencies.js';
	return gulp.src([src])
		.pipe(gulp.dest("export/js"))
});
gulp.task('end', function() {
	return del(['temp', 'tempclass']);
});
gulp.task('patch', function() {
	var src = [
		'export/**/*.*',
		'!export/css/**/*.*',
		'!export/debug/**/*.*',
		'!export/kvn/images/**/*.*',
		'!export/kvn/sound/**/*.*',
		'!export/*.*',
		'export/*.html'
	];
	if (!customConfig.seperate) {
		src.push('!export/js/**/*.*')
	} else {
		src.push('!export/js/plugins/**/*.*');
		src.push('!export/js/howler.core.js');
	}
	var patchname = customConfig.patchDir;
	return gulp.src(src)
		.pipe(gulp.dest(patchname));
});
//export together
gulp.task('series', function() {
	var sep = customConfig.seperate;
	var order = ['bootstrap', 'copy', 'pure', 'concats', sep ? 'two' : 'one', 'exportBasic', 'singleExport'];
	if (customConfig.seperate) {
		order.push('doubleExport');
	}
	order.push('end');
	if (customConfig.patch) {
		order.push('patch');
	}
	return new Promise(gulp.series(order));
});
gulp.task('es1', function() {
	var a = gulp.src([
			'bin',
			'compile.bat',
			'config.js',
			'gulpfile.js',
			'install.bat',
			'package.json',
			'update.bat'
		])
		.pipe(gulp.dest(['compiler']));
	var b = gulp.src([
			'bin/**/*.*'
		])
		.pipe(gulp.dest(['compiler/bin']));
	return [a, b];
});
gulp.task('es2', function() {
    return del(['compiler']);
})
gulp.task('es', gulp.series('es2', 'es1'))
gulp.task('default', gulp.parallel('series'));

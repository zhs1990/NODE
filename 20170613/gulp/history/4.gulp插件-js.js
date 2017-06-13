let gulp = require("gulp");
//合并js文件插件
//gulp插件特点：导出的都是函数，需要调用来使用，调用的目的是为了传递参数
let concat = require("gulp-concat");
//压缩js文件插件
let uglify = require("gulp-uglify");
//重命名插件
let rename = require("gulp-rename");
//将es6语法转成es5
let babel = require("gulp-babel");

//* 匹配任意字符，除了路径分隔符      "./src/js/*.js"
//** 可以匹配任意字符，包括路径分隔符   "./src/**/*.js"
// concat();  参数为合并后的文件名
gulp.task("js",function () {
    gulp.src("./src/js/*.js").pipe(babel()).pipe(concat("all.js")).pipe(gulp.dest("./build/js")).pipe(uglify()).pipe(rename("all.min.js")).pipe(gulp.dest("./build/js"));
});
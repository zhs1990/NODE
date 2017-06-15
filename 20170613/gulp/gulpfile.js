let gulp = require("gulp");
let $ = require("gulp-load-plugins")();

gulp.task("html",function () {
    let target = gulp.src("./src/index.html"); //得到目标
    let source = gulp.src(["./build/js/all.min.js","./build/css/all.min.css"]);//源文件
    target.pipe($.inject(source,{ignorePath:"/build/",addRootSlash:false})).pipe(gulp.dest("./build"));
});

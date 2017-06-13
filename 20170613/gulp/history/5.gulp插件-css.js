let gulp = require("gulp");
//可以帮你加载所有的gulp插件
let $ = require("gulp-load-plugins")();
//编译-合并-保存-压缩-重命名-保存
gulp.task("css",function () {
    gulp.src("./src/less/*.less")
        .pipe($.less())
        .pipe($.concat("all.css"))
        .pipe(gulp.dest("./build/css"))
        .pipe($.cleanCss())
        .pipe($.rename(function (obj) {
            obj.basename+=".min";
        }))
        .pipe(gulp.dest("./build/css"));
});
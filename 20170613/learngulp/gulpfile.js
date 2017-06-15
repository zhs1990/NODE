let gulp = require("gulp");
let $ = require("gulp-load-plugins")();

gulp.task("js",function(){
    gulp.src("./src/js/*.js")
        .pipe($.babel())
        .pipe($.concat("all.js"))
        .pipe(gulp.dest("./build/js"))
        .pipe($.uglify())
        .pipe($.rename("all.min.js"))
        .pipe(gulp.dest("./build/js"));
});
gulp.task("css",function () {
    gulp.src("./src/less/*.less")
        .pipe($.concat("all.css"))
        .pipe(gulp.dest("./build/css"))
        .pipe($.cleanCss())
        .pipe($.rename("all.min.css"))
        .pipe(gulp.dest("./build/css"));
});
gulp.task("image",function () {
   gulp.src("./src/imgs/*.png").pipe(gulp.dest("./build/imgs"));
});
gulp.task("html",function () {
    let target = gulp.src("./src/index.html");
    let source = gulp.src(["./build/css/all.css","./build/js/all.js"]);
    target.pipe($.inject(source,{
        ignorePath:"/build/",
        addRootSlash:false
    })).pipe($.minifyHtml()).pipe(gulp.dest("./build")).pipe($.connect.reload());
});
gulp.task("serve",function () {
    $.connect.server({
        port:8080,
        root:"./build",
        livereload:true
    });
});
gulp.task("watch",function () {
    gulp.watch("./src/*.html",["html"]);
});
gulp.task("default",["serve","watch","js","css","image"]);
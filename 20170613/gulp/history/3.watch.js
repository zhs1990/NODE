let gulp = require("gulp");

gulp.task("copy",function () {
    gulp.src("./src/*.html").pipe(gulp.dest("./build"));
});
gulp.task("watch",function () {
    //使用方法1
    //监控src目录下所有的html文件的变化，当他们变化之后执行对应的回调函数
    // gulp.watch("./src/*.html",function (event) {
    //     console.log(event);
    //     /*
    //     type  变化类型   新增 删除 修改
    //      path   变化的文件路径
    //     * { type: 'changed',
    //      path: 'E:\\node\\node\\20170613\\gulp\\src\\1.html' }
    //     * */
    // });

    //使用方法2
    gulp.watch("./src/*.html",["copy"]);
});
let gulp = require("gulp");

/*
* gulp.src("相对路径") 用来获取可读流
* gulp.dest("相对路径")  获取一个可写流  参数是相对路径  参数为目录名
* gulp中流是对象流，流时放的不是按字节为单位，而是以文件对象为单位
*   {filename:"文件名",content:"内容"}
* "./src/*.html"   glob  文件路径通配符
*   *代表可读流中有可匹配的对个文件对象
* */
gulp.task("copy",function () {
    //pipe   管道输出
    gulp.src("./src/*.html").pipe(gulp.dest("./build"));
});
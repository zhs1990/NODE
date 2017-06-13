let gulp = require("gulp");
//定义一个任务，参数1是任务的名称，参数2是任务的定义，可以同时定义多个任务
gulp.task("hello",function () {
    console.log("hello");
});

//在cmd中执行任务  gulp hello
let async = require("async");
//并行，时间是以执行任务时间最长的为准
console.time("cost");
async.parallel([
    function (cb) {
        setTimeout(function () {
            console.log("A");
            cb(null,"A");
        },3000);
    },
    function (cb) {
        setTimeout(function () {
            console.log("B");
            cb(null,"B");
        },2000);
    },
    function (cb) {
        setTimeout(function () {
            console.log("C");
            cb(null,"C");
        },1000);
    }
    //在结果数组中，结果的排列顺序和任务的先后完成顺序无关，跟任务在数组中的排列顺序有关系
],function (err,result) {
    console.log(err);
    console.log(result);
    console.timeEnd("cost");
});
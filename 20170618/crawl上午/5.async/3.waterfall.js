let async = require("async");
/*
* 瀑布模型也是串行结构，第一个任务完成后才能开启第二个任务，第二个任务完成后才能开启第三个任务
* 但是上一个任务的返回值会传递给下一个任务
* */
console.time("cost");
async.waterfall([
    function (cb) {
        setTimeout(function () {
            cb(null,"鸡蛋");
        },2000);
    },
    function (data,cb) { //data = 鸡蛋
        setTimeout(function () {
            cb(null,"炒"+data);
        },3000);
    },
    function (data,cb) { //data = 炒鸡蛋
        setTimeout(function () {
            cb(null,"吃"+data);
        },1000);
    }
],function (err,result) {
    console.log(err);
    console.log(result);//result是最后一个函数执行的结果，不是数组
    console.timeEnd("cost");
});
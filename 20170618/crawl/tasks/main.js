let read = require("./read");
let write = require("./write");
let async = require("async");
let Movie = require("../model");
let debug = require("debug")("crawl:main");
let url = "http://top.baidu.com/buzz?b=26&c=1";
//先清空数据库，读，写
let start = function () {
    async.waterfall([
        //先清空数据库
        function (cb) {
            Movie.remove({},cb);
        },
        //读取数据
        function (data,cb){
            read(url,cb);
        },
        //写入数据
        function (data,cb){
            write(data,cb);
        }
    ],function (err,result) {
        debug("全部任务执行完毕");
    });
};
start();
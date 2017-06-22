let Movie = require("../model");
let async = require("async");
let debug = require("debug")("crawl:write");
module.exports = function (movies,callback) {
    async.forEach(movies,function (movie,cb) {
        debug(`写入电影：${movie.name}`);
        Movie.create(movie,cb);
    },callback);
};
// module.exports([{ name: '喜欢你',
//     url: 'http://www.baidu.com/baidu?cl=3&tn=SE_baiduhomet8_jmjb7mjw&fr=top1000&wd=%CF%B2%BB%B6%C4%E3' } ],function () {});
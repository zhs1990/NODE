//fs 是一个核心模块
//操作文件 目录 文件夹
let fs = require("fs");
//fs里面的方法都是同步和异步同时出现，能用异步，不用同步
/*
读取的特点
1,读取的文件必须存在
2,读出的类型默认都是buffer
3,/ 代表根目录  当前文件所在的磁盘的根目录
./ 相对当前文件的路径，可省略
4,同步的结果永远都在返回值上，异步的结果在callback参数中


*/
//同步方法读取文件 同步错误可以try catch捕获
var school = {};
var name = fs.readFileSync("./1.txt","utf-8");
school.name = name;
var say = fs.readFileSync("./2.txt","utf-8");
school.say = say;
console.log(school);
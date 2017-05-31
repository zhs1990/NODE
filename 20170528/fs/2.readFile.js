//fs 是一个核心模块
//操作文件 目录 文件夹
let fs = require("fs");
let EventEmitter = require("events");
let event = new EventEmitter;
//fs里面的方法都是同步和异步同时出现，能用异步，不用同步
/*
读取的特点
1,读取的文件必须存在
2,读出的类型默认都是buffer
3,/ 代表根目录  当前文件所在的磁盘的根目录
./ 相对当前文件的路径，可省略
4,同步的结果永远都在返回值上，异步的结果在callback参数中


*/
//异步方法读取文件 ,异步代码没有返回值,在任意地方都能打印出school


//第一种 很多时候处理异步可以进行嵌套，可能会导致回调地域
/*var school = {};
fs.readFile("./1.txt","utf-8",function(err,data){
    //error-first
    if(err)console.log(err);
    school.name = data;
    fs.readFile("./2.txt","utf-8",function(err,data){
        //error-first
        if(err)console.log(err);
        school.age = data;
        console.log(school);
    });
});*/
//第二种:索引解决 callback
// var school = {};
// var index = 0;
// fs.readFile("./1.txt","utf-8",function(err,data){
//     //error-first
//     if(err)console.log(err);
//     school.name = data;
//     index++;
//     out();
// });
// fs.readFile("./2.txt","utf-8",function(err,data){
//     //error-first
//     if(err)console.log(err);
//     school.age = data;
//     index++;
//     out();
// });
// function out(){
//     if(index===2){
//         console.log(school);
//     }
// }

//第三种  订阅发布模式
// var school = {};
// fs.readFile("./1.txt","utf-8",function(err,data){
//     //error-first
//     if(err)console.log(err);
//     school.name = data;
//     event.emit("输出");
// });
// fs.readFile("./2.txt","utf-8",function(err,data){
//     //error-first
//     if(err)console.log(err);
//     school.age = data;
//     event.emit("输出");
// });
// function out(){
//     if(school.name&&school.age){
//         console.log(school);
//     }
// }
// event.on("输出",out);
//第四种 发布订阅升级版
var school = {};
fs.readFile("./1.txt","utf-8",function(err,data){
    //error-first
    if(err)console.log(err);
    school.name = data;
    event.emit("输出");
});
fs.readFile("./2.txt","utf-8",function(err,data){
    //error-first
    if(err)console.log(err);
    school.age = data;
    event.emit("输出");
});
function out(){
    //Object.keys(对象)  将对象转换成数组{name:1,age:2}  [name,age]
    if(Object.keys(school).length===2){
        console.log(school);
    }
}
//订阅
event.on("输出",out);


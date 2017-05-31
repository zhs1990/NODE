/*
* fs
* 读
* fs.readyFile(文件，编码格式，回调函数);
* fs.readFileSync(文件，编码格式);
* 写
* fs.writeFile(文件，文件内容，回调);
* fs.writeFileSync(文件，文件内容);
*
* 方法
* fs.
* */
//同步
let fs = require("fs");
let EventEmitter = require("events");
let event = new EventEmitter();
let school = {};
// let result = fs.readFileSync("./1.txt","utf-8");
// school.name = result;
// let result2 = fs.readFileSync("./2.txt","utf-8");
// school.age = result2;
// console.log(school);
//异步
// fs.readFile("./1.txt","utf-8",function(err,data){
//     school.name = data;
//     fs.readFile("./2.txt","utf-8",function(err,data){
//         school.age = data;
//         console.log(school);
//     });
// });

// let index = 0;
// fs.readFile("./1.txt","utf-8",function(err,data){
//     school.name = data;
//     index++;
//     out();
// });
// fs.readFile("./2.txt","utf-8",function(err,data){
//     school.age = data;
//     index++;
//     out();
// });
// function out(){
//     if(index===2){
//         console.log(school);
//     }
// }

// fs.readFile("./1.txt","utf-8",function(err,data){
//     school.name = data;
//     event.emit("添加");
// });
// fs.readFile("./2.txt","utf-8",function(err,data){
//     school.age = data;
//     event.emit("添加");
// });
// function out(){
//     if(school.name&&school.age){
//         console.log(school);
//     }
// }
// event.on("添加",out);

// fs.readFile("./1.txt","utf-8",function(err,data){
//     school.name = data;
//     event.emit("添加");
// });
// fs.readFile("./2.txt","utf-8",function(err,data){
//     school.age = data;
//     event.emit("添加");
// });
// function out(){
//     if(Object.keys(school).length===2){
//         console.log(school);
//     }
// }
// event.on("添加",out);

function readName(){
    return new Promise(function(resolve,reject){
        fs.readFile("./1.txt","utf-8",function(err,data){
            resolve(data);
        });
    });
}
function readAge(){
    return new Promise(function(resolve,reject){
        fs.readFile("./2.txt","utf-8",function(err,data){
            resolve(data);
        });
    });
}
Promise.all([readName(),readAge()]).then(([name,age]) => {
    school.name = name;
    school.age = age;
    console.log(school);
});
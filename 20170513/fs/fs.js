//fs  内置的文件系统模块
let fs = require("fs");

//同步读取文件
// let resHtml = fs.readFileSync("./1.html","utf-8");  //同步读取,返回值为读取到的页面内容
// console.log(resHtml);//默认buffer格式  二进制数据流格式

//异步读取文件
// let resHtml = fs.readFile("./data.txt","utf-8",function(err,result){
//     //console.log(err);
//     if(err){
//         throw Error(err);
//     }else{
//         console.log(result);
//     }
// });
//console.log(123);

fs.writeFile("./data.txt","hello js",{flag:"a"},function(err){
    console.log(err);
});

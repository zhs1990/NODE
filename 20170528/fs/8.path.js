//操作路径
let path = require("path"); //路径模块
//path.resolve();  解析路径  把相对路径解析成绝对路径
//path.join(); 连接路径

console.log(path.resolve("dist","..","/"));//.. 返回上一级  /根目录
console.log(path.resolve("dist","a","b"));//.. 返回上一级  /根目录
console.log(path.join(__dirname,"dist","a","b"));//dis\a\b

//resolve是最常用的
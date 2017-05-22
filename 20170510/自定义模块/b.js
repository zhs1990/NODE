let obj = require("./a.js");//模块引入有缓存，即使引入多次，也是执行一次，走的是缓存
let path = require("path");
let obj = require("./a.js");//模块引入有缓存，即使引入多次，也是执行一次，走的是缓存

console.log(path.resolve("./a.js")); //获取当前文件的绝对路径
console.log(require .cache[path.resolve("./a.js")]);//模块清除缓存,路径为绝对路径，cache是模块缓存信息对象 属性名是模块的绝对路径
let obj = require("./a.js");
//console.log(obj.sum(10,20));
let mime = require("mime");//第三方模块（第三方模块和内置模块只需要根据名称查找即可）
//第三方模块安装方法    npm install mime --save
let server2 = require("./server2.js");//自定义模块需要按照相对路径查找
console.log(mime.lookup("./index3.html"));//解析出指定文件的mine类型
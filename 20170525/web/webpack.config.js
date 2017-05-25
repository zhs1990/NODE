let path = require("path"); //node中操作路径模块，可以拼接，可以解析
console.log(__dirname);  //node中：__dirname是指当前文件所在目录的绝对路径
console.log(__filename); //node中：__filename是指当前文件的绝对路径
console.log(path.resolve(__dirname,"./dist"));//将编译后的文件接解析出绝对路径
console.log(path.join(__dirname,"./dist"));//将解析出来的绝对路径与dist文件拼接在一起
//需要导出的配置对象
module.exports = {
    //单入口：需要编译的文件入口
    //entry:"./src/index.js",
    //多入口，编译多个文件 key值是输出后的名字，
    entry:{
        index:"./src/index.js",
        main:"./src/main.js"
    },
    //编译后的文件输出出口
    output:{
        //指定编译后的输出路径(通常是绝对路径)
        path: path.resolve(__dirname,"./dist"),
        //指定编译后的文件名  "[name].js"-->默认编译后是main.js
        // filename:"bundle.js"
        filename:"[name].js", //入口文件key作为name
        publicPath:"/zhs/" //手动指定server资源输出后的存放路径
    }
};


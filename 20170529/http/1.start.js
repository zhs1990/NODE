//node提供内置模块 可以提供http服务
let http = require("http");
let fs = require("fs");
http.createServer(function(req,res){//监听函数，监听请求到来的函数
    //req 代表客户端
    //res 代表服务端  可写流
    //res.write("hello world");//一般省略write，因为调用end会自动调用write
    res.setHeader("Content-Type","text/html;charset=utf-8");//text/plain  纯文本类型
    //readFileSync 与 readFile方法
    // let file = fs.readFileSync("index.html");
    // fs.readFile("./index.html",function(err,data){
    //     if(err)console.log(err);
    //     res.end(data);
    // });
    //res.end(file);
    //res.end("你好");//只有调用end，响应才算完成
    //stream方法
    fs.createReadStream("./index.html").pipe(res);
}).listen(3000,function(){
    console.log("server start 3000");
});//要拥有特定的端口号，ip地址（本机默认存在地址）
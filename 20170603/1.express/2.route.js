//express是一个函数调用,
let express = require("express");
//此函数调用返回一个函数，app就是监听函数，简化http开发，基于http
let app = express();
//当客户端以GET方式访问/signup路径时会调用后面的监听函数进行响应
app.get("/signup",function(req,res){
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.end("注册");
});
app.get("/signin",function (req,res) {
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.end("登录");
});
//put post delete options head
app.listen(8080,function(){
    console.log("8080");
});

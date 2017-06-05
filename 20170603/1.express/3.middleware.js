//express是一个函数调用,
let express = require("express");
//此函数调用返回一个函数，app就是监听函数，简化http开发，基于http
let app = express();
//app.use() 表示使用一个中间件
/*
* 1，进行一些业务处理
* 2，决定是否继续执行
*
* 中间件的作用
* 1，编写公共处理逻辑
*   res.setHeader("Content-Type","text/html;charset="+(charset||"utf-8"));
* 2，添加一些公共的方法
*   每个路由都会用到的方法需要放在中间件中
* 3，进行业务逻辑判断
* */
app.use(function (req,res,next) {
    //中间件用来编写公用逻辑
    res.print = function(charset,data){
        res.setHeader("Content-Type","text/html;charset="+(charset||"utf-8"));
        res.end(data);
    };

    //console.log("middleware1");
    req.name = "zhs";
    next();//表示继续执行下一个中间件或者路由，只有调用了next方法，才会继续执行，否则卡死
});
app.use(function (req,res,next) {
    //中间件用来编写公用逻辑
    //console.log("middleware2");
    req.name = "tl";
    next();//表示继续执行下一个中间件或者路由，只有调用了next方法，才会继续执行，否则卡死
});
//当客户端以GET方式访问/signup路径时会调用后面的监听函数进行响应
app.get("/signup",function(req,res){
    //res.end("注册");
    res.print("utf-8","注册");
});
app.get("/signin",function (req,res) {
    //console.log("/signin"+req.name);
    //res.end("登录"+req.name);
    res.print("utf-8","登录");
});
//put post delete options head
app.listen(8080,function(){
    console.log("8080");
});

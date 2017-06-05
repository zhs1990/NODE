/*
* 编写一个路由的例子
* GET /signup    返回字符串  注册
* GET /signin   返回字符串   登录
* GET /XXX      返回字符串   没找到
* */
/*
* 以下写法的缺点
* 1，所有的业务都耦合在一起，难以维护
* 2，容易引起误修改，不方便重构
* */

let http = require("http");
http.createServer(function(req,res){
    let method = req.method;
    let url = req.url;
    res.setHeader("Content-Type","text/html;charset=utf-8");
    if(method==="GET"){
        if(url === "/signup"){
            res.end("注册");  //写入响应体并且结束响应
        }else if(url==="/signin"){
            res.end("登录");
        }else{
            res.end("页面没找到");
        }
    }
}).listen(8080);
let express = require("express");
let cookieParser = require("cookie-parser");
let app = express();

//基本上所有的中间件都有特点，他们都是一个函数，所以调用一下才会返回真正的中间件函数
//使用此中间件之后，会在req.cookies上拿到cookie
app.use(cookieParser());
app.get("/write",function(req,res){
    //cookie方法是express提供的
    res.cookie("name","zhs",{
        domain:"localhost",
        path:"/read2",
        expires:new Date(Date.now()+20*1000), //当前时间+设置的时间后销毁
        //maxAge:10*1000 //倒计时   时间到了销毁
    });
    /*
        domain  域名
        当客户端再次向某个域名发起请求的时候才会携带上此cookie，不设置默认是当前的域名
        path   路径
        当客户端再次向某个路径发起请求时才会携带上此cookie，不设置默认值是 /  匹配是前缀
        expires  过期时间
        httpOnly    true 不能通过浏览器javascript访问
    */
    res.send("ok");
});
app.get("/read",function(req,res){
    res.send(req.cookies);
});
app.get("/read2",function(req,res){
    res.send(req.cookies);
});
app.listen(8080);
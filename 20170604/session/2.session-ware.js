let express = require("express");
let session = require("express-session"); //会话中间件
let app = express();

//可以直接使用req.session req.session 就是会话对象，也就是客户端在服务器端的对应记录对象
app.use(session({
    secret:"zhs",//加密的秘钥
    resave:true,//每次响应的时候都要重新保存session
    saveUninitialized:true //保存未初始化的session
}));
app.get("/write",function(req,res){
    req.session.username = "admin";
    res.send("ok");
});
app.get("/read",function(req,res){
    res.send(req.session.username);
});
app.listen(8080);
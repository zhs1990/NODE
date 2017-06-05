let express = require("express");
let url = require("url");
let app = express();
/*
* 当访问/signin?username=zhs将username值取出来赋给username，
* 当访问/user的时候,在中间件中判断此用户是否登录，如果未登录，提示没有访问权限，如果已经登录，正常访问
* */
let username;
app.use(function(req,res,next){
    let {pathname,query} = url.parse(req.url,true);

    res.setHeader("Content-Type","text/html;charset=utf-8");
    if(pathname=="/user"){
        if(username){
            next();
        }else{
            res.end("你没有访问权限");
        }
    }else{
        next();
    }
});
//登录
// /signin?username=zhs
app.get("/signin",function(req,res){
    let {pathname,query} = url.parse(req.url,true);
    username = query.username;
    res.end("啦啦");
});

app.get("/user",function(req,res){
    res.end("welcome");
});
app.listen(8080);
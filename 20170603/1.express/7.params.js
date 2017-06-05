let express = require("express");
//如何获取请求中的参数
let app = express();
//注册
/*
* 请求行   方法名 路径 协议
* 请求头
* 请求体
* */
app.get("/user/signup",function(req,res){
    console.log(req.method);//方法名
    console.log(req.path);//直接pathnanme  路径名
    console.log(req.query);//查询字符串对象
    console.log(req.headers);//获取请求头对象
    res.end("ok");
});
// /users/444
app.get("/users/:id",function(req,res){
    //{id:444}
    console.log(req.params);  //获取参数对象
    let id = req.params.id;
    res.end(id);
});
app.listen(8080);
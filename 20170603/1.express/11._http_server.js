let express = require("express");
let STATUS_CODE = require("_http_server").STATUS_CODE;
let app = express();
let users = [];

//使用自己的send方法
app.use(function(req,res,next){
    res.send = function(params){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        switch(params){
            case "object":
                params = JSON.stringify(params);
                break;
            case "number":
                //404 NOT FOUND
                //200 OK
                res.statusCode = params;
                params = STATUS_CODE[params];
                break;
        }
        console.log(params);
        res.end(params);
    };
    next();
});
// /signup?username=zhs
app.get("/signup",function(req,res){
    let username = req.query.username;
    users.push(username);
    //res.end(JSON.stringify(users)); //只能接受字符串或者buffer
    //res.send(users); //可以接受任何类型  对象  字符 buffer  数字
    //res.send("张红爽");
    res.send(404);
});
app.listen(9000);
let express = require("express");
let bodyParser = require("body-parser");
let app = express();
app.use(bodyParser.json()); //json方式取不到数据

app.use(function (req,res,next) {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Content-Type");
    if(req.method =="options"){
        res.end();
    }else{
        next();
    }

});
let message = [];
/*
* 跨域的响应头都是以Access-Control-Allow-开头的
* Origin  来源
* Header    允许的请求头
* Methods   允许客户端发送的方法
* */
app.post("/message",function(req,res){
    message.push(req.body);
    res.send(message);
});
app.get("/message",function (req,res) {
    res.send(message);
});

app.listen(3000);
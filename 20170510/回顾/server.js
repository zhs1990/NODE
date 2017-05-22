let http = require("http");
let fs = require("fs");
let url = require("url");
let mime = require("mime");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var result = fs.readFileSync("./index.html");
        res.end(result);
        return;
    }
    if(pathName==="/getList"){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        var result = fs.readFileSync("./data.json");
        res.end(result);
        return;
    }
    var b = fs.existsSync("."+pathName);
    if(b){
        res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
        var result = fs.readFileSync("."+pathName);
        res.end(result);
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.statusCode = 404;
        res.end("NOT FOUND 404");
    }


}).listen(9090,function(){
    console.log("监听9090端口");
});
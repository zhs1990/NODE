let http = require("http");
let url = require("url");
let fs = require("fs");
let mime = require("mime");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(req.url==="/"){
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
    var a = fs.existsSync("."+pathName);
    if(a){
        res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
        var result2 = fs.readFileSync("."+pathName);
        res.end(result2);
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.statusCode = 404;
        res.end("404 NOT FOUND");
    }

}).listen(8060,function(){
    console.log("监听8060端口");
});
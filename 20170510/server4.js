let http = require("http");
let fs = require("fs");
let url = require("url");
let MIME = require("mime");

http.createServer(function(req,res){
    var pathName = url.parse(req.url).pathname;
    if(pathName==="/"||pathName==="/index.html"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var result = fs.readFileSync("./index.html");
        res.end(result);
        return;
    }
    var isOr = fs.existsSync("."+pathName);
    if(isOr){
        res.setHeader("Content-Type",MIME.lookup(pathName)+";charset=utf-8");
        var result = fs.readFileSync("."+pathName);
        res.end(result);
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.statusCode = 404;
        res.end("NOT FOUND 找不到页面啦。。。。");
    }
}).listen(9000);
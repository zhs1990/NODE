let http = require("http");
let fs = require("fs");
let url = require("url");
let MIME = {
    ".js":"application/javascript",
    ".css":"text/css",
    ".html":"text/html",
    ".jpg":"image/jpg",
    ".png":"image/png"
};

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
        var suffix = /(\.[a-zA-Z]+$)/.exec(pathName)[1];
        res.setHeader("Content-Type",MIME[suffix]+";charset=utf-8");
        var result = fs.readFileSync("."+pathName);
        res.end(result);
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.statusCode = 404;
        res.end("NOT FOUND 找不到页面啦。。。。");
    }

}).listen(7000);
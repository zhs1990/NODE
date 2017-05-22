let http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;

    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        fs.writeHead(302,{
            location: "http://www.baidu.com";
        });
        res.end();
    }
}).listen(3000);
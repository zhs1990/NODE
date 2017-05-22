var http = require("http");
var fs = require("fs");
var url = require("url");
var mime = require("mime");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;

    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var resHtml = fs.readFileSync("./4.post.html");
        res.end(resHtml);
        return;
    }
    console.log(pathName);
    if(pathName==="/getData"){
        var str = "";
        req.on("data",function(data){
            str+=data;
        });
        req.on("end",function(){
            res.end(str);
        });

    }
}).listen(6060,function(){
    console.log("监听6060端口");
});
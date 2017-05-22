let http = require("http");
let fs = require("fs");
let url = require("url");
let mime = require("mime");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;

    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var resHtml = fs.readFileSync("./index.html");
        res.end(resHtml);
        return;
    }

    if(pathName==="/getData"){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        var resJson = fs.readFileSync("./data.json");
        res.end(resJson);
        return;
    }

    var flag = fs.existsSync("."+pathName);
    if(flag){
        res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
        var result = fs.readFileSync("."+pathName);
        res.end(result);
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.statusCode = 404;
        res.end("404 NOT FOUND");
    }


}).listen(8090,function(){
    console.log("监听8090端口");
});
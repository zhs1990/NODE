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
        var resData = fs.readFileSync("./data.json");
        res.end(resData);
        return;
    }
    var flag = fs.existsSync("."+pathName);
    if(flag){
        res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
        var resFil = fs.readFileSync("."+pathName);
        res.end(resFil);
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.statusCode = 404;
        res.end("404 NOT FOUND");
    }
}).listen(5050,function(){
    console.log("监听5050端口");
});
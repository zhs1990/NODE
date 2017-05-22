let http = require("http");
let fs = require("fs");
let url = require("url");
let mime = require("mime");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var resHtml = fs.readFileSync("./3.get.html");
        res.end(resHtml);
        return;
    }
    //在后端处理前端传递过来的数据

    if(pathName==="/getData"){
        console.log(urlObj.query);
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
}).listen(7070,function(){
    console.log("监听7070端口");
});
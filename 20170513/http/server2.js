let http = require("http");
let fs = require("fs");
let mime = require("mime");

http.createServer(function(req,res){
    var pathName = req.url;
    if(req.url==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var resIndex = fs.readFileSync("./index.html");
        res.end(resIndex);
        return;
    }
    var flag = fs.existsSync("."+pathName);
    if(flag){
        res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
        var resJs = fs.readFileSync("."+pathName);
        res.end(resJs);
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.statusCode = 404;
        res.end("404 NOT FOUND");
    }


}).listen(8000,function(){
    console.log("监听8000端口");
});
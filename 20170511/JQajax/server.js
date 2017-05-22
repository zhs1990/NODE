let http = require("http");
let fs = require("fs");
let mime = require("mime");
let url = require("url");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;

    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var result = fs.readFileSync("./index3.html");
        res.end(result);
        return;
    }

    //getdData 获取接口数据
    if(pathName==="/getData"){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        var result = fs.readFileSync("./data.json");
        res.end(result);
        return;
    }

    var a = fs.existsSync("."+pathName);
    if(a){
        res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
        var result = fs.readFileSync("."+pathName);
        res.end(result);
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.statusCode = 404;
        res.end("404 NOT FOUND");
    }


}).listen(5000,function(){
    console.log("监听5000端口");
});
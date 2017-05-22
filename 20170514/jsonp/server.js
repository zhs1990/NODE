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
    if(pathName==="/getTime"){
        //通过查询参数中的cb字段，得到回调函数名
        var fnName = urlObj.query.cb;
        console.log(fnName);
        var time =JSON.stringify(new Date().toLocaleString());
        res.setHeader("Content-Type","text/plain;charset=utf-8");
        res.end(fnName+"("+time+")");
        return;
    }
    var flag = fs.existsSync("."+pathName);
    if(flag){
        res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
        var resOth = fs.readFileSync("."+pathName);
        res.end(resOth);
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.statusCode = 404;
        res.end("404 NOT FOUND");
    }
}).listen(7000,function(){
    console.log("监听7000端口")
});
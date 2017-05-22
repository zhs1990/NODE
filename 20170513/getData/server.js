let http = require("http");
let fs = require("fs");
let mime = require("mime");
let url = require("url");

http.createServer(function(req,res){
    let pathName = url.parse(req.url,true).pathname;
    console.log(req.url);
    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var resHtml = fs.readFileSync("./index.html");
        res.end(resHtml);
        return;
    }
    // if(pathName==="/favicon.ico"){
    //     res.setHeader("Content-Type","image/png;charset=utf-8");
    //     var resImage = fs.readFileSync("./favicon.ico");
    //     res.end(resImage);
    //     return;
    // }
    //get方式获取数据
    console.log(url.parse(req.url,true).query);
    if(pathName==="/getData"){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        var resJson = fs.readFileSync("./data.json");
        res.end(resJson);
        return;
    }
    var flag = fs.existsSync("."+pathName);
    if(flag){
        res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
        var resOth = fs.readFileSync("."+pathName);
        res.end(resOth);
    }else{
        res.setHeader("Content-type","text/html;charset=utf-8");
        res.statusCode = 404;
        res.end("404 NOT FOUND");
    }
}).listen(5050);
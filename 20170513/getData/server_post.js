let http = require("http");
let fs = require("fs");
let mime = require("mime");
let url = require("url");
let qs = require("querystring");

http.createServer(function(req,res){
    let pathName = url.parse(req.url,true).pathname;
    console.log("111"+req.method);
    if(pathName==="/") {
        res.setHeader("Content-Type", "text/html;charset=utf-8");
        var resHtml = fs.readFileSync("./index_post.html");
        res.end(resHtml);
        return;
    }
    if(req.method==="GET"){
        //console.log(url.parse(req.url,true).query);
    }else if(req.method==="POST"){
        //post方式获取数据
        res.setHeader("Content-Type","application/json;charset=utf-8");
        var str = "";
        req.on("data",function(data){
            str+=data;
        });
        req.on("end",function(){
            console.log(1+str);
        });
    }


    if(pathName==="/getData2"){
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
}).listen(9090,function(){
    console.log(9090);
});
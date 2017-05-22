let http = require("http");
let fs = require("fs");
let url = require("url");
let mime = require("mime");
http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    //console.log(pathName,urlObj.query);//get方式接收数据
    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var result = fs.readFileSync("./9.ajax_get_post.html");
        res.end(result);
        return;
    }

    if(pathName==="/getData"){
        //console.log(pathName);
        var str = "";
        req.on("data",function(data){
            str+=data;
        });
        req.on("end",function(){
           console.log(JSON.parse(str));
        });
        res.setHeader("Content-Type","application/json;charset=utf-8");
        var reslut = fs.readFileSync("./data1.json");
        res.end(reslut);
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


}).listen(9000,function(){
    console.log("监听9000端口");
});
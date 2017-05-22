let http = require("http");
let fs = require("fs");

http.createServer(function(req,res){

    //处理其他资源
    //console.log(req.url);
   //console.log(str);
    if(req.url==="/index.css"){
        res.setHeader("Content-Type","text/css;charset=utf-8");
        var result2 = fs.readFileSync("./index.css");
        res.end(result2);
    }
    if(req.url==="/index.js"){
        res.setHeader("Content-Type","application/javascript;charset=utf-8");
        var result3 = fs.readFileSync("./index.js");
        res.end(result3);
    }
    if(req.url==="/"||req.url==="/index.html"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var result = fs.readFileSync("./index.html");
        res.end(result);

    }

}).listen(7070);
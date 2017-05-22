let http = require("http");
let fs = require("fs");
let mime = require("mime");

http.createServer(function(req,res){
    if(req.url==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var resIndex = fs.readFileSync("./index.html");
        res.end(resIndex);
    }
    if(req.url==="/index.css"){
        res.setHeader("Content-Type","text/css;charset=utf-8");
        var resCss = fs.readFileSync("./index.css");
        res.end(resCss);
    }
    if(req.url==="/index.js"){
        res.setHeader("Content-Type","application/javascript;charset=utf-8");
        var resJs = fs.readFileSync("./index.js");
        res.end(resJs);
    }

}).listen(8070,function(){
    console.log("监听8070端口");
});
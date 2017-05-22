let http = require("http");
let fs = require("fs");

http.createServer(function(req,res){
    if(req.url==="/"){
        //设置返回回来的页面的字符编码格式，mime文件类型
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var resHtml = fs.readFileSync("./index.html");
        res.end(resHtml);
    }
}).listen(8000,function(){
    console.log("监听8000端口");
});
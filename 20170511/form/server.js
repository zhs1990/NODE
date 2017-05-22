let http = require("http");
let fs = require("fs");
let url = require("url");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    var Query = urlObj.query;
    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var result = fs.readFileSync("./10.form.html");
        res.end(result);
    }
    if(pathName==="/submitData"){
        console.log(req.method);   //获取提交方式
        if(req.method==="GET"){
           res.end(JSON.stringify(Query));
           console.log(JSON.stringify(Query));
        }else if(req.method==="POST") {
           let str = "";
           req.on("data", function (data) {
               str += data;
           });
           req.on("end", function () {
               res.end(str);
           });
       }
    }
}).listen(7000,function(){
    console.log("监听7000端口");
});
//node提供内置模块 可以提供http服务
//服务端的路径没有../ ，常见的路径是 / 与 ./
// / 代表根路径 ,默认访问localhost:3000   相当于 /
// ./
let http = require("http");
let fs = require("fs");
let mime = require("mime");
let url = require("url");
console.log(url.parse("https://username:password@www.baidu.com:443/s?a=1&b=20#a20",true));
//true可以默认将query转成对象格式
//slashes 代表是否有斜线
http.createServer(function(req,res){
    //请求不同的路径，返回不同的内容  - 路由
    //mime可以根据后缀推算出对应的content-type类型
    //let pathname = req.url;//带有查询参数的，需要的是路径
    let {pathname:pathName,query} = url.parse(req.url,true);
    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        fs.createReadStream("./index.html").pipe(res);
    }else{
        fs.exists("."+pathName,function(flag){
            if(flag){
                res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
                fs.createReadStream("."+pathName).pipe(res);
            }else{
                res.statusCode = 404;
                res.end("NOT FOUND 404");
            }
        });
    }
}).listen(4000,function(){
    console.log("server start 4000");
});
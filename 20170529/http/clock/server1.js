let http = require("http");
let fs = require("fs");
let mime = require("mime");
let url = require("url");

http.createServer(function(req,res){
    let {pathname:pathName,query} = url.parse(req.url,true);
    console.log(pathName);
    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        fs.createReadStream("./zhs.html").pipe(res);
    }else if(pathName==="/clock"){
        let time = new Date().toLocaleString();
        res.end(JSON.stringify({time,error:1}));
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
}).listen(7000,function(){
    console.log("server start 7000");
});
let http = require("http");
let fs = require("fs");
let mime = require("mime");
let url = require("url");
let list = [
    {username:"张红爽",age:30,id:1}
];

http.createServer(function(req,res){
    let {pathname,query} = url.parse(req.url,true);

    if(pathname==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        fs.createReadStream("./index.html").pipe(res);
    }else if(pathname==="/user"){
        if(req.method==="GET"){
            if(!query.id){
                res.setHeader("Content-Type","application/json;charset=utf-8");
                res.end(JSON.stringify(list));
            }
        }
    }else{
        fs.exists("."+pathname,function(flag){
            if(flag){
                res.setHeader("Content-Type",mime.lookup(pathname)+";charset=utf-8");
                fs.createReadStream("."+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end("NOT FOUND 404");
            }
        });
    }
}).listen(8080,function () {
    console.log("监听8080端口");
});
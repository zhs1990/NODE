let http = require("http");
let url = require("url");
let fs = require("fs");

http.createServer(function(req,res){
    let {pathname,query} = url.parse(req.url,true);

    if(pathname==="/"){  // 代表 /api
        res.setHeader("Content-Type","application/json;charset=utf-8");
        fs.createReadStream("./data.json").pipe(res);
    }
    if(pathname==="/hello"){  //代表 /api/hello
        res.end("hello world");
    }
}).listen(9090,function(){
    console.log("监听9090端口");
});
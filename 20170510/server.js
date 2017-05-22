let http = require("http");
let fs = require("fs");
const MIME = {
    ".js":"application/javascript",
    ".css":"text/css",
    ".html":"text/html",
    ".jpg":"image/jpg"
};

http.createServer(function(req,res){
    if(fs.existsSync("."+req.url)){


        if(req.url==="/"||req.url==="/index.html"){
            res.setHeader("Content-Type","text/html;charset=utf-8");
            var result = fs.readFileSync("./index.html");
            res.end(result);
            return;
        }
        //查找页面不存在时

        //其他静态资源请求处理
        var result2 = fs.readFileSync("."+req.url);
        var str = /(\.[a-zA-Z]+$)/.exec(req.url)[0];
        res.setHeader("Content-Type",MIME[str]+";charset=utf-8");
        res.end(result2);
    }else{
        res.end("NOT FOUND 页面找不到了");
        res.statusCode = 404;
    }
}).listen(6060);
//根据路径同步判断文件是否存在  ，返回布尔类型
//fs.exists("./1.html")//查找一个文件是否存在
//异步判断
//fs.existsSync("./1.html");


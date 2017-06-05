let http = require("http");
let url = require("url");
let querystring = require("querystring");
http.createServer(function(req,res){
    let objUrl = url.parse(req.url,true);
    let {pathname} = objUrl;

    if(pathname==="/visit"){
        //取出cookie
        let cookie = req.headers.cookie;
        //name=zhs; age=10; visit=1
        //转换格式
        let cookieObj = querystring.parse(cookie,"; ");//{name:zhs,age:10,visit:1}
        let visit = cookieObj.visit;
        if(visit){
            visit++;
        }else{
            visit = 1;
        }
        res.setHeader("Set-Cookie",`visit=${visit}`);
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end(`欢迎光临第${visit}次`);
    }
}).listen(9090);
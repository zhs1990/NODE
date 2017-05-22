let http = require("http");
let fs = require("fs");
let url = require("url");
let mime = require("mime");

http.createServer(function(req,res){
    //根据url模块下面的parse方法来解析url（考虑到地址后面会有查询参数和hash值）
    let urlObj = url.parse(req.url,true);
    //只取url对象下的pathName
    let pathName = urlObj.pathname;
    //处理请求路径为/自动跳转到首页
    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var result = fs.readFileSync("./getTime.html");
        res.end(result);
        return;
    }

    if(pathName==="/getTime"){
        res.setHeader("Access-Control-Allow-Origin","*");
        //以上方式可以解决跨域访问接口，但需要后台配合，可以在server中设置可以访问的域名
        let times = new Date().toLocaleString();
        res.end(JSON.stringify({timer:times}));//不可以传输对象或者数字，只能是字符串或者buffer
        //通过JSON.stringify();将对象转换为字符串
        return;
    }
    //处理其他静态资源
    let a = fs.existsSync("."+pathName);
    if(a){
        //mime下的lookup方法是根据文件名称+后缀名查找文件类型
        res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
        var result2 = fs.readFileSync("."+pathName);
        res.end(result2);
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        //某些文件加载不出来的时候，修改一下状态码
        res.statusCode = 404;
        //如果请求的页面不存在的话，给予提示性信息
        res.end("NOT FOUND 找不到内容");
    }
}).listen(5000,function(){
    console.log("监听5000端口");
});
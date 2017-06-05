let express = require("express");
let path = require("path");
let fs = require("fs");
let app = express();

//自定义static   (express.static的原理分析)
//root是静态文件根目录
function static(root){
    return function(req,res,next){
        let realPath = path.join(root,req.path);
        fs.exists(realPath,function(flag){
            if(flag){
                res.sendFile(realPath);//如果找到文件，就将文件读取出来发送给客户端
            }else{
                next();//如果找不到文件的话，就继续向下走，让下面的程序处理
            }
        });
    }
}

//静态文件中间件 -- 用来响应对客户端的静态文件请求  ---css.,js,image
app.use(static(path.resolve("public")));
console.log(path.resolve("public"));
//app.use(express.static(path.resolve("public")));
app.get("/",function(req,res){
    //路径(必须是绝对路径)
    //将index.html文件读取出来发送给客户端
    //res.sendFile("./index.html",{root:__dirname});
    res.sendFile(path.resolve("./index.html"))
});
app.listen(8080);
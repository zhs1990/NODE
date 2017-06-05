let express = require("express");
let path = require("path");
let app = express();
//模板
//第一步设置模板引擎，此项必须设置，不设置不能用
//app.set("view engine","ejs");
app.set("view engine","html");//参数2的名称必须与engine()方法的参数1一致
//模板存放的根路径(存放目录名称会默认找views，但是可以手动指定)
app.set("views",path.resolve("tmpl"));
//手动指定模板后缀名
app.engine("html",require("ejs").__express);
app.use(function(req,res,next){
    //res.locals才是真正渲染模板的数据对象
    res.locals.website = "珠峰培训";
    next();
});
app.get("/list",function(req,res){
    //渲染模板=模板+数据对象
    //render负责把模板文件和数据对象进行混合并响应输出
    //res.render(模板的相对路径,数据对象);
    //在真正渲染之前，会把新的内容拷贝到res.locals创建的对象上去
    //公有的数据放在中间件，私有的数据放在路由中
    res.render("list",{
        title:"list哈哈哈"
    });
});
app.get("/",function(req,res){
    res.render("home",{
        title:"home啦啦啦"
    });
});
app.listen(8080);
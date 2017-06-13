let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
//会话中间件 把会话的数据保存在数据库中
let session =require("express-session");
//flash 消息提示模块  一次性的
let flash = require("connect-flash");
let MongoStore = require("connect-mongo")(session);
let config = require("./config");
let app = express();
//设置模板引擎
app.set("view engine","html");
//设置模板的存放目录
app.set("views",path.resolve("views"));
//如果模板的后缀是html的话，使用ejs模板引擎的方法进行渲染
app.engine("html",require("ejs").__express);

//使用会话中间件  req.session
app.use(session({
    secret:"zfpx", //秘钥
    resave:true, //每次都重新保存
    saveUninitialized:true, //保存未初始化的session
    //session数据默认会存在服务端的内存里
    store:new MongoStore({
        url:config.dbURL
    })
}));
//flash必须放在session中间件和赋值中间件中间，使用此中间件之后
app.use(flash());
app.use(function(req,res,next){
    //给res.locals赋值，意味着所有的模板都能用
    res.locals.success = req.flash("success").toString();
    res.locals.error = req.flash("error").toString();
    res.locals.user = req.session.user;
    res.locals.keyword = "";
    next();
});
//静态文件中间件的参数是静态文件根目录(指定静态文件的根目录)(静态文件中间件可以有多个)
app.use(express.static(path.resolve("node_modules")));
app.use(express.static(path.resolve("public")));
app.use(bodyParser.urlencoded({extended:true}));
let index = require("./routes/index");//返回路由中间件
let user = require("./routes/user");
let article = require("./routes/article");
let category = require("./routes/category");
//如果客户端请求的路径是以/开头的话，才会交由index路由中间件来处理
app.use("/",index);
//如果客户端请求的路径是以/user开头的话，才会交由user路由中间件来处理
app.use("/user",user);
app.use("/article",article);
app.use("/category",category);
app.use(function(req,res,next){
    res.render("404",{title:"你的页面走丢了"});
});
app.listen(8080,function () {
    console.log("监听8080");
});
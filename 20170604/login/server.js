let express = require("express");
let bodyParser = require("body-parser");
let cookieParser = require("cookie-parser");
let app = express();
app.set("view engine","html");
app.engine("html",require("ejs").__express);
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
//输入的登录名和密码都是admin说明登录成功
app.get("/user/signin",function(req,res){
    res.render("signin",{title:"登录"});
});
app.post("/user/signin",function(req,res){
    let user = req.body;
    if(user.username === "admin"&& user.password === "admin"){
        //如果登录成功，向客户端写入cookie
        res.cookie("username",user.username);
        res.redirect("/welcome");
    }else{
        res.redirect("back"); //返回上一个页面
    }
});
app.get("/welcome",function(req,res){
    res.send(`欢迎${req.cookies.username}登录`);
});
app.listen(8080);
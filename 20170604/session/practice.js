/*
*  1,get请求/signup 返回注册界面
*  2，post请求/signup 接收数据，跳转到/signin
*  3,get请求 /signin 返回登录界面
*  4，post请求/signin 接受数据，判断  正确跳转到/welcome 不正确跳转到/signin
*  5,get请求/welcome,返回欢迎某某用户登录（采用session方式）
* */
let express = require("express");
let bodyParser = require("body-parser");
let session = require("express-session");
let MongoStore = require("connect-mongo")(session);
let app = express();
let users = [];
app.set("view engine","html");
app.engine("html",require("ejs").__express);
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    secret:"zhs",
    resave:true,
    saveUninitialized:true,
    store:new MongoStore({
        url:"mongodb://127.0.0.1/201702node"
    })
}));
app.get("/signup",function(req,res){
   res.render("signup",{title:"注册"});
});
app.post("/signup",function (req,res) {
    users.push(req.body);
    res.redirect("/signin");
});
app.get("/signin",function (req,res) {
    res.render("signup",{title:"登录"});
});
app.post("/signin",function(req,res){
    let newUser =users.find(function(item){
        return item.username==req.body.username && item.password == req.body.password;
    });
    if(newUser) {
        req.session.username = req.body.username;
        res.redirect("/welcome");
    }else{
        res.redirect("/signin");
    }
});
app.get("/welcome",function(req,res){
    res.send(`欢迎${req.session.username}登录主页`);
});

app.listen(8080);

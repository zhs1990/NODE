let express = require("express");
let path = require("path");
let bodyParser = require("body-parser");
let app = express();
let users = [];
//设置模板引擎
app.set("view engine","html");
//设置模板存放根目录
app.set("views",path.resolve("views"));
//设置渲染模板
app.engine("html",require("ejs").__express);
//中间件
//application/x-www-form-urlencoded  这种格式采用下面的方法
//username=1&password=123 = > {username:1,password:123}
app.use(bodyParser.urlencoded({extended:true}));  //将得到的数据处理后放入req.body
//application/json  这种格式采用下面的方法
app.use(bodyParser.json());
//当客户端以get方式访问/user/signup，需要返回一个空白表单让用户填写
app.get("/user/signup",function(req,res){
    res.render("signup",{title:"注册"});
});
app.post("/user/signup",function(req,res){
    //得到请求体对象,依赖于body-parser模块
    let user = req.body;
    users.push(user);
    //重定向 告诉客户端向新的路径发请求
    res.redirect("/user/signin");
});
app.get("/user/signin",function(req,res){
    res.render("signup",{title:"登录"});
});
//res.end()只能执行一次，
//res.send res.render res.redirect 里面都包含了res.end,所以不要使用for循环
app.post("/user/signin",function(req,res){
    let user = req.body;
    let oldUser = users.find(function(item){
        return user.username == item.username && user.password == item.password;
    });
    if(oldUser){
        res.redirect("/welcome");
    }else{
        res.redirect("/user/signin");
    }
});
app.get("/welcome",function(req,res){
    res.send("登录成功，欢迎来到首页");
});
app.listen(8080);
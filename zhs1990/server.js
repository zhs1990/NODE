let express = require("express");
let path = require("path");
let app = express();

//定义模板
app.set("view engine","html");
app.set("views",path.resolve("views"));
app.engine("html",require("ejs").__express);
//导入路由
let user = require("./routes/user");

//指定静态文件中间件
app.use(express.static(path.resolve("node_modules")));
app.use(express.static(path.resolve("public")));

app.use("/user",user);
app.listen(8080,function () {
    console.log("监听8080");
});
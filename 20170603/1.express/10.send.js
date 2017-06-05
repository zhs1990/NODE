let express = require("express");
let app = express();
let users = [];

// /signup?username=zhs
app.get("/signup",function(req,res){
    let username = req.query.username;
    users.push(username);
    //res.end(JSON.stringify(users)); //只能接受字符串或者buffer
    //res.send(users); //可以接受任何类型  对象  字符 buffer  数字
    //res.send("张红爽");
    res.send(404+"");
});
app.listen(9000);
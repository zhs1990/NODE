//接口信息
/*
* getUserData  获取数据
* addUserData   添加数据
* deleteData    删除数据
* */
let http = require("http");
let fs = require("fs");
let url = require("url");
let mime = require("mime");
let qs = require("querystring");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;

    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var resHtml = fs.readFileSync("./index.html");
        res.end(resHtml);
        return;
    }
    //获取数据接口
    if(pathName==="/getUserData"){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        var resGetJson = fs.readFileSync("./data.json");
        res.end(resGetJson);
        return;
    }
    //添加数据接口
    if(pathName==="/addUserData"){
        var str = "";
        req.on("data",function(data){
            str+=data;
        });
        req.on("end",function(){
            var userObj = qs.parse(str);
            var resData = fs.readFileSync("./data.json","utf-8");
            var userList = JSON.parse(resData);
            var sId = userList.data.length-1;
            userObj.id = userList.data[sId].id+1;
            userList.data.push(userObj);
            var newJson = fs.writeFileSync("./data.json",JSON.stringify(userList));
            var newTips = {"error":"0","msg":""};
            if(!newJson){
                newTips.msg = "添加用户成功";
                res.end(JSON.stringify(newTips));
            }else{
                newTips.error = 1;
                newTips.msg = "添加用户失败";
                res.end(JSON.stringify(newTips));
            }
        });
        return;
    }
    var flag = fs.existsSync("."+pathName);
    if(flag){
        res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
        var resOth = fs.readFileSync("."+pathName);
        res.end(resOth);
    }else{
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.statusCode = 404;
        res.end("404 NOT FOUND");
    }
}).listen(7070,function(){
    console.log("监听7070端口");
});
let http = require("http");
let url = require("url");
let fs = require("fs");
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

    if(pathName==="/addUserData"){
        var str = "";
        req.on("data",function(data){
            str+=data;
        });
        req.on("end",function(){
            var newList = qs.parse(str);
            var oldList = fs.readFileSync("./data.json","utf-8");
            var dJson = JSON.parse(oldList);
            var sId = dJson.data.length-1;
            newList.id = dJson.data[sId].id+1;
            dJson.data.push(newList);
            var addList = fs.writeFileSync("./data.json",JSON.stringify(dJson));
            var resMsg = {
                error:0,
                msg:""
            };
            if(!addList){
                resMsg.msg="添加成功";
                res.end(JSON.stringify(resMsg));
            }else{
                resMsg.msg="添加失败";
                resMsg.error = 1;
                res.end(JSON.stringify(resMsg));
            }
        });
        return;
    }

    if(pathName==="/getUserData"){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        var resJson = fs.readFileSync("./data.json");
        res.end(resJson);
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

}).listen(8080,function(){
    console.log("监听8080端口");
});
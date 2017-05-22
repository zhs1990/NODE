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
    if(pathName==="/getUserData"){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        var resGetData = fs.readFileSync("./data.json");
        res.end(resGetData);
        return;
    }
    if(pathName==="/addData"){
        var str = "";
        req.on("data",function(data){
            str+=data;
        });
        req.on("end",function(){
           var newList = qs.parse(str);
           var dataJson = fs.readFileSync("./data.json","utf-8");
           var oDataJson = JSON.parse(dataJson);
           var sId = oDataJson.data.length-1;
           newList.id = oDataJson.data[sId].id+1;
           oDataJson.data.push(newList);
            var newData = fs.writeFileSync("./data.json",JSON.stringify(oDataJson));
            var objMsg = {
                error:0,
                msg:""
            };
            if(!newData){
                objMsg.msg = "添加成功";
                res.end(JSON.stringify(objMsg));
            }else{
                objMsg.msg = "添加失败";
                objMsg.error = 1;
                res.end(JSON.stringify(objMsg));
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
}).listen(8080,function(){
    console.log("监听8080端口");
});
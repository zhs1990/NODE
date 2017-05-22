// /getAllUser   获取所有数据
// /getUserInfor 获取单个用户信息
// /addUserData  添加信息
// 返回信息 {error:0,msg:"添加成功/添加失败"}
// /deleteUserData 删除信息
// /updateUserData

let http = require("http");
let fs = require("fs");
let mime = require("mime");
let url = require("url");
let qs = require("querystring");
let resRequest = {error:0,msg:""};

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;

    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var resHtml = fs.readFileSync("./index.html");
        res.end(resHtml);
        return;
    }
    var resJson = fs.readFileSync("./data.json","utf-8");
    var objJson = JSON.parse(resJson);
    //获取所有数据
    if(pathName==="/getAllUser"){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        res.end(resJson);
        return;
    }
    //删除数据
    if(pathName==="/deleteUserData"){
        var oUid = urlObj.query.id;
        var oData = objJson.data;
        for(var i=0;i<objJson.data.length;i++){
            if(objJson.data[i].id===Number(oUid)){
                objJson.data.splice(i,1);
                break;
            }
        }
        fs.writeFileSync("./data.json",JSON.stringify(objJson));
        res.setHeader("Content-Type","text/html;charset=utf-8");
        resRequest.msg = "用户删除成功";
        res.end(JSON.stringify(resRequest));
        return;
    }
    //增加数据
    //修改数据

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
}).listen(5050,function(){
    console.log("监听5050端口");
});
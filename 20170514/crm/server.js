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
    var resJson = JSON.parse(fs.readFileSync("./data.json","utf-8"));
    var reqResult = {error:0,msg:""};
    if(pathName==="/getAllUser"){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        res.end(JSON.stringify(resJson));
        return;
    }

    if(pathName==="/addUserData"){
        var str = "";
        req.on("data",function(data){
           str+=data;
        });
        req.on("end",function(){
            var newData = qs.parse(str);
            var oOldData = resJson;
            var sId = oOldData.data.length - 1;
            newData.id = oOldData.data[sId].id+1;
            oOldData.data.push(newData);
            var addJson = fs.writeFileSync("./data.json",JSON.stringify(oOldData));
            var resMsg = { error:0,msg:""};

            if(!addJson){
                resMsg.msg = "添加用户成功";
                res.end(JSON.stringify(resMsg));
            }else{
                resMsg.msg = "添加用户失败";
                resMsg.id = 1;
                res.end(JSON.stringify(resMsg));
            }
        });
        return;
    }
    if(pathName==="/deleteUserData"){
        var getId = urlObj.query;
        var oResJson = resJson;
        var aData = oResJson.data;
        for(var i=0;i<aData.length;i++){
            if(aData[i].id==getId.rid){
                aData.splice(i,1);
                break;
            }
        }
        fs.writeFileSync("./data.json",JSON.stringify(oResJson));
        reqResult.msg = "用户删除成功";
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end(JSON.stringify(reqResult));
        return;
    }

    if(pathName==="/getUserInfor"){
        var uId = urlObj.query;
        var dataJson = resJson.data;
        for(var i=0;i<dataJson.length;i++){
           if(dataJson[i].id===Number(uId.id)){
               reqResult.data = {
                   name :dataJson[i].name,
                   age : dataJson[i].age,
                   id : dataJson[i].id
               };
               break;
           }
        }

        reqResult.msg = "用户信息修改成功";
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end(JSON.stringify(reqResult));
        return;
    }

    if(pathName==="/updateUserData"){
        var str = "";
        req.on("data",function(data){
            str+=data;
        });
        req.on("end",function(){
            var editData = qs.parse(str);
            for(var i=0;i<resJson.data.length;i++){
                if(resJson.data[i].id===Number(editData.id)){
                    console.log(111);
                    resJson.data[i].name = editData.name;
                    resJson.data[i].age = editData.age;
                    break;
                }
            }
            console.log(resJson);
            fs.writeFileSync("./data.json",JSON.stringify(resJson));
            //console.log(editData);
            res.setHeader("Content-Type","text/html;charset=utf-8");
            reqResult.msg = "修改成功";
            res.end(JSON.stringify(reqResult));

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
}).listen(8000,function(){
    console.log("监听8000端口");
});
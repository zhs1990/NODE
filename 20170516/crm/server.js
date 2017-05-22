// /getAllUser   获取所有数据
// /getUserInfor 获取单个用户信息
// /addUserData  添加信息
// 返回信息 {error:0,msg:"添加成功/添加失败"}
// /deleteUserData 删除信息
// /updateUserData

let http = require("http");
let fs = require("fs");
let url = require("url");
let mime = require("mime");
let qs = require("querystring");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    var resJson = fs.readFileSync("./data.json","utf-8");
    var resQuest = {error:0,msg:""};
    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        var resHtml = fs.readFileSync("./index.html");
        res.end(resHtml);
        return;
    }

    if(pathName==="/getAllUser"){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        res.end(resJson);
        return;
    }

    if(pathName==="/deleteUserData"){
        var str = "";
        req.on("data",function(data){
            str+=data;
        });
        req.on("end",function(){
            var oUid = qs.parse(str).id;
            var dataList = JSON.parse(resJson);

            for(var i=0;i<dataList.data.length;i++){
                if(dataList.data[i].id===Number(oUid)){
                    dataList.data.splice(i,1);
                }
            }
            fs.writeFileSync("./data.json",JSON.stringify(dataList));
            res.setHeader("Content-Type","application/json;charset=utf-8");
            resQuest.msg = "删除成功";
            res.end(JSON.stringify(resQuest));

        });
        return;
    }

    if(pathName==="/addUserData"){
        var str = "";
        req.on("data",function(data){
            str+=data;
        });
        req.on("end",function(){
            var oNewData = qs.parse(str);
            var dataList = JSON.parse(resJson);
            var sId = dataList.data.length-1;
            oNewData.id = dataList.data[sId].id+1;
            dataList.data.push(oNewData);

            fs.writeFileSync("./data.json",JSON.stringify(dataList));
            res.setHeader("Content-Type","application/json;charset=utf-8");
            resQuest.msg = "用户信息添加成功";
            res.end(JSON.stringify(resQuest));
        });
        return;
    }

    if(pathName==="/getUserInfor"){
        var Query = urlObj.query.uid;
        var dataList = JSON.parse(resJson);
        var obj = {};
        for(var i=0;i<dataList.data.length;i++){
            if(dataList.data[i].id===Number(Query)){
                obj.name = dataList.data[i].name;
                obj.age = dataList.data[i].age;
                break;
            }
        }
        resQuest.data = obj;
        res.setHeader("Content-Type","application/json;charset=utf-8");
        resQuest.msg = "";
        res.end(JSON.stringify(resQuest));
        return;
    }

    if(pathName==="/updateUserData"){
        var str = "";
        req.on("data",function(data){
            str+=data;
        });
        req.on("end",function(){
            var oNewJ = qs.parse(str);
            var dataList = JSON.parse(resJson);
            for(var i=0;i<dataList.data.length;i++){
                if(dataList.data[i].id === Number(oNewJ.id)){
                    dataList.data[i].name = oNewJ.name;
                    dataList.data[i].age = oNewJ.age;
                    break;
                }
            }
            console.log(dataList);
            fs.writeFileSync("./data.json",JSON.stringify(dataList))
            res.setHeader("Content-Type","application/json;charset=utf-8");
            resQuest.msg = "用户信息修改成功";
            res.end(JSON.stringify(resQuest));
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
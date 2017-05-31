let http = require("http");
let fs = require("fs");
let mime = require("mime");
let url = require("url");
//users数组  存放用户信息  存放在内存中
let users = [
    {username:"张红爽",password:"admin",id:"1"}
];

http.createServer(function(req,res){
    let {pathname:pathName,query} = url.parse(req.url,true);
    if(pathName==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        fs.createReadStream("./index.html").pipe(res);
    }else if(pathName==="/user"){
        //对用户的修改，删除，增加，查询
        //req.method   请求的方法  方法名必须是大写的
        let method = req.method;
        let id = query.id;
        if(method==="GET"){
            if(!id){ //没有id表示查询全部
                res.setHeader("Content-Type","application/json;charset=utf-8");
                res.end(JSON.stringify(users));
            }else{//有id表示查询一个

            }
        }else if(method==="POST"){//增加用户
            let str = "";
            req.on("data",function(data){
                str+=data;
            });
            req.on("end",function(){
                let user = JSON.parse(str);
                user.id = users.length?Number(users[users.length-1].id)+1:1;
                users.push(user);
                res.setHeader("Content-Type","application/json;charset=utf-8");
                res.end(JSON.stringify(users));
            });
        }else if(method==="PUT"){
            let userId = query.id;
            let str = "";
            req.on("data",function(data){
               str+=data;
            });
            req.on("end",function(){
                let oU = JSON.parse(str);
                users = users.map(function(item){
                    if(item.id == query.id){
                        return oU;//修改，就返回修改后的新对象
                    }
                    return item;//不修改的正常返回
                });
                res.setHeader("Content-Type","application/json;charset=utf-8");
                res.end(JSON.stringify(users));
            });
            console.log(userId);
        }else if(method==="DELETE"){//删除数据
            users = users.filter(function(item){
                return item.id != query.uid;
            });
            res.setHeader("Content-Type","application/json;charset=utf-8");
            res.end(JSON.stringify(users));
        }
    }else{
        fs.exists("."+pathName,function(flag){
            if(flag){
                res.setHeader("Content-Type",mime.lookup(pathName)+";charset=utf-8");
                fs.createReadStream("."+pathName).pipe(res);
            }else{
                res.statusCode = 404;
                res.end("NOT FOUND 404");
            }
        });
    }
}).listen(7000,function(){
    console.log("server start 7000");
});
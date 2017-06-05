let http = require("http");
let url = require("url");
let fs = require("fs");
let mime = require("mime");
let list = [
    {id:1,username:"张红爽",age:28,sex:"女"},
    {id:2,username:"佟璐",age:28,sex:"男"}
];

http.createServer(function(req,res){
    let {pathname,query} = url.parse(req.url,true);

    if(pathname==='/'){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        fs.createReadStream("./index.html").pipe(res);
    }else if(pathname==="/user"){
        if(req.method==="GET"){
            res.setHeader("Content-Type","application/json;charset=utf-8");
            res.end(JSON.stringify(list));
        }else if(req.method==="POST"){
            let str = "";
            req.on("data",function(data){
                str+=data;
            });
            req.on("end",function(){
                let newList = JSON.parse(str);
                newList.id = list[list.length-1].id+1;
                list.push(newList);
                res.setHeader("Content-Type","application/json;charset=utf-8");
                res.end(JSON.stringify(list));
            });
        }else if(req.method==="PUT"){
            let str = "";
            req.on("data",function(data){
                str+=data;
            });
            req.on("end",function(){
                let newList = JSON.parse(str);
                console.log(newList);
                list = list.map(function(item){
                    if(item.id==query.id){
                        return newList;
                    }
                    return item;
                });
                res.setHeader("Content-Type","application/json;charset=utf-8");
                res.end(JSON.stringify(list));
            });
        }else if(req.method==="DELETE"){
            list = list.filter(function(item){
                return item.id!=query.id;
            });
            res.setHeader("Content-Type","application/json;charset=utf-8");
            res.end(JSON.stringify(list));
        }
    }else{
        fs.exists("."+pathname,function(flag){
            if(flag){
                res.setHeader("Content-Type",mime.lookup(pathname)+";charset=utf-8");
                fs.createReadStream("."+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end("404 NOT FOUND");
            }
        });
    }
}).listen(8000,function(){
    console.log("监听8000端口");
});
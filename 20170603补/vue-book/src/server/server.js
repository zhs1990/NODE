let express = require("express");
let app = express();
let fs = require("fs");

//封装读取方法
let readBooks = function(callback){
    fs.readFile("./book.json","utf-8",function(err,data){
        if(err||data.length===0) data = "[]";
        callback(JSON.parse(data));
    });
};

app.get("/book",function(req,res){
    let id = Number(req.query.id);
    if(id){
        readBooks(function(books){
            let book = books.find(function(item){
                return item.id == id;
            });
            res.send(book);
        });
    }else{
        readBooks(function(books){
            res.send(books);
        });
    }
});

app.listen(7000,function(){
    console.log("监听7000端口");
});
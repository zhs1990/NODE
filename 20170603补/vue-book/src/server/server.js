let express = require("express");
let bodyParser = require("body-parser");
let app = express();
let fs = require("fs");
app.use(bodyParser.json());

//封装读取方法
let readBooks = function(callback){
    fs.readFile("./book.json","utf-8",function(err,data){
        if(err||data.length===0) data = "[]";
        callback(JSON.parse(data));
    });
};
let writeBooks = function(data,callback){
    fs.writeFile("./book.json",JSON.stringify(data),callback);
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
app.put("/book",function(req,res){
    readBooks(function(data){
        data = data.map(function (item) {
            if(item.id === req.body.id){
                return req.body;
            }
            return item;
        });
        writeBooks(data,function(err){
            res.send(req.body);
        });
    });
});

app.delete("/book",function (req,res) {
    readBooks(function (data) {
       data = data.filter(function (item) {
           return item.id != req.query.id;
       });
       writeBooks(data,function (err) {
           res.send(data);
       });
    });
});

app.post("/book",function (req,res) {
   console.log(req.body);
   let newList = req.body;
   readBooks(function (data) {
       newList.id = data[data.length-1].id+1;
       data.push(newList);
       writeBooks(data,function (err) {
          res.send(data);
       });
   });
});

app.listen(6000,function(){
    console.log("监听6000端口");
});
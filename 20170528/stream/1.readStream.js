//可读流
//1,创建可读流
let fs = require("fs");
//读取的文件必须要存在

/*
* 可读流特点
* 1，每次可读大小：highWaterMark = 64*1024   最大64K  ，超过64k，读两次
* 2，没有编码默认是buffer ，读永远都是buffer格式
* 3，buffer可以控制速率，是异步读取
* */
let rs = fs.createReadStream("./1.txt",{highWaterMark:1});
//console.log(rs);//可读流创建后返回的可读流对象
var arr = [];
//读取可读流中的内容，非流动模式->流动模式  监听事件
rs.on("data",function(data){//监听每次读到的内容
    rs.pause();   //暂停读取，暂停触发data事件
    //console.log(data);
    console.log("读取一次");
    arr.push(data);
});
//每隔多久触发一次data事件
setInterval(function(){
    rs.resume(); //恢复触发data事件
},1000);
//监听每次读到的内容，文件读取完成后执行end方法
rs.on("end",function(){
    var l  = Buffer.concat(arr).toString();
    console.log(l);
});
rs.on("error",function(err){
    console.log(err);
});//监听读流中的错误

/*
* on("data",fn);  监听每次读到的内容
* on("end",fn);     文件读取完毕后触发
* on("error",fn);   监听读流中的错误
* parse();  暂停读出，暂停触发data事件
* resume(); 恢复触发data事件
* */

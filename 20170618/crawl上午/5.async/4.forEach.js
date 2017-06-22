let fs  = require("fs");
let async = require("async");
let data = [
    {filename:"1.txt",content:"1"},
    {filename:"2.txt",content:"2"},
    {filename:"3.txt",content:"3"},
    {filename:"4.txt",content:"4"}
];
//老方法处理文件写入
// let count = 0;
// data.forEach(function(item){
//    fs.writeFile(item.filename,item.content,function (err) {
//        count++;
//        if(count==data.length){
//            console.log("全部写入完毕");
//        }
//    });
// });

//async.forEach()处理文件写入
//参数1是要迭代的数组
//参数2是针对每个数组元素需要执行的方法
//参数3是最终的回调
async.forEach(data,function (item,cb) {
    fs.writeFile(item.filename,item.content,cb);
},function (err) {
    console.log("全部写入完毕");
});

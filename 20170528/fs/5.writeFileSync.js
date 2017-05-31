let fs = require("fs");

/*
 fs.writeFileSync(文件,写入内容，编码格式）;  同步
 fs.writeFile("./write.txt",JSON.stringify({name:2}),function(err){
 if(err)console.log(err);
 });  异步
* 写入的特点
*
* 1，写入的内容会自动转化成utf8格式
* 2，flag:"w"  清空，写入，仅写
* 3,如果第二个参数为空，文件中会出现undefined
* 4，如果写入的是对象，要JSON.stringify
* 5，不能读取比内存大的文件
* */
fs.writeFileSync("./write.txt",JSON.stringify({name:1}));
fs.writeFile("./write.txt",JSON.stringify({name:2}),function(err){
    if(err)console.log(err);
});
//边读边写
//拷贝，
//先读一次，rs开始写，如果不能写了，rs.pause();
//当数据全部写入后，恢复读取rs.resume();监听读取完成的end事件，rs.on(end);
//调用写入的关闭事件ws.end();

let fs = require("fs");
//异步边读边写
// function copy(source,target){
//     let rs = fs.createReadStream(source,{highWaterMark:3});//最大64K
//     let ws = fs.createWriteStream(target,{highWaterMark:1});//最大16K
//
//     rs.on("data",function(data){
//         let flag = ws.write(data);
//         if(!flag){
//             rs.pause();
//         }
//         ws.on("drain",function(){
//             console.log("休息一下");
//            rs.resume();
//         });
//     });
//     rs.on("end",function(){
//         ws.end();
//     });
// }
//pipe原理
function copy(source,target){
    let rs = fs.createReadStream(source,{highWaterMark:3});//最大64K
    let ws = fs.createWriteStream(target,{highWaterMark:1});//最大16K

    rs.pipe(ws);
}
copy("./1.txt","./2.txt");
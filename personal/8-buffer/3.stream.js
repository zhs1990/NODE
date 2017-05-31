let fs = require("fs");
let rs = fs.createReadStream("./3.txt",{highWaterMark:1});
let ws = fs.createWriteStream("./4.txt",{highWaterMark:1});
// let arr = [];
// rs.on("data",function(data){
//     rs.pause();
//     console.log("读一次"+data);
//     arr.push(data);
// });
// setInterval(function(){
//     rs.resume();
// },1000);
// rs.on("end",function(){
//    //console.log(arr);
//    var newArr = Buffer.concat(arr).toString();
//    console.log(newArr);
// });

let index = 0;
function eat(){
    let flag = true;
    while(flag&&index<10){
        index++;
        flag = ws.write(index+"");
    }
}
eat();
ws.on("drain",function(){
    console.log("快干了");
    eat();
});
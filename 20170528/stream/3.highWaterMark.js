//限制写入内容大小，如果写不下了，暂停写入，当全部写入后，再继续写
//on("drain");  内存中需要写入的内容全部写完触发

//默认能写入一次，如果flag变成false,停止写入
let fs = require("fs");
let ws = fs.createWriteStream("./2.txt",{highWaterMark:1});
let index = 0;
function eat(){
    let flag = true;
    while(flag&&index<10){
        flag = ws.write(index+++"");
    }
    if(index>=0){
        ws.end();
    }
}
eat();
ws.on("drain",function(){//表示预计的内存和可用空间的内容全部消化后执行的方法
    console.log("干了");
    eat();//利用预估的空间写入内容
});
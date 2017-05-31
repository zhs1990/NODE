let fs = require("fs");
/*
* 可写流特点
* 1，如果文件不存在，则创建
* 2，写入时，默认编码格式是utf8
* 3，通过流写入文件也是异步
* 4，默认写的时候创建的空间大小是16k
* 5，write()返回值表示是否能写入，不管true还是false都能写入
* 6，end方法会调用write方法,无论是否写完，都会强制被写入，关闭掉文件   只能调用一次
*   调用多次会报错：write after end   已经结束了，不能再写入了
*   如果end();没有参数，不会报错
* */
var ws = fs.createWriteStream("./2.txt",{highWaterMark:1});
//console.log(ws);
//write end

// var flag = ws.write(1+"");
//
//console.log(flag);

for(var i=0;i<10;i++){
    let flag = ws.write(i+"");
    console.log(flag);
}

ws.end("哈哈");//end方法会调用write方法,无论是否写完，都会强制被写入，关闭掉文件
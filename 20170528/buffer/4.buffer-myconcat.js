Buffer.myConcat = function(list,totalLength){
    if(typeof totalLength === "undefined"){
        totalLength = list.reduce((prev,next) => {
            return prev+next.length;
        },0);
    }
    var buffer = new Buffer(totalLength);
    var index = 0;
    list.forEach(item=>{
        item.copy(buffer,index);
        index+=item.length;
    });
    return buffer.slice(0,index);
};
var buf1 = new Buffer("你好");
var buf2 = new Buffer("来啦");
var buf3 = new Buffer("哈哈");
console.log(Buffer.myConcat([buf1,buf2,buf3],18).toString());
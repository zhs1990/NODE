// var buffer = new Buffer(12);
// console.log(buffer.length);
//
// var buffer = new Buffer([1,2,3]);
// console.log(buffer.length);
//
// var buffer = new Buffer(15);
// var buf1 = new Buffer("你好");
// var buf2 = new Buffer("张红爽");
// buf1.copy(buffer,0);
// buf2.copy(buffer,buf1.length,0,buf2.length);
// console.log(buffer.toString());

// var buffer = new Buffer([1,2,3,4,5]);
// var newBuf = buffer.slice(0,1);;
// newBuf[0] = 100;
//
// console.log(buffer);

var buf1 = new Buffer("你好");
var buf2 = new Buffer("佟璐");
// console.log(Buffer.concat([buf1,buf2],12).toString());

Buffer.myconcat = function(list,totalLength){
    if(typeof totalLength === "undefined"){
        totalLength = list.reduce(function(prev,next){
            return prev+next.length;
        },0);
    }
    var buffer = new Buffer(totalLength);
    var index = 0;
    for(var i=0;i<list.length;i++){
        console.log(buffer);
        list[i].copy(buffer,index,0,list[i].length);
        index += list[i].length;
    }
    return buffer.slice(0,index);
};
console.log(Buffer.myconcat([buf1,buf2],12).toString());

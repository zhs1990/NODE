var buffer = new Buffer([10,20,30,40]);
var buffer2 = buffer.slice(0,1);
console.log(buffer2);
buffer2[0] = 100;
console.log(buffer);
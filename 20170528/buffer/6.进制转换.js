//将任意进制转换成10进制  parseInt("111",2);
//将任意进制转换成任意进制  toString();

//console.log(~~1.5); //取整  ~~
//console.log(parseInt("00111111",2));
//console.log(parseInt("ff",16));

//将16机制转换为2进制
//console.log(0xff.toString(2));

//base64 将汉字转成base64,没有加密功能
//md5 加密  1,不可逆  不能解密 2,加密的结果的长度都是一样的  3,不同的内容加密后的结果不一致

//一个汉字3个字节  24位  3*8 转成 6*4,每一个字节不能超过63这么大
var buffer = new Buffer("珠");
console.log(buffer);
console.log(0xe7.toString(2));
console.log(0x8f.toString(2));
console.log(0xa0.toString(2));

//111001 111000 111110 100000  需要转化成10进制去对应的编码中取值
console.log(parseInt("111001",2));
console.log(parseInt("111000",2));
console.log(parseInt("111110",2));
console.log(parseInt("100000",2));
//57 56 62 32

var str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
str+=str.toLowerCase();
str+="0123456789";
str+="+/";
console.log(str[57]+str[56]+str[62]+str[32]);

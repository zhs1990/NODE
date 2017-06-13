/*
* md5  哈希算法  hash
* sha1  也是哈希算法   加密强度更高
* 特点
* 1，可以将任意长度的输入转成固定长度的输出
* 2，输入不同，输出肯定也不同
* 3，相同的输入一定会产生相同的输出
* 4，不能从输出的字符串中反推输入的内容 --- 密码加密
*
* 密码的明文保存时非常危险的，因为如果数据库泄露，那么密码就全部暴露了
* */
let crypto = require("crypto");
let str = "h";
//let result = crypto.createHash("md5").update(str).update(str).digest("hex"); //16进制

//密码+盐值生成密码，强度更高
let result = crypto.createHmac("sha1","zfpx").update(str).update(str).digest("hex"); //16进制

console.log(result);
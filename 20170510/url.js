//解析url  处理特定的完整的url
//req.url  处理的是路径和？后面的查询参数
let url = require("url");
let address = "http://www.baidu.com/index.html?wd=hha&id=10";
let urlObj = url.parse(address,true);//解析url，第二个参数为true，可以将query解析成key:value形式
console.log(urlObj.pathname);
console.log(urlObj.query.id);
//let reg = /([^?&=]+)=([^?&=])/g;
//let parmaObj = {};
//console.log(reg.exec("wd=hha&id=10"));
//urlObj.query.replace(reg,function(){
    //console.log(arguments);
    //parmaObj[arguments[1]] = arguments[2];
//});
//console.log(parmaObj);
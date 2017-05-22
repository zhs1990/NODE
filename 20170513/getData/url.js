var url = require("url");
var urlStr = "http://localhost:5050/getData?name=abc&age=10";
var urlObj = url.parse(urlStr,true);//第二个参数默认为false，query会以&进行拼接显示数据，设置为true时，query会以对象的形式显示
console.log(urlObj);
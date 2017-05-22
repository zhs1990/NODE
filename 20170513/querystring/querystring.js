let qs = require("querystring");
let str = "name=haha&age=10";
let json = {"name":"zhs","age":"10"};

console.log(qs.parse(str,"&"));
console.log(qs.stringify(json,"#"));
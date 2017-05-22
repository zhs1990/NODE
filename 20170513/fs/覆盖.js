let fs = require("fs");
let obj = {
    name:"23",
    id:100
};
var data2 = fs.readFileSync("./data.txt");
//fs.writeFileSync("./data2.txt",data2);
fs.writeFileSync("./data2.txt",JSON.stringify(obj));


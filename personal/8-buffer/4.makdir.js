let fs = require("fs");

function makeP(url){
    let arr = url.split("/");
    for(var i=0;i<arr.length;i++){
        let cur = arr.slice(0,i+1).join("/");
        fs.mkdirSync(cur);
    }
}
makeP("a/b/c/d");
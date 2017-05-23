let http = require("http");
let fs = require("fs");
let url = require("url");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathName = urlObj.pathname;
    if(pathName==="/getData"){
        res.setHeader("Content-Type","application/json;charset=utf-8");
        let fnName = urlObj.query.callback;
        var resJSON  = fs.readFileSync("./data.json");
        res.end(`${fnName}(${resJSON})`);
    }
}).listen(8070,function(){
    console.log("监听8070");
});
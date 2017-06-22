/*
* 长轮询
* 1,客户端向服务器发请求，服务器有新的数据就立刻返回，如果没有新的数据就卡在服务器端，等服务器有数据再返回
* */

let express = require("express");
let path = require("path");
let app = express();

app.get("/",function (req,res) {
    res.sendFile(path.resolve("./3.iframe.html"));
});
app.get("/clock",function (req,res) {
    let html = `
        <script>
            window.parent.changeTime("${new Date().toLocaleString()}");
        </script>
    `;
    res.send(html);
});
app.listen(3000);
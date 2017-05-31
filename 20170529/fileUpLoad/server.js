let http = require('http');
let fs  = require('fs');
let mime = require('mime');
let url = require('url');
let formidable = require("formidable");
let server = http.createServer(function (req,res) {
    let {pathname,query}  = url.parse(req.url,true);
    if(pathname === '/'){
        res.setHeader('Content-Type','text/html;charset=utf-8');
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname==="/upload"){
        let form = new formidable.IncomingForm();
        form.parse(req,function(err,fileds,files){
            //需要将临时文件读取到upload文件夹下
            console.log(files.file.path);
            console.log(files.file.name);
            fs.createReadStream(files.file.path).pipe(fs.createWriteStream('./upload/'+files.file.name));
        });
        form.on("end",function(){
            res.end("上传成功");
        });
    }else{
        fs.exists(pathname.slice(1),function (flag) {
            if(flag){
                res.setHeader('Content-Type',mime.lookup(pathname)+';charset=utf-8');
                fs.createReadStream('.'+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end('NOT FOUND');
            }
        })
    }
});
server.listen(3000,function(){
    console.log("3000");
});

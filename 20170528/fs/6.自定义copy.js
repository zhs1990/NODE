//copy  有同步和异步  copySync  copy
let fs = require("fs");

//异步
copy("./write.txt","./write2.txt",function(err){
    if(err)console.log(err);
    console.log("写入成功");
});
function copy(source,target,cb){
    fs.readFile(source,"utf-8",function(err,data){
        if(err)console.log(err);
        console.log(typeof data);
        fs.writeFile(target,data,cb);
    });
}
//同步
// copySync("./write.txt","./write2.txt");
// function copySync(source,target){
//     let result = fs.readFileSync(source,"utf-8");
//     console.log(typeof result);
//     fs.writeFileSync(target,result);
// }
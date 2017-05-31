let fs = require("fs");

//创建目录
//mkdir必须在父级有的情况下创建子级  同步创建
// function makeP(url){
//     let arr = url.split("/");
//     for(var i=0;i<arr.length;i++){
//         let cur = arr.slice(0,i+1).join("/");
//         if(!fs.existsSync(cur)){ //判断文件是否存在
//             fs.mkdirSync(cur);
//         }
//     }
// }
// makeP("a/b/c/d");
//同步,没有返回值,没有父级不能创建子级
//fs.mkdirSync("a/b");

//异步创建目录
//递归创建
makeP("a/b/c/d",function(){
    console.log("创建成功");
});
function makeP(url,callback){
    //1,把url拆分成数组
    //2,向有一个方法，调用方法先创建第一级，当创建完毕，再带哦用此方法依次创建
    let arr = url.split("/");
    let n = 0;
    createF(arr[n]);
    function createF(url){
        if(n>=arr.length){
            callback();
            return;
        }
        fs.exists(url,function(flag){
            if(!flag){
                fs.mkdir(url,function(){
                    createF(arr.slice(0,++n+1).join("/"));
                });
            }else{
                createF(arr.slice(0,++n+1).join("/"));
            }
        });
    }


}

function sum(a,b){
    console.log(a+b);
}
console.log(this===module.exports);

module.exports.sum = sum;

//批量导出
//当前文件私有对象
module.exports = {
    say:"hello",
    name:"zhs"
};
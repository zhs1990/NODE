function sum(a,b){
    return a+b;
}
module.exports.sum = sum;//导出自定义模块
//导出多个
// module.exports = {
//     sum:sum,
//     abc:abc
// };
//第二种导出方法   module.exports = exports;  默认导出的都是module.exports指向的空间地址
exports.name = "zhs";
exports = {
    name :"zhs"
};
//module.exports可以导出批量，但是exports无法批量导出，原因是两者指向的空间地址不同
console.log(module.exports);
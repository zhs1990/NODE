let mongoose = require("mongoose");
//如何使用mongoose操作mongodb数据库
//1,连接数据库
//连接字符串的形式  mongodb://主机名或者ip：端口号/数据库名称
mongoose.connect("mongodb://127.0.0.1:27017/201702node");
//2.定义集合的骨架模型  keys是文档的属性名  值是此属性的类型
//外键就是别人家的主键，别的集合的主键
let UserSchema = new mongoose.Schema({
    name:String,
    age:Number
},{collection:"user"});//通过collection参数强行指定集合名称
//3.定义模型  Schema不能操作数据库 模型可以操作数据库
//默认保存之后的结合名称来源于model   模型名=> 小写user =>负数users
let User = mongoose.model("User",UserSchema);


//插入文档  向数据库的集合中插入一个文档  异步的
//如果值不符合模型设置的类型，如果是纯数字会自动转化，完全不符合则宝座
//如果给的字段多于Schema定义会被抛弃掉
//如果给的定义少于schema定义则会只保存给定字段
// User.create({name:"zfpx3",age:"3"},function(err,doc){
// //User.create([{name:"zfpx1",age:"1"},{name:"zfpx2",age:"2"},{name:"zfpx3",age:"3"}],function(err,doc){
//     console.log(err);
//     //doc是保存成功之后的文档对象
//     //{ __v: 0, name: 'zfpx1', age: 1, _id: 5933bd450563a821d87a5f71 }
//     console.log(doc);
// });

//更新(指定更新范围,更新后的结果,回调函数)
//multi:true   匹配所有复合条件的(默认只匹配第一条)
// User.update({age:3},{name:"zfpx33"},{multi:true},function(err,result){
//     console.log(err);
//     //只匹配第一条，
//     //{ ok: 1, nModified: 1, n: 1 }
//     //{ ok: 1, nModified: 1, n: 2 }
//     /*
//     * ok:1   更新成功
//     * n：1   匹配的条数
//     * nModified: 1   实际更新的条数
//     * */
//     console.log(result);
// });

//删除（默认会删除所有的匹配记录）
// User.remove({age:3},function(err,result){
//     console.log(err);
//     //{ ok: 1, n: 2 }    ok：1删除成功 n：2 匹配条数
//     console.log(result);
// });



//数据库操作时1分插入 9分查询
//查询
// User.find({age:1},function(err,docs){
//     console.log(err);
//     //不管找到多少条，都会返回一个数组
//     //[ { _id: 5933c0e20bb8a1052cd96f38, name: 'zfpx1', age: 1, __v: 0 } ]
//     console.log(docs);
// });


//同时查询多个  age=1||age=2
// $or  或者
// {$gt:0,$lt:3}   大于0小于3
// 正则表达式
// $in:[1,2]  1~2区间
// 可以有多个内容

//User.find({$or:[{age:1},{age:2}]},function(err,docs){
//User.find({age:{$gt:0,$lt:3}},function(err,docs){
//User.find({name:/zfpx(1|2)/},function(err,docs){
//User.find({age:{$in:[1,2]}},function(err,docs){
User.find({name:"zfpx1",age:1},function(err,docs){
    console.log(err);
    console.log(docs);
});
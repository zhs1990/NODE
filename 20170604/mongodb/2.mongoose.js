//引入
let mongoose = require("mongoose");
//解决报错
mongoose.Promise = Promise;//Mongoose: mpromise (mongoose's default promise library) is deprecated
//连接数据库
mongoose.connect("mongodb://127.0.0.1/201702node");
let UserSchema = new mongoose.Schema({
    name:String,
    age:Number
});
let User = mongoose.model("User",UserSchema);
let users = [];
for(let i=1;i<=10;i++){
    users.push({name:`zfpx${i}`,age:i});
}
// User.create(users);
/*
* 1,根据id查询文档
*   user.findById(ID)
* */
// User.findById("5933ca36508ac627cc64de23",function(err,doc){
//     console.log(err);
//     console.log(doc);
// });

/*
* 2,登录  username password
 * name=zfpx1   age=1
 * User.findOne();  如果找到一条，就立即返回，不再继续往下找了
* */
// User.findOne({name:"zfpx1",age:1},function(err,doc){
//     console.log(err);
//     console.log(doc);
// });

/*
* 3,查询年龄大于5的
* progection 投影 指定显示的返回字段
* name:1 include    表示只要显示name，其他字段不显示
* name：0  exclude   排除 表示不显示name，其他字段都显示
* 0或者1不能同时出现，否则会报错 {name:0,age:1}
* Can't canonicalize query: BadValue Projection cannot have a mix of inclusion and exclusion.
* */
// User.find({age:{$gt:5}},{name:0,age:1},function(err,doc){
//     console.log(err);
//     console.log(doc);
// });

/*
* 4，高级查询
* */
let pageNum = 2; //查询第几页数据
let pageSize = 3;  //每页多少条数据

//sort  按年龄先排序  age:1  升序排列  age：-1  倒序排列
//skip  跳过指定的条数
//limit 限制返回的最大条数
//exec  执行查询
//顺序颠倒无所谓

// User.find({}).sort({age:-1}).skip((pageNum-1)*pageSize).limit(pageSize).exec(function(err,doc){
//     console.log(err);
//     console.log(doc);
// });
//返回的是promise对象，所以也可以使用then()代替exec();
User.find({}).sort({age:-1}).skip((pageNum-1)*pageSize).limit(pageSize).then(function(doc){
    console.log(doc);
});
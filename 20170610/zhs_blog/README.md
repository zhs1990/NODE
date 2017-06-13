## 创建项目
```
mkdir 项目名称
cd 项目名称
npm init -y
```

## 安装依赖的模块
```
npm install express ejs body-parser debug express-session connect-mongo mongoose connect-flash(成功或者失败的提示)  multer(上传文件) bootstrap -S
```

## 配置路由
```
/               首页
/user/signup    注册
/user/signin    登录
/user/signout   退出登录
/article/add    发表文章
/article/update 编辑文章
/article/detail 文章详情
/category/add   增加分类
/category/list  分类列表
```


## 实现用户注册

## 实现用户登录

## 实现上传头像功能
1. 给表单增加type="file"
2. 给form增加一个enctype="multipart/form-data"
3. 在后台增加一个处理上传文件的中间件“multer”
```
let multer = require("multer");
//在node中的文件路径是相对启动server的文件的目录
//加载模块是相对于当前文件的
let upload = multer({dest:"./public/uploads"});
```
4. 在路由中使用此中间件
```
router.post("/signup",upload.single("avatar"),function (req,res) {
```
5. 给用户添加avator属性
```
let avatar = req.file;
user.avatar =  `/uploads/${req.file.filename}`;
```
6. 给UserSchema添加一个avator属性
```
let UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    email:String,
    avatar:String
});
```
7. 添加静态文件中间件
```
app.use(express.static(path.resolve("public")));
```

## 分类列表  -- 删除

## 添加分类

## 发表文章功能

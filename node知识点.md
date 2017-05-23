## 第一周 git && node基础
20170520
======
## git使用
        1. 版本控制
            1.1 备份文件
            1.2 记录历史
            1.3 回到过去
            1.4 多端共享
            1.5 团队协作
        2. 什么是git
            分布式版本控制系统
                每个版本都是最完整的（会将各个版本进行合并存放）
                存放在github上
                git lab管理平台
                    所有的内容都存到.git下
            集中式版本控制系统
                中央服务器 ---- 存放所有代码（1.0,2.0,3.0）,每个版本之间完全不同
                集中存放代码
                    存储文件：每一个文件夹下都有.svn的文件

        3. git使用
            cmd中操作
            查看是否配置文件
                git config --list
            配置文件
                用户名
                    git config --global user.name zhs1990
                邮箱
                    git config --global user.email  529954781@qq.com
        4. git基础操作
            创建目录
                mkdir 目录名称
            进入目录
                cd 目录名称(tab自动补全)
            创建目录并进入目录
                mkdir node-zhs && cs node-zhs
            初始化git仓库(在最外层目录进行该操作)
                git init
            查看目录
                ls
                ls -al  查看全部文件(包含隐藏文件)
            清屏
                clear
            创建文件
                touch 文件名称.文件后缀名
            查看文件内容
                cat 文件名称.文件后缀名
            编辑文件内容
                vi  文件名称.文件后缀名
                    默认是不可编辑模式，
                        i键切换编辑
                        esc+:wq 保存并退出
                        :!q  强制退出
            查看git状态
                git status  每次提交前操作
                    红色表示没有在暂存区中
                    绿色表示已经在暂存区中

            加入暂存区
                git add 文件名
                git add -A  全部
                git add . 所有的文件

            加入历史区
                git commit -m

            查看历史
                git log
                git log--online   只显示在一行内
                git reflog  查看所有版本

            查看每个区的文件不同点
                工作区-暂存区
                    git diff
                暂存区-历史区
                    git diff --cached
                工作区-历史区
                    git diff master

            暂存区 - 工作区  从暂存区中覆盖掉工作区
                git checkout 文件名
            历史区 - 工作区   选择某个版本进行回滚操作
                git reset --hard 版本号    硬回滚

            删除上一次添加暂存区的内容
                git reset HEAD 文件名

            提交的文件可以一步到位
                git commit -a -m''
            sourceTree

        5.git提交
            工作区 ->
                git add 文件名
            暂存区缓存区过渡区 ->
                git commit -m
            历史区
                git log  查看
            git hub
                展示的是历史区的内容（默认展示最新的版本）


        6.webstorm最新破解版
            http:idea.iteblog.comkey.php

        webstrom操作提交步骤
        创建.gitignore必须在add之前
        忽略文件包含.idea node_modules

        7.git分支
            查看分支
                git branch
            添加分支
                git branch 分支名
            切换分支
                git checkout 分支名
            删除分支
                git branch -D 分支名
            创建分支并切换到新的分支
                git checkout -b 分支名
            合并分支
                1,fast-forword
                    主干没有任何更新
                    分支提交了新的代码
                        git merge 分支名 （前提是必须切换到主干master）
                    将主干的指针指向分支最新
                2,conflict
                    合并多个分支时，可能合并的内容会产生冲突
                    手动解决冲突，提交最新结果


            关于分支注意：
                创建的分支和master一样的，不是父子级关系
                    master是主干，必须先存在主干才能添加分支（提交后会生成主干master）
                将内容提交到某个分支上
                    默认代码会放在工作区上，不属于任何分支，只有提交到某个分支上，此文件才归属于特定的分支
                    在谁的分支上进行提交，就属于当前的分支


    提交到远程仓库
        1,建立文件
            创建有内容的文件
                        echo "# 201702node" > README.md
            README.md
            .gitignore
        2,提交到历史区
            git add
            git commit -m "信息"
        3,
            git remote -v  查看所有的远程仓库
            git remote add origin 远程仓库地址  origin 地址的别名
            git push origin master  将主干文件推送到远程仓库地址
        4,拉取最新代码
            git pull origin master  拉取获取最新代码

    本地代码和线上代码版本不一致
        1,线上比线下的版本新
        2,线上和线下两个版本都不一致

        merge conflict  发生冲突   ---- 手动解决冲突
        git pull ....  before pushing again   在推送代码之前请先拉取代码

    部署git静态网页
        将网页通过git网址访问 （只能放静态页，不能放置server）
            第一步：
                需要一个特定的分支  ----- gh-pages
                    git checkout -b gh-pages
                将代码提交到这个分支上
                    git add
                    git commit -m''
                确保建立远程和本地的连接
                    git remote add 别名 远程仓库地址
                推送到github上,将gh-pages这个分支提交上去
                    git push origin gh-pages
                在github中的setting上可以找到这个网址
    fork
        叉子，将别人的代码当前的状态，克隆一份到自己的仓库上，一个项目只能fork一次，我的代码更新不会导致你的更新
    clone   是将线上的项目拉取到本地，拉下来后就是git仓库，而且已经添加好了远程仓库地址
        git clone 远程仓库地址 文件夹名称

    操作git必须在根目录下

    作业
        代码合并请求管理提交的笔记

        组长提交信息
            git clone 自己的项目地址
            添加内容
            git add .
            git commit -m 'team xxx'
            git push origin master

            new pull request    发送合并请求
                        create pull request

        组员给提交给自己
            git clone 自己的项目地址
            添加内容
            git add .
            git commit -m 'team xxx'
            git remote add leader 组长的地址（建立一次即可）
            git pull leader master
            git push origin master

        组长再次提交给老师
            将自己的内容放进去
            git add .
            git commit -m 'team xxx'
            git remote add teacher https:github.comzhufengzhufeng2017node02_homework
            git pull teacher master
            git push origin master


        配置环境变量
            node可以在命令行下执行的原因
                将可执行文件配置到环境变量下

## 什么是node?
        node服务端运行的js的环境，服务端语言

        前端的模块化
            闭包
            单例：有且只有一份
                缺点：不能完全解决命名冲突,调用时代码过长  var obj = {};
            require.js  AMD  依赖前置    sea.js  CMD 就近依赖
            conmmonjs   规范，是node模块的实现 modules.exports

## node 特点
        异步IO  定时器 回调函数 事件 ajax
        单线程（其他语言java,php多线程）
            多线程实现：切换执行上下文，速度感觉不出来，好像在干很多件事情
        进程
            进程是包含线程的，node一个进程，只能开一个线程

## 事件环
        靠事件驱动的

## node全局对象
    前端的全局变量是window  服务端的全局变量是global
    全局对象，在当前文件夹下，可以直接使用的都是全局对象
    全局对象的组成：global上的属性+五个特殊形参
    node中没有window属性
```
console.log(this);{},不是global
setTimeout(function(){
    console.log(this);定时器中的this是定时器自己
},1000);
~function(){
    console.log(this);global
}();
var a = 100; var 不能直接将内容挂载到global
a = 100; 写代码不要丢掉var let const
const arr = []; 只要内存地址不变是可以改变内容
arr.push(a);
同一个作用域{}下，变量不能声明两次，switch除外
console.log(global.a);undefined
```
## 箭头函数
```
arrow func

 function sum(a,b){
     return a+b;
 }
如果使用了大括号，必须写return,否则可以省略大括号
 let sum = (a,b) => {
     return a+b;
 };

 function a(a){
     return function(b){
         return a+b;
     }
 }
 let a = a =>{
     return b =>{
         return a+b;
     }
 };

let sum = a => b=> a+b;
console.log(sum(1)(2));
```
# 20170521
## 全局对象属性
    console.log(global);
        process   进程
        buffer    缓冲区
        clearImmediate: [Function],      清除立即
        clearInterval: [Function],
        clearTimeout: [Function],
        setImmediate: [Function],
        setInterval: [Function],
        setTimeout: [Function],
        console: [Getter]  log info dir error warn time timeEnd

    console time timeEnd  可以计算时间差
        console.time("start");
        for(let i=0;i<1000000000;i++){}
        console.timeEnd("start");

setTimeout
======
1)this代表定时器自己
---
    改变this的方法:改变函数中的this指向
        1. call和apply可以，但会导致函数执行
        2. bind不会导致函数执行,bind的使用规则：bind只能绑定一次
        3. var that = this;    在定时器中使用that
        4. 使用箭头函数处理this，因为自己没有this，从而解决了this问题
```
let obj = {
    a:function(){
        setTimeout(function(){
            console.log(this);
        }.bind(this),1000);
    }
};
obj.a();
```

2)想要给eat传参数
-----------
    1，回调函数
    2，eat.bind(null,"苹果");
    3，可以在setTimeout方法的第三个参数以后进行传递 setTimeout(eat,1000,'苹果');

    function eat(what){
        console.log(what);
    }
    setTimeout(eat,1000,'苹果');

3)获取参数集合（将arguments转化为数组）
-------------------------
    1，let args = [].slice.call(arguments,1);
    2，let args2 = Array.from(arguments).slice(1);
    3，剩余运算符...args 将其他参数转化为数组类型  ES6
        在参数中可以做 剩余运算符...args
        在数组中可以做 拓展运算符 [...arr,...arr1]

    function eat(what,...args){
        获得除了第一个参数以外的后面的所有参数
        console.log(arguments);
        将arguments转化为数组
        let args = [].slice.call(arguments,1);
        let args2 = Array.from(arguments).slice(1);
        console.log(args);
    }
    eat("苹果","香蕉");

    var arr = [1,2,3];
    var arr2 = [4,5,6];
    console.log([...arr,...arr2]);

setImmediate
======
    setImmediate   立即设置
        异步  ---- node中方法 --- 不识别放置时间
        如果没有设置时间，会采用setImmediate
        setImmediate(function(){
             console.log(11);
        },2000);
        setTimeout(function(){
             console.log(222);
        },3000);

process
============
    process   进程
        process pid  进程PID
        process.kill(process.pid);  强制关闭进程
        process.exit();     正常状态下退出进程

        区分开发环境和上线环境
            在电脑上设置变量 cmd中 ，process.env代表当前进程的环境变量
            set NODE_EVN=development
            if(process.env.NODE_EVN === "development"){
                console.log("开发环境");
            }else{
                console.log("线上环境");
            }
        判断条件一般都是三个等号，判断null或者undefined可以用两个等号

        process.nextTick  下一队列 （当前队列底部）  执行速度快于setImmediate与setInterval
            重要的事情放在nextTick中，不重要的事情放在setImmediate
            setImmediate(function(){
                console.log(222);
            });
            process.nextTick(function(){
                console.log(111);
            });

## 五个特殊形参
    node基于commonjs规范的
    commonjs规范（目的都是操作模块）

如何使用模块？
======
    require使用模块  ---- require 方法是同步的，如果有回调函数的都是异步方法
        文件模块 ---- 自己定义 引用更需要相对路径 ./ ../
            每个文件都是一个模块，模块化是通过闭包实现的
            非常重要的内容可以挂载到global上
            多次require不会多次导入，默认会缓存到require.cache这个对象中
        第三方模块 ---- 别人写的 写模块名字即可
            全局的第三方模块 安装时加了-g只能在命令行中使用
                nrm模块  ---- 切换源 ----  默认下载模块通过的是npm下载，切换到国内
                    全局安装 npm install nrm -g
                    安装后 有全局命令 nrm
                        nrm ls      列出所有可用源
                        nrm test    测试所有可用源的网速
                        nrm use     用哪个源 (cnpm稳定性好一下，每隔十分钟更新官网的内容)

                nodeppt模块       ppt
                    安装nodeppt模块
                        npm install nodeppt -g
                    在想要执行的文件夹下，文件中包含slide
                        nodeppt start
                http-server 启动服务的，可以用于调试
                    帮用户启动服务，返回静态文件
                        npm install http-server -g
                    在想要访问的文件夹下，启动服务
                        http-server -p 端口号
                        http://172.18.0.122:5050  局域网访问   手机
                        http://127.0.0.1:5050   本地访问

            本地第三方模块   在当前项目下使用的
                开发依赖   只是开发时使用  less,babel,webpack,gulp
                    --save-dev或者-D
                发布依赖    上线开发全需要     vue，mime
                    --save或者-S

                安装之前，需要初始化文件package.json
                    初始化时文件名称不能有汉字，特殊符号，不能叫要下载的模块，不能自己安自己
                        npm init
                        npm init -y  直接创建package.json,跳过询问过程
                    如果外层文件有node_modules会向上安装
                    不能包含注释
                安装之后
                    安装文件，会默认安装到node_modules下，require的会自动去找node_module下的内容
                    npm install --save 会自动添加到package.json 中
                    npm install 会根据package.json文件的内容进行安装依赖文件
                卸载模块
                    npm uninstall
                    怎么安装的就怎么卸载
                        npm uninstall vue --save
                发布模块/包-----多个模块组成一个包
                    包必须要存在package.json文件
                        npm install -y
                    切换到npm上
                        nrm use npm
                    登录或者注册
                        npm addUser
                            zhs1990
                            zhs700725
                            529954781@qq.com
                        npm whoami  查看登录名
                    发布包
                        npm publish
                第三方模块查找
                    第三方模块回到当前目录下找node_modules,找到名字叫zhs-pack，找到之后找到对应的package.json,找到入口文件将其
                    如果当前目录下没有找到，会到上一级目录查找，找到根路径为止，找不到则报错
                    按照module.paths

            内置模块 ---- 核心模块  模块名字即可
                util 工具包
                    util = require("util");
                    util.inherits(Child,Parent);//只继承公有属性

                    判断数据类型
                        util.isArray([]);  返回的是布尔类型
                        util.isFunction([]);
                    原生js中继承方式
                        function Parent(){
                            this.cardId = "220122";
                        }
                        Parent.prototype.eat = function(){
                            console.log("吃肉");
                        };
                        第一种 call : 只继承私有
                            在儿子类中执行parent方法，同时让this指向儿子
                             function Child(){
                                 Parent.call(this);
                             }
                             let child = new Child();
                             console.log(child);

                        第二种
                            new 不能传递参数
                            继承私有属性，又继承公有属性
                            function Child(){

                            }
                            Child.prototype = new Parent();

                        第三种 继承公有属性  原型链操作
                            function Child(){

                            }
                            Child.prototype.__proto__ = Parent.prototype;

                        第四种  继承公有 es5
                            儿子的原型只有父类的公有属性
                            function create(parentPro){
                                let Func = function(){

                                };
                                Func.prototype = parentPro;
                                return new Func();
                            }

                        第五种  es6  Object.setPrototypeof();
                        Object.setPrototypeof(Child.prototype,Parent.prototype);
                        let child = new Child();

                events node自带一个事件库（发布订阅模式）
                    发布订阅最常见的两个方法 on emit
                    发布订阅模式
                        订阅就是代表一对多的关系
                        发布就是当事情触发后执行所有的事情
                        {女生失恋：[吃，逛，哭]}
                        {发布：订阅}
                    发布订阅思路分析：
                        function Girl(){
                            this._events = {};
                        }
                        //绑定
                        Girl.prototype.on = function(eventName,callBack){
                            if(this._events[eventName]){
                                如何将数组中的而每一个依次传入到函数中
                                this._events[eventName].forEach(function(item){ //剩余运算符
                                    由于这写法实在global下执行的，所以this指向global，需要修改this指向
                                    item.apply(this,others);
                                    item.call(this,...others); //拓展运算符
                                },this);//forEach的第二个参数是改变this指向
                            }
                        };
                        //触发
                        Girl.prototype.emit = function(eventName){
                            if(this._events[eventName]){
                                this._events[eventName].forEach(function(item){
                                    item();
                                });
                            }
                        };
                        //移除
                        Girl.prototype.removeListener = function(eventName,callBack){
                            if(this._events[eventName]){
                                filter  返回true  添加到新数组中，返回false  这项就不要了
                                this._events[eventName] = this._events[eventName].filter(function(item){
                                    return item !== callBack;
                                });
                            }
                        };
                        let girl = new Girl();
                        function cry(who){console.log(who+"大哭");}
                        function eat(who){console.log(who+"吃");}
                        function shopping(who){console.log(who+"购物");}
                        订阅,绑定
                        girl.on("失恋了",cry);
                        girl.on("失恋了",eat);
                        girl.on("失恋了",shopping);

                        发布，触发
                        girl.emit("失恋了","张红爽");
                内置模块
                    let events = require("events");
                    events.on("事件",函数);   绑定  on = addListener
                    events.emit("事件",参数);  触发，多次触发多次执行
                    events.once("事件",函数); 触发，只执行一次
                    events.removeListener("事件",函数);  删除
                    events.removeAllListener();  删除全部

    查看占用端口
        netstate -anto | findstr "8080"

## 如何定义模块？
    一个js文件就是模块
## 如何导出模块？
    exports  如果使用exports必须通过属性添加，否则无法挂载在module.exports上
    module.exports 因为返回的是module.exports,所以可以直接改变module.exports的指针
```
(function(){
    this = module.exports;
    module.exports = exports = {};
    return module.exports;
})();
```
## 搭建静态博客
    https://hexo.io/
    安装hexo模块
        npm install hexo-cli -g
    生成博客项目
        hexo init blog
    进入博客项目
        cd blog
    根据package.json按装依赖文件
        npm install
    启动hexo服务
        hexo server

    部署到github上
        hexo  一个账号只能部署一个
            仓库名称格式:用户名.github.io
            zhs1990.github.io

        发布github需要一个发布到github的插件
            npm install hexo-deployer-git --save

        配置发布文件  第一次
        _config.yml文件修改的地方(格式严格不变)
            type: git
            repo: https://zhs1990:zhs700725@github.com/zhs1990/zhs1990.github.io.git
            branch: master
        发布
            当前目录下操作
            hexo g  生成html
            hexo d  发布

## yarn包管理器
    相当于nrm use cnpm    支持缓存
    安装yarn
        npm install yarn -g
    初始化package.json
        yarn init -y
        yarn add jquery
        yarn add babel-core -dev

















## 第二周 http fs...

## 第三周 express cookie  session

## 第四周 mongodb + 博客项目

## 第五周 聊天室+爬虫

## 第六周 实战项目
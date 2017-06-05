# 第一周 git && node基础
## 20170520
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


# 第二周 http fs...
## 20170528
### Buffer
buffer是十六进制的，读取的内容是二进制的，展现形式是十六进制
- ff
buffer中最大的是ff

- 字节和位
1个字节有8个位

- 一个汉字有3个字节
node只支持utf-8格式

- 每个位中存放的都是二进制
- 二进制中的1 等于10进制中的1
- 当前位的最大值*2^(当前位值-1)进行累加 ^开方
- 一个字节在十进制中，最大的是255
- ff 15*16^1 + 15*16^0    16进制全部以0x开头，8进制是以0开头
- 将十进制转换成16进制  10进制中的100转换成16进制是多少？0*64

### 定义buffer

- 1,通过长度创建buffer
```
buffer长度是固定的，创建之后不可随意改变
var buffer = new Buffer(6);
buffer.fill(0);     手动填充buffer，清空内存
console.log(buffer);    通过长度长度创建的buffer，内容是随机的
```
- 2,通过数组创建buffer
```
var buffer = new Buffer([100,120,140]);
如果数组中的某一个不能正确转换则是0
如果超过255，则对256取膜
如果写负数，则加上256
var buffer = new Buffer(["a",120,140]);
console.log(buffer);
```
- 3,通过字符串创建buffer
```
var buffer = new Buffer("珠峰培训");
console.log(buffer);    通过汉字创建的buffer内容和汉字是对应的
console.log(buffer.toString()); 将buffer格式转化成字符串
console.log(buffer.length); buffer长度，字节的长度
console.log(buffer[0]); 如果取buffer中的某一个则是16进制代表的10进制
```

### buffer方法
- buffer.toString();
- buffer.slice();  截取 包前不包后  也可以修改原有的buffer内容
```
buffer中存的也是内存地址，可以将buffer看成是一个二维数组,buffer
var buffer = new Buffer([1,2,3]);
var newBuffer = buffer.slice(0,1);
console.log(buffer);
newBuffer[0] = 100;
console.log(buffer);
```
- buffer.copy();    copy,可以将小的buffer拷贝到大的buffer上
```
var buffer = new Buffer(12);
var buf1 = new Buffer("珠峰");
var buf2 = new Buffer("培训");
目标buffer，目标的开始位置，源的开始，源的结束
buf1.copy(buffer,buf2.length,0,buf1.length);
buf2.copy(buffer,0,0,buf2.length);
console.log(buffer.toString());
```
-  buffer.concat();  返回的还是buffer,如果不写长度，默认拼接后的长度，如果写的过长，多余的要截取掉,如果长度过小，则拷贝不进去
```
Buffer.concat([buf1,buf2],字节长度);
```
- 自定义buffer.concat
```
Buffer.myConcat = function(list,totalLength){
    1，不传递长度的情况下，计算出一个总长度，根据计算出的长度构建一个大buffer
    if(typeof totalLength === "undefined"){
        totalLength = list.reduce((prev,next) => {
            return prev+next.length;
        },0);
    }
    2，如果传递长度，就按照传的长度来构建buffer  new Buffer()
    var buffer = new Buffer(totalLength);
    3，将list中的每一个buffer拷贝到大buffer中 copy()
    var index = 0;
    list.forEach(item => {
        item.copy(buffer,index);
        index+=item.length;
    });
    4，截取掉多余的长度  slice
    return buffer.slice(0,index);
};
Buffer.myConcat([buf1,buf2],12);
```

### reduce
```
arr.reduce(); 收敛 返回叠加后的结果
var total = [1,2,3,4].reduce(function(prev,next){
    console.log(prev,next);
    //return 100; //返回值会作为下一次的上一次prev结果
    return prev+next;
});//第二个参数 是手动指定第一次的上一次
console.log(total);
```

### 如何拷贝一个对象  递归循环
- 1,赋值形式
```
var obj = {name:1,age:2,a:function(){}};
var obj2 = obj;
console.log(obj);
```

- 2,JSON.parse(JSON.stringify(obj2))
```
var obj = {name:1,age:2,a:function(){}};
var obj2 = JSON.parse(JSON.stringify(obj2));
//stringify不识别函数
```

- 3,ES6拷贝对象
```
var obj1 = {};
Object.assign(obj1,obj,{age:3});
```

## for of / for in / forEach区别  ---  面试题

## 进制转换

- 将任意进制转换成10进制 parseInt("111",2);
- 将任意进制转换成任意进制  "123".toString(2);
- console.log(~~1.5); 取整  ~~

## fs
### fs定义
- fs 是一个核心模块，操作文件 目录 文件夹
- fs里面的方法都是同步和异步同时出现，能用异步，不用同步

### fs读取的特点
- 1,读取的文件必须存在
- 2,读出的类型默认都是buffer
- 3,/ 代表根目录  当前文件所在的磁盘的根目录 ./ 相对当前文件的路径，可省略
- 4,同步的结果永远都在返回值上，异步的结果在callback参数中
- 5,不能读取比内存大的文件（不大于64k） (读取到的文件内容将会存在在内存中，太大会导致淹没可用内存)
- 6,流可以边读边写

### 同步方法读取文件
```
var school = {};
var name = fs.readFileSync("./1.txt","utf-8");
school.name = name;
var say = fs.readFileSync("./2.txt","utf-8");
school.say = say;
console.log(school);
```

### 异步方法读取文件
- 方法一:很多时候处理异步可以进行嵌套，可能会导致回调地域
```
var school = {};
fs.readFile("./1.txt","utf-8",function(err,data){
    //error-first 错误第一
    if(err)console.log(err);
    school.name = data;
    fs.readFile("./2.txt","utf-8",function(err,data){
        //error-first
        if(err)console.log(err);
        school.age = data;
        console.log(school);
    });
});
```
- 方法二：索引解决 callback
```
var school = {};
var index = 0;
fs.readFile("./1.txt","utf-8",function(err,data){
    //error-first
    if(err)console.log(err);
    school.name = data;
    index++;
    out();
});
fs.readFile("./2.txt","utf-8",function(err,data){
    //error-first
    if(err)console.log(err);
    school.age = data;
    index++;
    out();
});
function out(){
    if(index===2){
        console.log(school);
    }
}
```
- 方法三：订阅发布模式
```
var school = {};
fs.readFile("./1.txt","utf-8",function(err,data){
    //error-first
    if(err)console.log(err);
    school.name = data;
    event.emit("输出");
});
fs.readFile("./2.txt","utf-8",function(err,data){
    //error-first
    if(err)console.log(err);
    school.age = data;
    event.emit("输出");
});
function out(){
    if(school.name&&school.age){
        console.log(school);
    }
}
event.on("输出",out);
```
- 方法四：发布订阅升级版
```
var school = {};
fs.readFile("./1.txt","utf-8",function(err,data){
    //error-first
    if(err)console.log(err);
    school.name = data;
    event.emit("输出");
});
fs.readFile("./2.txt","utf-8",function(err,data){
    //error-first
    if(err)console.log(err);
    school.age = data;
    event.emit("输出");
});
function out(){
    //Object.keys(对象)  将对象转换成数组{name:1,age:2}  [name,age]
    if(Object.keys(school).length===2){
        console.log(school);
    }
}
//订阅
event.on("输出",out);
```
- 方法五：promise 有三个方法  resolve成功的回调  reject失败的回调  支持高版本浏览器
```
var school = {};
function readName(){
    return new Promise(function(resolve,reject){
        fs.readFile("./1.txt","utf-8",function(err,data){
            if(err)reject(err);
            resolve(data);
        });
    })
}
// readName().then(function(data){//成功
//     console.log(data);
//     school.name = data;
// }).catch(function(err){//失败
//
// });
function readAge(){
    return new Promise(function(resolve,reject){
        fs.readFile("./2.txt","utf-8",function(err,data){
            //error-first
            if(err)reject(err);
            resolve(data);
        });
    });
}
//all 方法是promise对象自带的，第一个参数是数组，数组放的是promise对象,并发执行
Promise.all([readName(),readAge()]).then(([age,name]) => {//解构
    //console.log(result);//result的结果顺序和数组中的顺序是一致的
    school = {age,name};
    console.log(school);
});
```

## fs写入特点
- 1，写入的内容会自动转化成utf8格式
- 2，flag:"w"  清空，写入，仅写
- 3, 如果第二个参数为空，文件中会出现undefined
- 4，如果写入的是对象，要JSON.stringify

### 同步写入方法
```
fs.writeFileSync(文件,写入内容，编码格式）; 
```

### 异步写入方法
```
fs.writeFile("./write.txt",JSON.stringify({name:2}),function(err){
    if(err)console.log(err);
});  
```

### 查看文件是否存在
- 同步查看
```
此方法的返回值是布尔类型
fs.existsSync(文件路径);
```
- 异步查看
```
fs.exists("文件路径",function(flag){
    参数flag是布尔类型
});
```

### 自定义copy
- 同步copy

```
copySync("./write.txt","./write2.txt");
function copySync(source,target){
    let result = fs.readFileSync(source,"utf-8");
    console.log(typeof result);
    fs.writeFileSync(target,result);
}
```

- 异步copy
```
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
```

## 创建目录
- fs.mkdirSync();  同步
### 同步创建目录 
```
let fs = require("fs");
makeP("a/b/c/d");
function makeP(url){
    var arr = url.split("/");
    for(var i=0;i<arr.length;i++){
        var cur = arr.slice(0,i+1).join("/");
        if(!fs.existsSync(cur)){
            fs.mkdirSync(cur);
        }
    }
}
```
### 异步创建目录
```
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
```

## 流 stream
### 可读流特点  fs.createReadStream("./1.txt",{highWaterMark:1})
- 1，每次可读大小：highWaterMark = 64*1024   最大64K  ，超过64k，读两次
- 2，没有编码默认是buffer ，读永远都是buffer格式
- 3，buffer可以控制速率，是异步读取

```
let rs = fs.createReadStream("./1.txt",{highWaterMark:1});
//console.log(rs);//可读流创建后返回的可读流对象
var arr = [];
//读取可读流中的内容，非流动模式->流动模式  监听事件
rs.on("data",function(data){//监听每次读到的内容
    rs.pause();   //暂停读取，暂停触发data事件
    //console.log(data);
    console.log("读取一次");
    arr.push(data);
});
//每隔多久触发一次data事件
setInterval(function(){
    rs.resume(); //恢复触发data事件
},1000);
//监听每次读到的内容，文件读取完成后执行end方法
rs.on("end",function(){
    var l  = Buffer.concat(arr).toString();
    console.log(l);
});
rs.on("error",function(err){
    console.log(err);
});//监听读流中的错误
```

### 可读流中常用方法
- on("data",function(data){});  监听每次读到的内容
- on("end",function(){});     文件读取完毕后触发
- on("error",function(err){});   监听读流中的错误
- parse();  暂停读出，暂停触发data事件
- resume(); 恢复触发data事件

## 可写流特点 fs.createWriteStream("./2.txt",{highWaterMark:1})
- 1，如果文件不存在，则创建
- 2，写入时，默认编码格式是utf8
- 3，通过流写入文件也是异步
- 4，默认写的时候创建的空间大小是16k
- 5，write()返回值表示是否能写入，不管true还是false都能写入
- 6，end方法会调用write方法,无论是否写完，都会强制被写入，关闭掉文件   只能调用一次
   调用多次会报错：write after end   已经结束了，不能再写入了
   如果end();没有参数，不会报错


### 限制写入内容大小，如果写不下了，暂停写入，当全部写入后，再继续写
```
//on("drain");  内存中需要写入的内容全部写完触发

//默认能写入一次，如果flag变成false,停止写入
let fs = require("fs");
let ws = fs.createWriteStream("./2.txt",{highWaterMark:1});
let index = 0;
function eat(){
    let flag = true;
    while(flag&&index<10){
        flag = ws.write(index+++"");
    }
    if(index>=0){
        ws.end();
    }
}
eat();
ws.on("drain",function(){//表示预计的内存和可用空间的内容全部消化后执行的方法
    console.log("干了");
    eat();//利用预估的空间写入内容
});
```

### 可写流方法

- ws.write();
- ws.end();
- ws.on("drain")


# 20170529
## stream 
### 边读边写 
- 自定义copy 原理来源于pipe原理，主要连接可读流和可写流
```
//拷贝，
//先读一次，rs开始写，如果不能写了，rs.pause();
//当数据全部写入后，恢复读取rs.resume();监听读取完成的end事件，rs.on(end);
//调用写入的关闭事件ws.end();

let fs = require("fs");
//异步边读边写
function copy(source,target){
    let rs = fs.createReadStream(source,{highWaterMark:3});//最大64K
    let ws = fs.createWriteStream(target,{highWaterMark:1});//最大16K

    rs.on("data",function(data){
        let flag = ws.write(data);
        if(!flag){
            rs.pause();
        }
        ws.on("drain",function(){
            console.log("休息一下");
           rs.resume();
        });
    });
    rs.on("end",function(){
        ws.end();
    });
}
copy("./1.txt","./2.txt");
```

- pipe原理写法
```
pipe是异步方法，不关心文件内容，会调用可写流的write方法和end方法
let fs = require("fs");
function copy(source,target){
    let rs = fs.createReadStream(source,{highWaterMark:3});//最大64K
    let ws = fs.createWriteStream(target,{highWaterMark:1});//最大16K

    rs.pipe(ws);
}
copy("./1.txt","./2.txt");
```

## http

- http服务  --- 静态服务，只提供静态文件的返回
```
//node提供内置模块 可以提供http服务
//服务端的路径没有../ ，常见的路径是 / 与 ./
// / 代表根路径 ,默认访问localhost:3000   相当于 /
// ./
let http = require("http");
let fs = require("fs");
let mime = require("mime");
let url = require("url");
//console.log(url.parse("https://username:password@www.baidu.com/s?a=1&b=20#a20",true));
//true可以默认将query转成对象格式
http.createServer(function(req,res){
    //请求不同的路径，返回不同的内容  - 路由
    //mime可以根据后缀推算出对应的content-type类型
    //let pathname = req.url;//带有查询参数的，需要的是路径
    let {pathname,query} = url.parse(req.url,true);
    if(pathname==="/"){
        res.setHeader("Content-Type","text/html;charset=utf-8");
        fs.createReadStream("./index.html").pipe(res);
    }else{
        fs.exists("."+pathname,function(flag){
            if(flag){
                res.setHeader("Content-Type",mime.lookup(pathname)+";charset=utf-8");
                fs.createReadStream("."+pathname).pipe(res);
            }else{
                res.statusCode = 404;
                res.end("NOT FOUND 404");
            }
        });

    }

}).listen(4000,function(){
    console.log("server start 4000");
});
```


# 第三周 express cookie  session
## 20170603
### express
- 安装express
```
npm init -y
npm install express -S
```
- 引入express,express是一个函数调用
```
let express = require("express");
```
- 此函数调用会返回一个函数，app就是监听函数，简化http开发，基于http
```
let app = express();
```
- 当客户端以GET方式访问/signup路径时会调用后面的监听函数进行响应
```
app.get("/signup",function(req,res){
    res.setHeader("Content-Type","text/html;charset=utf-8");
    res.end("注册");
});
```
- 监听端口
```
app.listen(8080);
```


### 分析express原理
```
let url = require("url");
function createApplication(){
    let app = function(req,res){
        let pathname = url.parse(req.url,true).pathname;
        for(var i=0;i<app.routes.length;i++){
            let route = app.routes[i];
            if(route.method == req.method && route.pathname == pathname){
                return route.listener(req,res);
            }
        }
        res.end("404 NOT FOUND");
    };
    app.routes = [];
    app.get = function(pathname,listener){
        app.routes.push({method:"GET",pathname,listener});
    };
    app.listen = function(port){
        require("http").createServer(app).listen(port);
    };
    return app;
}
module.exports = createApplication;
```

### express中间件
- app.use() 表示使用一个中间件
- 中间件的使用
```

```
- 中间件的作用
> 1，编写公共处理逻辑
```
res.setHeader("Content-Type","text/html;charset="+(charset||"utf-8"));
``` 
> 2，添加一些公共的方法,每个路由都会用到的方法需要放在中间件中
```
app.use(function (req,res,next) {
    res.print = function(charset,data){
        res.setHeader("Content-Type","text/html;charset="+(charset||"utf-8"));
        res.end(data);
    };
    req.name = "zhs";
    next();
});
app.use(function (req,res,next) {
    req.name = "tl";
    next();
});
app.get("/signup",function(req,res){
    res.print("utf-8","注册");
});
app.get("/signin",function (req,res) {
    res.print("utf-8","登录");
});
app.listen(8080,function(){
    console.log("8080");
});
```
> 3，进行业务逻辑判断
```
let express = require("express");
let url = require("url");
let app = express();
/*
* 当访问/signin?username=zhs将username值取出来赋给username，
* 当访问/user的时候,在中间件中判断此用户是否登录，如果未登录，提示没有访问权限，如果已经登录，正常访问
* */
let username;
app.use(function(req,res,next){
    let {pathname,query} = url.parse(req.url,true);
    res.setHeader("Content-Type","text/html;charset=utf-8");
    if(pathname=="/user"){
        if(username){
            next();
        }else{
            res.end("你没有访问权限");
        }
    }else{
        next();
    }
});
app.get("/signin",function(req,res){
    let {pathname,query} = url.parse(req.url,true);
    username = query.username;
    res.end("啦啦");
});
app.get("/user",function(req,res){
    res.end("welcome");
});
app.listen(8080);
```
- 错误处理中间件有四个参数
> 如果next中传递了参数，表示任务出错了，则会跳过后面所有的正常中间件和路由，交给错误处理中间件处理
```
app.use(function(req,res,next){
    req.money -= 40;
    next("钱丢了");
});
app.use(function(err,req,res,next){
    console.log("错误处理"+req.money);
    console.log(err);
    res.end("error handler");
});
```    

## 请求中的参数
- req.method    获取请求方式
- req.path      获取路径名称（相当于url模块取到的pathname） 
- req.query     查询字符串对象
- req.headers   获取请求头对象
- req.params    获取参数对象 
```
app.get("/users/:id",function(req,res){
    //{id:444} 
    console.log(req.params);  //获取参数对象
    let id = req.params.id;
    res.end(id);
});
```
### 分析req.params原理
```
let pattern = "/users/:id/:name";
let request = "/users/1/zhs";
let params = {};
let paramNames = [];
pattern = pattern.replace(/:(\w+)/g,function(){
    paramNames.push(arguments[1]);
    return "(\\w+)";
});
let result = request.match(new RegExp(pattern));
for(var i=0;i<paramNames.length;i++){
    params[paramNames[i]] = result[i+1];
}
console.log(params);
```

### send方法
- 可以接受任何类型  对象  字符 buffer  数字
- 数字类型比较特殊
```

```

### template
- 第一步：设置模板引擎，此项必须设置，不设置不能用
```
app.set("view engine","ejs");
app.set("view engine","html");//参数2的名称必须与engine()方法的参数1一致
```
- 第二步：设置模板存放的根路径(存放目录名称会默认找views，但是可以手动指定)
```
app.set("views",path.resolve("tmpl"));
```
- 第三步：可以手动指定模板后缀名
```
app.engine("html",require("ejs").__express);
```
- res.locals才是真正渲染模板的数据对象
```
app.use(function(req,res,next){
    //res.locals才是真正渲染模板的数据对象
    res.locals.website = "珠峰培训";
    next();
});
```
- 第四步：渲染模板=模板+数据对象
> render负责把模板文件和数据对象进行混合并响应输出
> res.render(模板的相对路径,数据对象);
> 在真正渲染之前，会把新的内容拷贝到res.locals创建的对象上去
> 使用习惯：公有的数据放在中间件，私有的数据放在路由中
```
app.get("/list",function(req,res){
    res.render("list",{
        title:"list哈哈哈"
    });
});
app.get("/",function(req,res){
    res.render("home",{
        title:"home啦啦啦"
    });
});
app.listen(8080);
```

### 静态文件中间件 -- 用来响应对客户端的静态文件请求  ---css,js,image
```
app.use(express.static(path.resolve("public")));
```

### sendFile 
- 路径(必须是绝对路径)
- 将index.html文件读取出来发送给客户端
```
res.sendFile(path.resolve("./index.html"))
```
### 分析express.static原理
```
function static(root){
    return function(req,res,next){
        let realPath = path.join(root,req.path);
        fs.exists(realPath,function(flag){
            if(flag){
                res.sendFile(realPath);//如果找到文件，就将文件读取出来发送给客户端
            }else{
                next();//如果找不到文件的话，就继续向下走，让下面的程序处理
            }
        });
    }
}
app.use(static(path.resolve("public")));
```


# 20170604
## cookie
### 原生cookie的使用分析
- 1，第一次客户端向服务器发送请求
- 2，服务器通过响应头Set-Cookie向客户端种植cookie
```
设置cookie
res.setHeader("Set-Cookie","name=1");  设置一个cookie
res.setHeader("Set-Cookie",["name=zhs","age=10"]);  设置多个cookie
```
- 3，客户端再次向服务器发送请求并携带上cookie请求头
- 4，服务器通过读取请求头中的cookie并进行响应
```
读取cookie
req.header.cookie  =>  name=zhs; age=10; visit=1
```

### 练习：通过原生cookie来分析访问次数
```
let http = require("http");
let url = require("url");
let querystring = require("querystring");
http.createServer(function(req,res){
    let urlObj = url.parse(req.url,true);
    let {pathname} = urlObj;
    if(pathname==="/visit"){
        let cookie = req.headers.cookie;
        let visit = querystring.parse(cookie,"; ").visit;
        if(visit){
            visit++;
        }else{
            visit = 1;  
        }
        res.setHeader("Set-Cookie",`visit=${visit}`);
        res.setHeader("Content-Type","text/html;charset=utf-8");
        res.end(`欢迎光临第${visit}次`)
    }else{
        res.end("404");
    }  
}).listen(8090);
```

### express中cookie
- express中获取cookie
```

```

## mongodb
### 特点  
- 分布式存储
- 高并发
- 数据存储为文档，类似于json对象

### mongodb命令
- 常看当前数据库
```
db
```
- 切换数据库
```
use 数据库名称(不存在也可以)
```
- 向当前数据库stu集合中插入一个文档
```
db.stu.insert({name:'zfpx1'});
```
- 查看当前stu集合下的主键
```
db.stu.find();
```
- 删除当前数据库
```
db.dropDatabase();
```
- 删除某个集合
```
db.集合名字.drop();
```
### 主键 就是一个文档的主要的键，当向数据库的某个集合中插入一个文档的时候，mongodb会自动补一个主键 _id
- 唯一性 每个文档的主键不会相同
- 业务无关性



### MEAN架构
- MONGODB
- EXPRESS
- ANGULAR
- NODE














## 第四周 mongodb + 博客项目

## 第五周 聊天室+爬虫

## 第六周 实战项目
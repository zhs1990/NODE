let path = require("path");
let webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin");//自动生成html文件，针对单入口文件
let ExtractTextPlugin = require("extract-text-webpack-plugin");//将css单独打包

module.exports = {
    //entry:"./src/index.js",
    entry:{
        chunk1:"./src/index.js",
        chunk2:"./src/main2.js"
    },
    output:{
        path:path.resolve(__dirname,"./dist"),
        // publicPath:"/dist/",
        //filename:"[name].js"
        filename:"[name].[hash].js" //添加hash值，值是随机的,为了避免缓存
    },
    module:{//加载规则配置
        rules:[
            //将es6转化成es5
            {
                test:/\.js$/,//匹配所有js文件
                loader:"babel-loader",//通过什么加载器进行匹配
                exclude:"/node_modules/" //排除哪些文件
            },
            {
                test:/\.vue$/,//匹配所有vue单文件组件
                loader:"vue-loader" //通过什么加载器进行匹配
            },
            // {
            //     test:/\.css$/,
            //     loader:"style-loader!css-loader"//先处理后面的加载器，再处理前面的
            //     //style-loader 将css样式内嵌在html页面中
            //     //多个loader中间用！隔开，或者用数组
            //     //loader:["style-loader","css-loader"]
            // },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({use:"css-loader"})
            },
            // {
            //     test:/\.less$/,
            //     loader:"style-loader!css-loader!less-loader"
            // },
            {
                test:/\.less$/,
                loader:ExtractTextPlugin.extract({use:"css-loader!less-loader"})
            },
            {
                test:/\.(jpe?g|png|gif|svg|eot|woff2|woff|ttf)$/,
                loader:"url-loader",
                options:{
                    limit:10000, //限制图片,10kb以下，进行base64编码，否则正常显示
                    name:"[name].[ext]?[hash]" //重写文件名
                }
            }
        ]
    },
    //生成一个sourcemap文件，存储编译前代码位置信息，便于在原文件中调试
    devtool:"#eval-source-map", //记录编译之前的代码对应位置
    //默认 NPM 包导出的是 运行时 构建。为了使用独立构建，在 webpack 配置中添加下面的别名
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.common.js",   //导入独立构建文件
            "bootstrap$":"bootstrap/dist/css/bootstrap.css"
        },
        extensions:[".js",".css",".vue",".less"]//将文件后缀名称放进数组中
    },
    //配置devServer
    devServer:{
        noInfo:true, // 隐藏编译信息
        //hot:true// 热替换可以在配置文件中设置，但是需要配合 new webpack.HotModuleReplacementPlugin()使用
    },
    plugins:[ //webpack plugin
        new HtmlWebpackPlugin({
            title:"hello zhs", //生成的html页面title
            favicon:'./src/assets/logo.png', //生成页卡图标
            template:"./index.html", //指定html模板
            //chunks:["main"], //指定依赖 -- 单文件入口，默认名称main
            //chunks:["chunk1","chunk2"],  -- 非动态生成的common文件
            chunks:["common","chunk1","chunk2"]   //-- 多文件入口 ,添加入口名称即可
            //inject:"head"  //将依赖的文件存放位置,放在head标签里，默认是存放在body中
        }),
        new webpack.optimize.CommonsChunkPlugin("common"), //用来提取多入口中的公共模块
        //如果common文件是动态生成的，需要在chunks中将common放在最前面，否则会报错
        //如果不是动态生成的，就直接在html页面引入即可 <script src="common.js"></script>
        new ExtractTextPlugin("index.css"), //将css单独打包，指定一下打包之后的文件名称
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap:true, //保留代码压缩编译前的位置
        //     compress:{
        //         warnings:false  //删除调试语句
        //     }
        // }) //将js文件压缩 webpack核心模块提供的压缩方法
    ]
};
if(process.env.NODE_ENV==="production"){//生产环境下
    console.log("this is production!!!");
    module.exports.plugins = (module.exports.plugins||[]).concat([
        new webpack.optimize.UglifyJsPlugin({
            sourceMap:true, //保留代码压缩编译前的位置
            compress:{
                warnings:false  //删除调试语句
            }})
    ]);
}else{
    console.log("this is development!!!");
}
console.log(process.env.NODE_ENV); //区分生产（production）或者开发（development）环境标识
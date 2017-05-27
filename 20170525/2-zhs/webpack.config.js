let path = require("path");

module.exports = {
    entry:{
        index:"./src/index.js"
    },
    output:{
        path:path.resolve(__dirname,"./dist"),//生产环境编译后存放的位置
        publicPath:"/dist/",//服务器存放的文件夹 --- resource中
        filename:"[name].js"
    },
    module:{ //配置模块加载解析规则
        rules:[
            {//指定js加载器
                test:/\.js$/,
                loader:"babel-loader",
                exclude:"/node_modules/" //排除某些文件
            },
            {//指定vue加载器,为了让webpack编译解析vue单文件组件
                test:/\.vue$/,
                loader:"vue-loader"
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
};
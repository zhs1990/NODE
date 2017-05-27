var say = function(n){
    console.log(n)
};
export {say}
export default{say}


/*
es6导出
导出1：
export {
    say
}
导出2:
export default{

}
es6导入  怎么导出就怎么导出
导入1：
import {say} from "./public/b.js"
导入2：
import 自定义名（Hello） from "./public/b.js"
*/

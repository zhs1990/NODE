import React from "react"
import ReactDom from "react-dom"

/*
 * 组件可以把一个页面产分成多个独立的组件，分别考虑函数式组件  类式组件
 * 组件名称的首字母必须大写，
 * 首字母是大写开头是React组件，如果首字母是小写开头是React元素
 * */
/*
函数式组件
    1,这是一个独立的合法的组件
    2,渲染组件其实就是渲染组件函数的执行结果
    3,props是一个对象  {name:"zhs"}
    4,React元素不能传递自定义属性，但是组件可以
    5,只能返回一个且必须返回一个顶级React元素
*/
// function Welcome(props){
//     return <h1>hello,{props.name},{props.age}</h1>;
// }
// ReactDom.render(<Welcome name="zhs" age="9" />,document.querySelector("#root"));

//2.
/*
 类式组件
* 1，可以通过类来声明React组件
* 2，需要定义render方法，render方法能且只能返回一个顶级React元素
* 3.1 先实例化  let w = new Welcome();  w.render();
* */
class Welcome extends React.Component{
    render(){
        return <h1>hello,{this.props.name},{this.props.age}</h1>;
    }
}
ReactDom.render(<Welcome name="zhs" age="9" />,document.querySelector("#root"));




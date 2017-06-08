import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"

/*
* this.props.children  取到Message下的子元素
* 多个子元素的时候是数组 []
* 一个子元素的时候就是对象  {}
*   React.Children.map(this.props.children)  是React提供的工具方法
*   可以自动处理this.props.children的一个或者多个问题，必须作为参数传递过去
* */

class Message extends Component{
    render(){
        // console.log(this.props.children);
        // //判断条件 typeof instanceof map toString
        // let children = this.props.children;
        // if(!(children instanceof Array)){
        //     children = [children];
        // }
        return (
            <ul>
                {
                    React.Children.map(this.props.children,(item,index)=><li key={index}>{item}</li>)
                }
            </ul>
        );
    }
}
render(<Message>
    <span>大毛</span>
</Message>,document.querySelector("#root"));
import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"
import {PropTypes} from "prop-types"
/*
* npm install prop-types -S
* */

class Person extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <p>姓名：{this.props.name}</p>
        );
    }
}
//设置组件的属性类型和是否必须提供
Person.propTypes = {
  name:PropTypes.string.isRequired //规定要传的属性，属性类型，是否必传
};
Person.defaultProps = {
    name:"无名"  //设置默认值，没有传递属性值的前提下会使用默认值
};
render(<Person name="张红爽" />,document.querySelector("#root"));
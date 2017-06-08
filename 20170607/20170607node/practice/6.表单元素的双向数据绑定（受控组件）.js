import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"

//表单元素的双向数据绑定
//受控组件：表单元素值受组件的状态控制
// 和非受控组件
class Input extends Component{
    constructor(props){
        super(props);
        this.state = {val:"1"};
    }
    //事件处理器
    handleChange = (event)=>{
        this.setState({
            val:event.target.value  //event.target  触发事件的事件源
        });
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.val} onChange={this.handleChange} />
                <p>{this.state.val}</p>
            </div>
        );
    }
}
render(<Input/>,document.querySelector("#root"));
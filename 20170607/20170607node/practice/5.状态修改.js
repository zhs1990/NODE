import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"

class Person extends Component{
    constructor(props){
        super(props)
        //初始化一个默认状态对象，happy:true
        this.state = {
            happy:true
        };
    }
    handleClick = ()=>{
        //必须要调用setSate方法来修改状态对象
        this.setState({
            happy:!this.state.happy
        });
    }
    render(){
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>心情：{this.state.happy?"好":"不好"}</p>
                <button onClick={this.handleClick}>变心</button>
            </div>
        );
    }
}
render(<Person name="张红爽" />,document.querySelector("#root"));
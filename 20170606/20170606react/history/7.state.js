import React from "react"
import ReactDom from "react-dom"
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {number:0,name:"张三"};
    }
    //事件监听函数里的this默认指向null， bind或者箭头函数可以解决this的问题
    handleClick(){
        //this默认指向null
        //setState是异步执行的，不能调用的时候立即取值,必须在回调函数中取更新的值
        //setState方法是追加属性，或者修改或者增加，不能删除
        this.setState({
            number:this.state.number+1
        },()=>{
            alert(this.state.number);
        });
        alert(this.state.number);
    }
    render(){
        return (
            <div>
                <p>{this.state.name}{this.state.number}</p>
                <button type="button" onClick={this.handleClick.bind(this)}>加</button>
            </div>
        );
    }
}
ReactDom.render(<Counter/>,document.querySelector("#root"));

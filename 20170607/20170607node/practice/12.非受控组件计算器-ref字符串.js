import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"


//如何在react中得到并操作
class Calculator extends Component{
    constructor(props){
        super(props);
    }
    change = ()=>{
        console.log(this.refs);
        //this.ref是一个对象，属性就是虚拟DOM的ref的值，值就是此虚拟DOM渲染完成之后的真实DOM对象
        let a = this.refs.a.value;
        let b = this.refs.b.value;

        this.refs.result.innerHTML = parseInt(a)+parseInt(b);
    }
    render(){
        return (
            <div>
                <input type="text" ref="a" defaultValue={0} onChange={this.change} />
                +
                <input type="text" ref="b" defaultValue={0} onChange={this.change}  />
                =
                <span ref="result">{}</span>
            </div>
        );
    }
}


render(<Calculator/>,document.querySelector("#root"));
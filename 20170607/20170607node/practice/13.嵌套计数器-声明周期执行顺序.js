import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"
/*
* 父组件
* 加载前  加载后  将要卸载
* 子组件
* 加载前  加载后  将要卸载
*
* 执行顺序：父组件加载前 子组件加载前 子组件加载后 父组件加载后 父组件将要卸载 子组件将要卸载
* */
//嵌套计数器
/*
* 组件的生命周期
* 1，挂载前
*   componentWillMount(){}
* 2，挂载中
*   render(){}
* 3，挂载完成
*   componentDidMount(){}
* 4, 组件是否需要更新
*   shouldComponentUpdate();
* 5,组件将要更新
*   componentWillUpdate
* 6, 组件更新完成
*   componentDidUpdate
* 7,组件接受到新的属性
*   componentWillReceiveProps
* 8，组件将要被删除
*   componentWillUnmount
* */
//子组件
class SubCounter extends Component{
    componentWillMount(){
        console.log("子组件1,componentWillMount组件将要被挂载到页面上");
    }
    componentDidMount(){
        console.log("子组件3,componentDidMount挂载完成后");
    }
    componentWillUnmount(){
        console.log("子组件8,componentWillUnmount组件将要被删除");
    }
    //组件接受到新的属性
    // componentWillReceiveProps(){
    //     console.log("7,componentWillReceiveProps组件接受到新的属性")
    // }
    // shouldComponentUpdate(newProps,newState){
    //     if(newProps.num<=5){
    //         return true;
    //     }else{
    //         return false;
    //     }
    // }
    render(){
        return (
            this.props.num<3?<div style={{width:'100px',height:'50px',border:'1px solid blue'}}>
                <span>{this.props.num}</span>
            </div>:null
        );
    }
}
//父组件
class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {num:0};
    }
    componentWillMount(){
        console.log("1,componentWillMount组件将要被挂载到页面上");
    }
    componentWillUnmount(){
        console.log("8,componentWillUnmount组件将要被删除");
    }
    handleClick = ()=>{
        this.setState({
            num:this.state.num+1
        });
    }
    //组件是否需要更新  但组件的状态或者属性发生改变的时候会走到这个阶段
    //newProps  新的属性对象
    //newState  新的状态对象
    shouldComponentUpdate(newProps,newState){
        console.log("4,shouldComponentUpdate返回一个布尔值，指定组件是否要被更新,true就是更新");
        return true;
        // if(newState.num%2==0){
        //     return true;
        // }else{
        //     return false;
        // }
    }
    componentWillUpdate(){
        console.log("5,componentWillUpdate组件将要更新");
    }
    componentDidUpdate(){
        console.log("6,componentDidUpdate组件更新完成");
    }
    componentWillUnmount(){
        console.log("8,componentWillUnmount组件将要被删除");
    }
    del = ()=>{
        ReactDOM.unmountComponentAtNode(document.querySelector("#root"));
    }
    render(){
        console.log("2,render就是挂载的过程");
        return (
            <div style={{width:'200px',height:'200px',border:'2px solid red'}}>
                <span>{this.state.num}</span>
                <button onClick={this.handleClick}>+</button>
                <button onClick={this.del}>删除</button>
                <SubCounter num={this.state.num} />
            </div>
        );
    }
    componentDidMount(){
        console.log("3,componentDidMount挂载完成后");
    }
}



render(<Counter/>,document.querySelector("#root"));
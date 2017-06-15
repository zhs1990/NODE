import {createStore} from "./redux";
import React from "react";
import ReactDOM from "react-dom";

let reducer = (state={number:0},action={})=>{
    //reducer一定要返回一个全新的对象
    //所有的状态对象局域不变性
    switch(action.type){
        case "Add":
            return {number:state.number+parseInt(action.amount)};
        case "Sub":
            return {number:state.number-parseInt(action.amount)};
        default :
            return state;
    }
};
//得到仓库对象
let store = createStore(reducer);
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            number:0
        };
    }
    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState().number
            });
        });
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <input type="number" ref={ref=>this.amount=ref} />
                <button onClick={()=>store.dispatch({type:"Add",amount:this.amount.value})}>+</button>
                <button onClick={()=>store.dispatch({type:"Sub",amount:this.amount.value})}>-</button>
            </div>
        );
    }
}
ReactDOM.render(<Counter />,document.getElementById("root"));

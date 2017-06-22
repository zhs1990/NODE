import React,{Component} from "react";
import * as actionTypes from "../store/action-types";
import {connect,bindActionCreators} from "../react-redux"
/*
* UI组件 木偶组件
* 1，没有state状态，数据都来自于props属性
* */
class Counter extends Component{
    render(){
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={()=>this.props.add()}>+</button>
                <button onClick={()=>this.props.sub()}>-</button>
            </div>
        );
    }
}
//把状态映射为属性对象
let mapStateToProps = (state)=>({
    number : state
});
let actions = {
    add(){
        return {type:actionTypes.ADD}
    },
    sub(){
        return {type:actionTypes.ADD}
    }
};
//把dispatch方法映射为属性对象
let mapDispatchToProps = (dispatch)=> bindActionCreators(actions,dispatch);
export default  connect(mapStateToProps,mapDispatchToProps)(Counter);
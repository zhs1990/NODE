//自定义react-redux
import React from "react";
import PropTypes from "prop-types";
let connect = (mapStateToProps,mapDispatchToProps)=>{
    return function(_component){
        //返回一个容器组件 此Proxy属于高阶组件
        class Proxy extends React.Component{
            constructor(props){
                super(props);
                this.state = {};
            }
            //在组件将要加载之前，让当前组件订阅store的状态变化事件
            componentWillMount(){
                //从上下文对象中获取store对象属性
                //订阅
                this.unsubscribe = this.context.store.subscribe(()=>{
                    //把映射后的返回值付给了当前Proxy组件的状态对象
                    this.setState(mapStateToProps(this.context.store.getState()));
                });
            }
            componentWillUnmount(){
                //取消订阅
                this.unsubscribe();
            }
            render(){
                return (
                    <_component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)} />
                );
            }
        }
        Proxy.contextTypes = {
            store :PropTypes.object
        };
        return Proxy;
    }
};
class Provider extends React.Component{
    getChildContext(){
        return {
            store:this.props.store
        }
    }
    render(){
        return this.props.children;
    }
}
Provider.childContextTypes = {
    store : PropTypes.object
};
let bindActionCreators = (actionCreator,dispatch)=>{
    let result = {};
    for(let attr in actionCreator){
        result[attr] = ()=>dispatch(actionCreator[attr]());
    }
    return result;
};
export {connect,Provider,bindActionCreators}
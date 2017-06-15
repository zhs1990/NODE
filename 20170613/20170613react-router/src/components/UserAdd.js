import React,{Component} from "react"
import {Prompt} from "react-router-dom" //弹出框
export default class UserAdd extends Component{
    constructor(props){
        super(props);
        //默认不阻止跳转
        this.state = {blocking:false};
    }
    handleChange = (event)=>{
        this.setState({
            blocking:event.target.value&&event.target.value.length>0
        });
    }
    handleSubmit = ()=>{
        let name = this.name.value;
        //从缓存中读取用户列表字符串
        let userStr = localStorage.getItem("users");
        //转成对象数组
        let users = userStr?JSON.parse(userStr):[];
        //向数组中添加新的对象
        users.push({id:Date.now(),name});
        //再把新的数组保存在缓存中
        localStorage.setItem("users",JSON.stringify(users));
        this.setState({
            blocking:false
        },()=>{
            //通过history中的push方法跳转到/user/list
            this.props.history.push("/user/list");
        });

    }
    render(){
        return (
            <div>
                <Prompt
                    when={this.state.blocking}
                    message={(location)=>`确定要跳转到${location.pathname}吗？`}/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">姓名</label>
                        <input ref={ref=>this.name=ref} onChange={this.handleChange} type="text" className="form-control" id="name"/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>

        );
    }
}
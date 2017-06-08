import React,{Component} from "react"
export default class MessageForm extends Component{
    constructor(props){
        super(props);
    }
    handleSubmit = (event)=>{
        event.preventDefault();//阻止表单的默认事件
        let username = this.refs.username.value;
        let content = this.refs.content.value;
        let msg = {
            username,  //用户名
            content,  //内容
            id:Math.random()+Date.now(),  //信息序列号
            createAt:new Date()  //发布时间
        };
        this.props.fn(msg);
        this.refs.content.value = "";
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">姓名</label>
                    <input ref="username" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="content">内容</label>
                    <input ref="content" type="text" className="form-control"/>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">提交</button>
                </div>
            </form>
        );
    }
}
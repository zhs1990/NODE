import React,{Component} from "react"
import MessageHeader from "./MessageHeader.js"
import MessageList from "./MessageList.js"
import MessageForm from "./MessageForm.js"
/*
* 1，实现匿名留言
* 2，增加用户名
* 3，增加发表时间
* 4，删除功能
* 5，数据持久化
* */
//组件的状态只能在当前组件中修改，如果想要在其他组件中修改当前组件的数据，可以创建一个函数，给函数传递一个参数，将该函数传递给其他组件，在其他组件中调用该函数，参数就是修改或者需要添加的数据，即可跨组件修改数据
//{}   花括号中不能放对象，只能放字符串
export default class MessageBox extends Component{
    constructor(props){
        super(props);
        this.state = {messages:[]};
    }
    //增加一条留言
    addMessage = (msg)=>{
        //向老的留言数组中增加一个对象
        this.state.messages.push(msg);
        //修改状态对象，并重新渲染视图
        this.setState({
            messages:this.state.messages
        });
    }
    //删除一条留言
    delMessage = (deleteId)=>{
        let mes = this.state.messages.filter((item)=>item.id!=deleteId);
        this.setState({
            messages:mes
        });
    }
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="panel panel-warning">
                            <div className="panel-heading">
                                <MessageHeader/>
                            </div>
                            <div className="panel-body">
                                <MessageList list={this.state.messages} delMessage={this.delMessage}/>
                            </div>
                            <div className="panel-footer">
                                <MessageForm fn={this.addMessage} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
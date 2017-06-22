import React,{Component} from "react";
//连接 自己的ui组件与redux store
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import todoActions from "../store/actions/todos"

class Todos extends Component{
    handleKeyDown =(event)=>{
    	let content = event.target.value;
    	if(event.keyCode ==13&&content!=null&&content.length>0){
    		this.props.addTodo(content);
            event.target.value = "";
		}
	}
	render(){
		return (
			<div>
				<input type="text" onKeyDown={this.handleKeyDown} />
				<ul>
					{
						this.props.todos.map((todo,index)=>(
							<li key={index} onDoubleClick={()=>this.props.toggleTodo(todo.id)}><span style={{textDecoration:todo.completed?"line-through":""}}>{todo.content}</span> <button onClick={()=>this.props.delTodo(todo.id)}>-</button></li>
						))
					}
				</ul>
			</div>
		);
	}
}
//connect有两个参数 一个输入 一个输出  数据需要通过this.props拿到

//输入
let mapStateToProps = (state)=>(
    //把store的状态对象映射为当前的组件属性  参数是state tree
	//返回值是传入子组件的属性对象
	{
		todos:state.todos.filter(todo=>{
            switch (state.filter){
                case "active":
                    return !todo.completed;
                case "completed":
                    return todo.completed;
                default:
                    return true;
            }
		})
	}
);
//输出
let mapDispatchToProps = (dispatch)=>(
	//bindActionCreators用来实现将action创建函数和dispatch绑定
    bindActionCreators(todoActions,dispatch)
);
export default connect(mapStateToProps,mapDispatchToProps)(Todos);
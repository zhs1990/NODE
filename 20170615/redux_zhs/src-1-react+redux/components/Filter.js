import React,{Component} from "react";
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import filterAction from "../store/actions/filter"

class Filter extends Component{
	render(){
		return (
			<div>
				{
					this.props.filter=="all"?<span>全部</span>:<button onClick={()=>this.props.changeFilter("all")}>全部</button>
				}
                {
                    this.props.filter=="active"?<span>未完成</span>:<button onClick={()=>this.props.changeFilter("active")}>未完成</button>
                }
                {
                    this.props.filter=="completed"?<span>已完成</span>:<button onClick={()=>this.props.changeFilter("completed")}>已完成</button>
                }
			</div>
		);
	}
}

export default connect(
	state=>({filter:state.filter}),//把状态树映射为属性对象
	dispatch=>bindActionCreators(filterAction,dispatch)
)(Filter);
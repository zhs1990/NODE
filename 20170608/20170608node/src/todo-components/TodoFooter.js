import React,{Component} from "react"
import * as filterTypes from "./filter-types"
export default class TodoFooter extends Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-4" style={{lineHeight:"40px"}}>
                    <span>你还有{this.props.activeCount}件代办事项</span>
                </div>
                <div className="col-md-5">
                    <button className={"btn btn-default"+(this.props.filter===filterTypes.SHOW_ALL?'active':"")} style={{marginRight:"5px"}} onClick={()=>this.props.changeFilter(filterTypes.SHOW_ALL)}>全部</button>
                    <button className={"btn btn-default"+(this.props.filter===filterTypes.SHOW_ACTIVE?'active':"")} style={{marginRight:"5px"}}  onClick={()=>this.props.changeFilter(filterTypes.SHOW_ACTIVE)}>未完成</button>
                    <button className={"btn btn-default"+(this.props.filter===filterTypes.SHOW_COMPLETED?'active':"")} onClick={()=>this.props.changeFilter(filterTypes.SHOW_COMPLETED)}>已完成</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-danger" onClick={this.props.clearAllCompleted}>清除已完成</button>
                </div>
            </div>
        );
    }
}
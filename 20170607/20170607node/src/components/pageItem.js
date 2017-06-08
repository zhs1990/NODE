import React,{Component} from "react"
export default class PagesItem extends Component{
    render(){
        let {i,changePage,current} = this.props;
        return (
            <li key={i} className={i===current?"active":""} onClick={()=>changePage(i)}><a href="#">{this.props.children}</a></li>
        );
    }
}
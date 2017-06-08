import React,{Component} from "react"
import ReactDOM,{render} from "react-dom"
import "bootstrap/dist/css/bootstrap.css"

//分页组件
class Pagination extends Component{
    constructor(props){
        super(props);
        this.state = { current: this.props.pageNum};
    }
    changePage = (n)=>{
        this.setState({
            current:n
        });
    }
    render(){
        let lis = [];
        if(this.state.current>1){
            lis.push(<PagesItem key={this.props.totalPage-1} i={this.props.totalPage-1} changePage={this.changePage} current={this.state.current}><span aria-hidden="true">&laquo;</span></PagesItem>);
            // lis.push(<li key={0} onClick={()=>this.changePage(this.state.current-1)}>
            //     <a href="#" aria-label="Previous">
            //         <span aria-hidden="true">&laquo;</span>
            //     </a>
            // </li>);
        }
        for(let i=1;i<=this.props.totalPages;i++){
            lis.push(<PagesItem key={i} i={i} changePage={this.changePage} current={this.state.current}>{i}</PagesItem>);
        }
        if(this.state.current<this.props.totalPages){
            lis.push(<PagesItem key={this.props.totalPage+1} i={this.props.totalPage+1} changePage={this.changePage} current={this.state.current}><span aria-hidden="true">&raquo;</span></PagesItem>);
            // lis.push(<li key={this.props.totalPage+1}  onClick={()=>this.changePage(this.state.current+1)}>
            //     <a href="#" aria-label="Next">
            //         <span aria-hidden="true">&raquo;</span>
            //     </a>
            // </li>);
        }
        return (
            <nav style={{textAlign:'center'}}>
                <ul className="pagination">
                    {
                        lis
                    }
                </ul>
            </nav>
        );
    }
}
//ui组件  木偶组件  傻瓜组件
class PagesItem extends Component{
    render(){
        let {i,changePage,current} = this.props;
        return (
            <li key={i} className={i===current?"active":""} onClick={()=>changePage(i)}><a href="#">{this.props.children}</a></li>
        );
    }
}
render(<Pagination pageNum={5} totalPages={5} />,document.querySelector("#root"));
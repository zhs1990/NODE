import React,{Component} from "react"
import PagesItem from "./pageItem.js"
export default class Pagination extends Component{
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
        }
        for(let i=1;i<=this.props.totalPages;i++){
            lis.push(<PagesItem key={i} i={i} changePage={this.changePage} current={this.state.current}>{i}</PagesItem>);
        }
        if(this.state.current<this.props.totalPages){
            lis.push(<PagesItem key={this.props.totalPage+1} i={this.props.totalPage+1} changePage={this.changePage} current={this.state.current}><span aria-hidden="true">&raquo;</span></PagesItem>);
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
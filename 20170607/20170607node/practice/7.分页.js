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
            lis.push(<li key={0} onClick={()=>this.changePage(this.state.current-1)}>
                <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>);
        }
        for(let i=1;i<=this.props.totalPages;i++){
            //onClick={()=>this.changePage(i)}   为了传递参数
            lis.push(<li key={i} className={i===this.state.current?"active":""} onClick={()=>this.changePage(i)}><a href="#">{i}</a></li>);
        }
        if(this.state.current<this.props.totalPages){
            lis.push(<li key={this.props.totalPage+1}  onClick={()=>this.changePage(this.state.current+1)}>
                <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>);
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
render(<Pagination pageNum={5} totalPages={5} />,document.querySelector("#root"));
import React,{Component} from "react";
import {connect} from "react-redux";
import "./App.css"
import actions from "./store/actions"
import {bindActionCreators} from "redux"
class App extends Component{
    handleChange = (event)=>{
        let val = event.target.value;
        this.props.fetchWords(val);
    }
    render(){
        return (
            <div className="container">
                <div className="logo">
                    <img src="https://www.baidu.com/img/bd_logo1.png" alt=""/>
                </div>
                <div className="search">
                    <input type="text" onChange={this.handleChange}/>
                    <button>百度一下</button>
                </div>
                <ul className="words">
                    {
                        this.props.status?<li>{this.props.status}</li>:null
                    }
                    {
                        this.props.words.map((word,index)=>(<li key={index}><a href="">{word}</a></li>))
                    }
                </ul>
            </div>
        );
    }
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(actions,dispatch)
)(App);
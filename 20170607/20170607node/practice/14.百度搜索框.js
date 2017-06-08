import React,{Component} from "react"
import {render} from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import $ from "jquery"

/*
* 知识点
* 1，react如何与后台进行数据交互
* 2，react如何跟其他框架进行配合 jquery
* */

//百度搜索框
class Suggest extends Component{
    constructor(props){
        super(props);
        //默认index是当前哪个li得到焦点
        this.state = {words:[],index:-1,wd:""};
    }
    handleChange = (event)=>{
        let wd = event.target.value;
        //把一个变量缓存在当前组件的实例上
        this.wd = wd;
        $.ajax({
            url:"http://www.baidu.com/su",
            data:{wd},//?wd=wd
            type:"GET",
            jsonp:"cb", //指定回调函数名称
            dataType:"jsonp",//数据类型
            success:(result)=>{
                this.setState({words:result.s});
            }
        });
    }
    handleKeydown = (event)=>{
        let index = this.state.index;
        if(event.keyCode===38){
            index--;
            if(index<-1){
                index = this.state.words.length-1;
            }
        }
        if(event.keyCode===40){
            index++;
            if(index>=this.state.words.length){
                index = -1;
            }
        }
        this.setState({
            index:index,
            wd:this.state.words[index]
        });
    }
    render(){
        return (
            <div className="container" style={{marginTop:'20px'}}>
                <div className="row">
                    <div className="col-md-8 col-sm-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <input type="text" value={this.state.index===-1?this.wd:this.state.wd} className="form-control" onKeyDown={this.handleKeydown} onChange={this.handleChange} />
                            </div>
                            <div className="panel-body">
                                <ul className="list-group">
                                    {
                                        this.state.words.map((word,index)=><li className={"list-group-item "+(this.state.index==index?'active':"")} key={index}>{word}</li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
render(<Suggest/>,document.querySelector("#root"));
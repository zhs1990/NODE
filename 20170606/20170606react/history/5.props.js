import React from "react"
import ReactDom from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
//props are read-only   属性参数是只读的

class Panel extends React.Component{
    render(){
        return (
            <div className="panel panel-default">
                <PanelHead head={this.props.head}  />
                <PanelBody body={this.props.body} />
                <PanelFooter footer={this.props.footer} />
            </div>
        )
    }
}
class PanelHead extends React.Component{
    render(){
        return (<div className="panel-heading">{this.props.head}</div>);
    }
}
class PanelBody extends React.Component{
    render(){
        return (<div className="panel-body">{this.props.body}</div>);
    }
}
class PanelFooter extends React.Component{
    render(){
        return (<div className="panel-footer">{this.props.footer}</div>);
    }
}
ReactDom.render(<Panel head="头" body="体" footer="尾" />,document.querySelector("#root"));




import React,{Component} from "react"
export default class SliderUl extends Component{
    render(){
        let style = {
            width:300*(this.props.images.length+1),
        };
        return (
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((item,index)=>(
                        <li className="slider" key={index}>
                            <img src={item.src} alt={item.alt} />
                        </li>
                    ))
                }
                <li className="slider" key={this.props.images.length}>
                    <img src={this.props.images[0].src} />
                </li>
            </ul>
        );
    }
}
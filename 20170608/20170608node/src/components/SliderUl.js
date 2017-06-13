import React,{Component} from "react"
export default class SliderUl extends Component{
    render(){
        let style = {
            width:300*this.props.images.length,
            left:this.props.index*-300,
            transitionDuration:this.props.speed+"s"
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
            </ul>
        );
    }
}
import React,{Component} from "react"
export default class SliderDot extends Component{
    render(){
        return (
            <ul className="dots">
                {
                    this.props.images.map((item,index)=><li
                        key={index}
                        className={"dot "+(index===this.props.index?'active':"")}
                        onClick={()=>this.props.turn(index-this.props.index)}
                    >{index+1}</li>)
                }
            </ul>
        );
    }
}
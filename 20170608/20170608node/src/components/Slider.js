import React,{Component} from "react"
import './Slider.css'
import SliderUl from "./SliderUl"
import SliderDot from './SliderDot'
import SliderArrow from './SliderArrow'
export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {
            index:0
        };
    }
    componentDidMount(){
        if(this.props.autoplay){
            this.go();
        }
    }
    turn = (n)=>{//切换
        let index = this.state.index + n;
        if(index>=this.props.items.length){
            index = 0;
        }
        if(index<0){
            index = this.props.items.length-1;
        }
        this.setState({index});
    }
    go = ()=>{
        this.$timer = setInterval(()=>{
            this.turn(1);
        },this.props.delay*1000);
    }
    render(){
        let sliderOptions = {};
        let SliderUlOptions = {
            index:this.state.index,
            speed:this.props.speed,
            images:this.props.items
        };
        let SliderDotOptions = {
            images:this.props.items,
            index:this.state.index,
            turn:this.turn
        };
        if(this.props.pause){
            sliderOptions.onMouseOver = ()=>clearInterval(this.$timer);
            sliderOptions.onMouseOut = this.go;
        }
        return (
            <div className="slider-wrapper" {...sliderOptions}>
                <SliderUl {...SliderUlOptions}/>
                {
                    this.props.dots?<SliderDot {...SliderDotOptions}/>:""
                }
                {
                    this.props.arrows?<SliderArrow turn={this.turn} />:""
                }
            </div>
        );
    }
}
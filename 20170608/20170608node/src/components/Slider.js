import React,{Component} from "react"
import './Slider.css'
import SliderUl from "./SliderUl"
import SliderDot from './SliderDot'
import SliderArrow from './SliderArrow'
import $ from "jquery"
export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state = {
            index:0
        };
    }
    componentDidMount(){
        this.$sliders =  $('.sliders');
        if(this.props.autoplay){
            this.go();
        }
    }
    turn = (n)=>{//切换
        let index = this.state.index + n;
        if(index>=this.props.items.length+1){
            this.$sliders.css('left',0);
            index = 1;
        }
        if(index<0){
            this.$sliders.css('left',this.props.items.length*-300);
            index = this.props.items.length-1;
        }
        this.$sliders.stop().animate({left:index * -300},this.props.speed*1000);
        this.setState({index});
    }
    go = ()=>{
        this.$timer = setInterval(()=>{
            this.turn(1);
        },this.props.delay*1000);
    }
    render(){
        console.log(this.props.items)
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
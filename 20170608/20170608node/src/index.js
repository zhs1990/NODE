import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import Slider from "./components/Slider"
const IMAGE_DATA = [
    {
        src: require('./images/1.jpg'),
        alt: 'images-1',
    },
    {
        src: require('./images/2.jpg'),
        alt: 'images-2',
    },
    {
        src: require('./images/3.jpg'),
        alt: 'images-3',
    },
    {
        src: require('./images/4.jpg'),
        alt: 'images-4'
    }
];
render(<Slider
    items={IMAGE_DATA}  //图片数组
    speed={1.2}  //切换速度
    delay={2.1}  //轮播间隔时间
    pause={true} //是否鼠标移入轮播图停止切换
    autoplay={true} //是否自动播放
    dots={true}  //是否带有切换小点点
    arrows={true}  //是否显示箭头
/>,document.getElementById("root"));
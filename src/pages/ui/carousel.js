import React, {Component} from "react"
import {Card,Carousel} from 'antd'


export default class CarouselPage extends Component {
    render() {
        return (
            <>
            <Card title='文字背景轮播' className='carousel'>
                <Carousel >
                    <div><h3>React</h3></div>
                    <div><h3>Vue</h3></div>
                    <div><h3>Angular</h3></div>
                    <div><h3>Others</h3></div>
                </Carousel>
            </Card>
                <Card title='图片轮播' className='imgCarousel'>
                    <Carousel autoplay>
                        <img src='/carousel-img/carousel-1.jpg' alt='img'/>
                        <img src='/carousel-img/carousel-2.jpg' alt='img'/>
                        <img src='/carousel-img/carousel-3.jpg' alt='img'/>
                    </Carousel>
                </Card>
                </>
        )
    }
}

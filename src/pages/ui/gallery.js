import React, {Component} from "react"
import './ui.less'
import {Card} from 'antd'
const {Meta} =Card

export default class Gallery extends Component {
        render() {
            const images=[]
            for(let i=1;i<=25;i++){
                images.push(i)
            }
        return (
            <div className='gallery'>
                {
            images.map(item=>
                <Card
                    key={item}
                    hoverable
                    cover={<img alt="example" src={`/gallery/${item}.png`} />}
                >
                    <Meta
                        title="gallery"
                        description="from Internet"
                    />
                </Card>
                )}
            </div>
        )
    }
}

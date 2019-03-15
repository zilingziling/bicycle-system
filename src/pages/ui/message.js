import React, {Component} from "react"
import {message, Card, Button} from 'antd'



export default class Messages extends Component {
    globalMessage = (type) => {
        message[type]('恭喜你，React课程晋级成功');
    };

    render() {
        return (
            <Card title='全局提示框' className='messages'>
                <Button onClick={()=>this.globalMessage('success')} type='primary'>Success</Button>
                <Button onClick={()=>this.globalMessage('info')} type='primary'>Info</Button>
                <Button onClick={()=>this.globalMessage('warning')} type='primary'>Warning</Button>
                <Button onClick={()=>this.globalMessage('error')} type='primary'>Error</Button>
                <Button type='primary' onClick={()=>this.globalMessage('loading')}>Loading</Button>
            </Card>

        )
    }
}

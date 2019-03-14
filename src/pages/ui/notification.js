import React, {Component} from "react"
import {Card,Button,notification} from 'antd'

const openNotificationWithIcon = (type,position='topRight') => {
    notification.config({
        placement:position
    })
    notification[type]({
        message: '发工资了',
        description: '上个月考勤22天，迟到12天，实发工资250，请笑纳',
    });
};
export default class Notice extends Component {
    render() {
        return (
            <div className='notice'>
            <Card title='通知提醒框'>
                <Button onClick={() => openNotificationWithIcon('success')} type='primary'>Success</Button>
                <Button onClick={() => openNotificationWithIcon('info')} type='primary'>Info</Button>
                <Button onClick={() => openNotificationWithIcon('warning')} type='primary'>Warning</Button>
                <Button onClick={() => openNotificationWithIcon('error')} type='primary'>Error</Button>
            </Card>
                <Card title='通知提醒框'>
                    <Button onClick={() => openNotificationWithIcon('success','topLeft')} type='primary'>Success</Button>
                    <Button onClick={() => openNotificationWithIcon('success','topLeft')} type='primary'>Info</Button>
                    <Button onClick={() => openNotificationWithIcon('success','topLeft')} type='primary'>Warning</Button>
                    <Button onClick={() => openNotificationWithIcon('success','topLeft')} type='primary'>Error</Button>
                </Card>
                </div>
        )
    }
}

import React, { Component } from "react";
import { Card, Button,Radio } from "antd";
import "./ui.less";
const RadioGroup=Radio.Group
export default class Buttons extends Component {
    state={
        size:"large"
    }
    handleSizeChange=(e)=>{
        this.setState({
            size:e.target.value
        })
    }
  render() {
        const {size} =this.state
    return (
      <div className='buttons'>
        <Card title="基础按钮">
          <Button type="primary">primary</Button>
          <Button>primary</Button>
          <Button type="dashed">dashed</Button>
          <Button type="danger">danger</Button>
          <Button type="disabled">disabled</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button icon="delete">删除</Button>
          <Button icon="search" shape="circle" />
          <Button icon="search" type="primary">
            搜索
          </Button>
          <Button icon="download" type="primary">
            下载
          </Button>
        </Card>
        <Card title="Loading按钮">
          <Button icon="loading" type="primary">
            确定
          </Button>
          <Button icon="loading" shape="circle" type="primary" />
          <Button icon="loading">点击加载</Button>
          <Button icon="loading" shape="circle" />
          <Button type="primary">关闭</Button>
        </Card>
        <Card title="按钮组">
          <Button icon="left" type="primary">
            返回
          </Button>
          <Button icon="right" type="primary">
            确定
          </Button>
        </Card>
          <Card title="按钮尺寸">
              <RadioGroup onChange={this.handleSizeChange} defaultValue='large'>
                  <Radio value='small'>小</Radio>
                  <Radio value='default' >中</Radio>
                  <Radio value='large' >大</Radio>
              </RadioGroup>
              <Button size={size} >primary</Button>
              <Button size={size} type="dashed">dashed</Button>
              <Button size={size} type="danger">danger</Button>
              <Button size={size} type="disabled">disabled</Button>
          </Card>
      </div>
    );
  }
}

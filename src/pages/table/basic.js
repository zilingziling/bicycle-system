import React, { Component } from "react";
import { Card, Table } from "antd";
import axios from "axios";
export default class Basic extends Component {
    state={}
  request = () => {
    const baseUrl =
      "https://www.easy-mock.com/mock/5c9098e174c104191ac42aea/bicycleSystem";
    axios.get(baseUrl+'/basicTable').then(res=>{
        if(res.status===200 && res.data.code===200){
            this.setState({
                basicTable:res.data.result
            })
        }
    }).catch(error=>console.log(error))
  };
  componentDidMount() {
      this.request()
  }

    render() {
    const columns = [
      {
        title: "id",
        key: "id",
        dataIndex: "id"
      },
      {
        title: "用户名",
        key: "userName",
        dataIndex: "userName"
      },
      {
        title: "性别",
        key: "sex",
        dataIndex: "sex"
      },
      {
        title: "状态",
        key: "state",
        dataIndex: "state"
      },
      {
        title: "爱好",
        key: "interest",
        dataIndex: "interest"
      },
      {
        title: "生日",
        key: "birthday",
        dataIndex: "birthday"
      },
      {
        title: "地址",
        key: "address",
        dataIndex: "address"
      },
      {
        title: "早起时间",
        key: "time",
        dataIndex: "time"
      }
    ];
        const {basicTable} =this.state
        return (
      <div>
        <Card title="基础表格">
          <Table bordered columns={columns} dataSource={basicTable} rowKey='id'/>
        </Card>
      </div>
    );
  }
}

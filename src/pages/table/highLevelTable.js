import React, { Component } from "react";
import { Card, Table } from "antd";
import axios from "axios";
export default class HighLevelTable extends Component {
  state = {};
  request = () => {
    const baseUrl =
      "https://www.easy-mock.com/mock/5c9098e174c104191ac42aea/bicycleSystem";
    axios
      .get(baseUrl + "/basicTable")
      .then(res => {
        if (res.status === 200 && res.data.code === 200) {
          this.setState({
            highLevelTable: res.data.result
          });
        }
      })
      .catch(error => console.log(error));
  };
  componentDidMount() {
    this.request();
  }

  render() {
    const { highLevelTable } = this.state;
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
        render(text, record, index) {
          if (text.sex === 1) return "男";
          else return "女";
        }
      },
      {
        title: "状态",
        key: "state",
        render(text, record, index) {
          switch (text.state) {
            case 1:
              return "咸鱼一条";
            case 2:
              return "风华浪子";
            case 3:
              return "创业者";
            case 4:
              return "CEO";
            case 5:
              return "职场萌新";
          }
        }
      },
      {
        title: "爱好",
        key: "interest",
        render(text, record, index) {
          switch (text.state) {
            case 1:
              return "享受世界各地美食";
            case 2:
              return "看遍世界各地风景";
            case 3:
              return "追剧追星追综艺";
            case 4:
              return "穿衣搭配";
            case 5:
              return "摄影";
            case 6:
              return "看书看电影";
            case 7:
              return "平面设计";
            case 8:
              return "室内设计";
          }
        }
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
    const secondColumns = [
      {
        title: "id",
        key: "id",
        dataIndex: "id",
        fixed: "left",
          width:50,
      },
      {
        title: "用户名",
        key: "userName",
        dataIndex: "userName",
        fixed: "left",
          width:100,
      },

      {
        title: "状态",
        key: "state",
          width:200,
        render(text, record, index) {
          switch (text.state) {
            case 1:
              return "咸鱼一条";
            case 2:
              return "风华浪子";
            case 3:
              return "创业者";
            case 4:
              return "CEO";
            case 5:
              return "职场萌新";
          }
        }
      },

      {
        title: "状态",
        key: "state",
          width:200,
        render(text, record, index) {
            const config={
                "1":"咸鱼一条",
                "2":"名校毕业",
                "3":'风华浪子',
                "4":"×二代",
                "5":"二次元"
            }
            return config[text.state]
          }

      },

      {
        title: "爱好",
        key: "interest",
          width:200,
        render(text, record, index) {
          switch (text.state) {
            case 1:
              return "享受世界各地美食";
            case 2:
              return "看遍世界各地风景";
            case 3:
              return "追剧追星追综艺";
            case 4:
              return "穿衣搭配";
            case 5:
              return "摄影";
            case 6:
              return "看书看电影";
            case 7:
              return "平面设计";
            case 8:
              return "室内设计";
          }
        }
      },
      {
        title: "爱好",
        key: "interest",
          width:200,
        render(text, record, index) {
          switch (text.state) {
            case 1:
              return "享受世界各地美食";
            case 2:
              return "看遍世界各地风景";
            case 3:
              return "追剧追星追综艺";
            case 4:
              return "穿衣搭配";
            case 5:
              return "摄影";
            case 6:
              return "看书看电影";
            case 7:
              return "平面设计";
            case 8:
              return "室内设计";
          }
        }
      },
      {
        title: "爱好",
        key: "interest",
          width:200,
        render(text, record, index) {
          switch (text.state) {
            case 1:
              return "享受世界各地美食";
            case 2:
              return "看遍世界各地风景";
            case 3:
              return "追剧追星追综艺";
            case 4:
              return "穿衣搭配";
            case 5:
              return "摄影";
            case 6:
              return "看书看电影";
            case 7:
              return "平面设计";
            case 8:
              return "室内设计";
          }
        }
      },

      {
        title: "早起时间",
        key: "time",
        dataIndex: "time",
          width:100,
      },
      {
        title: "生日",
        key: "birthday",
        dataIndex: "birthday",
          width:100,
      },

      {
        title: "生日",
        key: "birthday",
        dataIndex: "birthday",
          width:100,
      },
      {
        title: "早起时间",
        key: "time",
        dataIndex: "time",
          width:100,
      },
      {
        title: "生日",
        key: "birthday",
        dataIndex: "birthday",
          width:100,
      },

      {
        title: "生日",
        key: "birthday",
        dataIndex: "birthday",
          width:100,
      },
        {
            title: "早起时间",
            key: "time",
            dataIndex: "time",
            width:100,
        },
        {
            title: "生日",
            key: "birthday",
            dataIndex: "birthday",
            width:100,
        },

        {
            title: "生日",
            key: "birthday",
            dataIndex: "birthday",
        }
    ];
    return (
      <>

        <Card title="左侧固定">
          <Table
            dataSource={highLevelTable}
            columns={secondColumns}
            scroll={{ x: 2100, y: 300 }}
            rowKey="userName"
          />
        </Card>
      </>
    );
  }
}

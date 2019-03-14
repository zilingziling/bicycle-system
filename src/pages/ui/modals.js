import React, { Component } from "react";
import { Card, Button, Modal } from "antd";
import "./ui.less";
const confirm =Modal.confirm
export default class Modals extends Component {
  state = {
    firstV: false,
    secondV: false,
    thirdV: false,
    fourthV: false,
      };
  showModal = (e, modal) => {
    this.setState({
      [modal]: true
    });
  };

  handleOk = (e, modal) => {
    this.setState({
      [modal]: false
    });
  };

  handleCancel = (e, modal) => {
    this.setState({
      [modal]: false
    });
  };
    showConfirm=()=> {
        confirm({
            title: '确定?',
            content: '你确定你学会react了吗？',
            onOk() {

            },
            onCancel() {

            },
        });
    }
   info=()=> {
        Modal.info({
            title: '确定？',
            content: '你确定你学会react了吗？',
            onOk() {},
        });
    }
    success=()=> {
        Modal.success({
            title: '确定？',
            content: '你确定你学会react了吗？',
        });
    }
    warning=()=>{
        Modal.warning({
            title: '确定？',
            content: '你确定你学会react了吗？',
        });
    }
    render() {
    return (
      <>
        <Modal
          title="React"
          visible={this.state.firstV}
          onOk={e => this.handleOk(e, "firstV")}
          onCancel={e => this.handleCancel(e, "firstV")}
         >
          <p>欢迎学习慕课新推出的React高级课程</p>
        </Modal>
        <Modal
          title="React"
          visible={this.state.secondV}
          onOk={e => this.handleOk(e, "secondV")}
          onCancel={e => this.handleCancel(e, "secondV")}
          footer={[
              <Button key="cancel" onClick={e => this.handleOk(e, "secondV")}>算了</Button>,
              <Button key="ok" type="primary"  onClick={e => this.handleCancel(e, "secondV")}>
                  好的
              </Button>,
          ]}
        >
          <p>欢迎学习慕课新推出的React高级课程</p>
        </Modal>
          <Modal
              title="React"
              style={{top:20}}
              visible={this.state.thirdV}
              onOk={e => this.handleOk(e, "thirdV")}
              onCancel={e => this.handleCancel(e, "thirdV")}
          >
              <p>欢迎学习慕课新推出的React高级课程</p>
          </Modal>
          <Modal
              title="React"
              centered
              visible={this.state.fourthV}
              onOk={e => this.handleOk(e, "fourthV")}
              onCancel={e => this.handleCancel(e, "fourthV")}
          >
              <p>欢迎学习慕课新推出的React高级课程</p>
          </Modal>
        <Card title="基础模态框" className="modals">
          <Button
            type="primary"
            htmlType="button"
            onClick={e => this.showModal(e, "firstV")}
          >
            Open
          </Button>
          <Button type="primary" htmlType="button"
                  onClick={e => this.showModal(e, "secondV")}
          >
            自定义页脚
          </Button>
          <Button type="primary" htmlType="button" onClick={e => this.showModal(e, "thirdV")}>
            顶部20px弹窗
          </Button>
          <Button type="primary" htmlType="button" onClick={e => this.showModal(e, "fourthV")}>
            水平垂直居中
          </Button>
        </Card>
          <Card title="信息确认框" className="modals">
              <Button
                  type="primary"
                  htmlType="button"
                  onClick={this.showConfirm}
              >
                  Confirm
              </Button>
              <Button type="primary" htmlType="button"
                      onClick={this.info}
              >
                  Info
              </Button>
              <Button type="primary" htmlType="button" onClick={this.success}>
                  Success
              </Button>
              <Button type="primary" htmlType="button" onClick={this.warning}>
                  Waring
              </Button>
          </Card>
      </>
    );
  }
}

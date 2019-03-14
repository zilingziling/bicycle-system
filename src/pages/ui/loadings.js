import React, { Component } from "react";
import { Card, Spin, Icon,Alert } from "antd";
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
export default class Loadings extends Component {
  render() {
    return (
      <>
        <Card title="Spin用法" className="loadings">
          <Spin size="small" />
          <Spin />
          <Spin size="large" />
          <Spin indicator={antIcon} />
        </Card>
          <Card title="内容遮罩" className="loadings">
              <Alert
                  message="React"
                  description="欢迎来到React高级实战课程"
                  type="info"
              />
              <Spin>
              <Alert
                  message="React"
                  description="欢迎来到React高级实战课程"
                  type="info"
              />
              </Spin>
              <Spin tip='加载中...'>
                  <Alert
                      message="React"
                      description="欢迎来到React高级实战课程"
                      type="info"
                  />
              </Spin>
              <Spin indicator={antIcon}>
                  <Alert
                      message="React"
                      description="欢迎来到React高级实战课程"
                      type="info"
                  />
              </Spin>
          </Card>
      </>
    );
  }
}

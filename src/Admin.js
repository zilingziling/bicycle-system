import React, { Component } from "react";
import "./Admin.less";
import { Col, Row } from "antd";
import NavLeft from "./components/NavLeft";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import "antd/dist/antd.min.css"
class Admin extends Component {
  render() {
    return (
      <>
        <Row className="main">
          <Col span={4} className="navLeft">
            <NavLeft />
          </Col>
          <Col span={20} className="rightContent">
            <Header />
            {this.props.children}
            <Footer />
          </Col>
        </Row>
      </>
    );
  }
}

export default Admin;

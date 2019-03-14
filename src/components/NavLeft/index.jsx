import React, { Component } from "react";
import { Row, Menu } from "antd";
import {NavLink} from 'react-router-dom'
import menuList from "../../config/menuConfig";
import "./index.less";

const SubMenu = Menu.SubMenu;
export default class NavLeft extends Component {
  menuRender = menuList =>
    menuList.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {this.menuRender(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
            <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  render() {
    return (
      <>
        <Row className="logo">
          <a>
            <img src="/assets/logo-ant.svg" />
            <h1>Bicycle System</h1>
          </a>
        </Row>
        <Row >
          <div className="nav">
            <Menu theme="dark">{this.menuRender(menuList)}</Menu>
          </div>
        </Row>
      </>
    );
  }
}

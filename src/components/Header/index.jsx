import React, { Component } from "react";
import "./index.less";
export default class Header extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="headerTop">
            <p>
              欢迎，<span>河畔一角</span>
            </p>
            <a href="#">退出</a>
          </div>
          <div className="headerBottom">
            <div className="breadCrumb">弹框</div>
            <div className='time'>2019-3-12 17:32:26</div>
          </div>
        </div>
      </>
    );
  }
}

import React, { Component } from "react";
import "./index.less";
import utils from '../../utils/utils'
import Axios from '../../axios'
export default class Header extends Component {
  state={
    time:'',
    weatherInfo:{}
  }
  getWeatherData=()=>{
    const {jsonp}=new Axios()
    const city='成都'
    jsonp({
      url:"http://api.map.baidu.com/telematics/v3/weather?location="+encodeURIComponent(city)+"&output=json&ak=3p49MVra6urFRGOT9s8UBWr2"
    }).then((data)=>{
      this.setState({
        weatherInfo:data[0]
      })
    })
  }
  componentDidMount() {
    setInterval(()=>{
      let time=utils.formateDate(new Date())
      this.setState({
        time
      })
    },1000)
    //   获取天气
    this.getWeatherData()
  }
  render() {
    const {time,weatherInfo}=this.state
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
            <div className="breadCrumb">首页</div>
            <div className='time'>
              <span>{time}</span>
              <img src={weatherInfo.weather_data&&weatherInfo.weather_data[0].dayPictureUrl} />
              <span>{weatherInfo.weather_data&&weatherInfo.weather_data[0].weather}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

import React, {Component} from "react"

const homeStyle={
    width:'calc(100% - 40px)',
    margin:"20px",
    backgroundColor:'#fff',
    height:'65.5vh',
    textAlign:"center",
    lineHeight:'65.5vh',
    fontSize:'18px'
    }
export default class Index extends Component {
    render() {
        return (

            <div style={homeStyle}>欢迎来到ziling练手的后台管理系统</div>
        )
    }
}

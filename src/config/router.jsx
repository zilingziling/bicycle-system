import React, {Component} from "react"
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import App from '../App'
import Admin from "../Admin";
import Login from '../pages/Login'
export default class MyRouter extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Route path='/login' component={Login}/>
                    <Route path='/admin' component={Admin}/>
                </App>
            </Router>
        )
    }
}

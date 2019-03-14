import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import App from "../App";
import Admin from "../Admin";
import Login from "../pages/Login";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import Buttons from "../pages/ui/button";
import Modals from "../pages/ui/modals";
import Loadings from "../pages/ui/loadings";
import Notice from '../pages/ui/notification'
import Messages from "../pages/ui/message";
export default class MyRouter extends Component {
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" component={Login} />
          <Route
            path="/"
            render={() => (
              <Admin>
                  <Switch>
                      <Route path="/home" component={Home} />
                      <Route path='/ui/buttons' component={Buttons}/>
                      <Route path='/ui/modals' component={Modals}/>
                      <Route path='/ui/loadings' component={Loadings}/>
                      <Route path='/ui/notification' component={Notice}/>
                      <Route path='/ui/messages' component={Messages}/>
                      <Route component={NoMatch} />
                </Switch>
              </Admin>
            )}
          />
        </App>
      </Router>
    );
  }
}

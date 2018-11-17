import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import Login from "./containers/login";

export default class App extends Component {
  private routes = [
    {
      path: "/",
      component: Home,
      exact: true
    },
    {
      path: "/login",
      component: Login,
      exact: true
    }
  ];

  render() {
    return (
      <BrowserRouter>
        <div className="root" role="main">
          <Switch>
            {this.routes.map((props, index) => (
              <Route key={index} {...props} />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

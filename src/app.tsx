import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import Login from "./containers/login";
import Dashboard from "./containers/dashboard";
import CheckIn from "./containers/check_in";
import Summary from "./containers/summary";
import DrugAdministration from "./containers/drug_administration";

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
    },
    {
      path: "/dashboard",
      component: Dashboard,
      exact: true
    },
    {
      path: "/check-in",
      component: CheckIn,
      exact: true
    },
    {
      path: "/summary",
      component: Summary,
      exact: true
    },
    {
      path: "/drug-administration",
      component: DrugAdministration,
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

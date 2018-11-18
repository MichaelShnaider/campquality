import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./containers/home";
import Login from "./containers/login";
import Dashboard from "./containers/dashboard";
import CheckIn from "./containers/check_in";
import Summary from "./containers/summary";
import DrugAdministration from "./containers/drug_administration_search";
import CamperCheckIn from "./containers/camper_check_in";
import DrugAdministrationSummary from "./containers/drug_administration_summary";
import DrugAdminProfile from "./containers/drug_administration_profile";

export default class App extends Component {
  private routes = [
    {
      path: "/",
      component: Login,
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
    },
    {
      path: "/check-in/:camper_id",
      component: CamperCheckIn,
      exact: true
    },
    {
      path: "/drug-administration-summary/:camper_id",
      component: DrugAdministrationSummary,
      exact: true
    },
    {
      path: "/drug-administration/:camper_id",
      component: DrugAdminProfile,
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

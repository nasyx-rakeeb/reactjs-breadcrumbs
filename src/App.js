import React from "react";
import "./styles.css";
import Home from "./Home";
import About from "./About";
import { Route, Switch } from "react-router-dom";
import Jobs from "./Jobs";
import Engineer from "./Engineer";
import Marketer from "./Marketer";
import Designer from "./Designer";
import Breadcrumbs from "./Breadcrumbs";

export default function App() {
  return (
    <>
      <Breadcrumbs />
      <Switch>
        <Route exact from="/" render={props => <Home {...props} />} />
        <Route exact path="/about" render={props => <About {...props} />} />
        <Route exact path="/jobs" render={props => <Jobs {...props} />} />
        <Route
          exact
          path="/jobs/engineer"
          render={props => <Engineer {...props} />}
        />
        <Route
          exact
          path="/jobs/marketer"
          render={props => <Marketer {...props} />}
        />
        <Route
          exact
          path="/jobs/designer"
          render={props => <Designer {...props} />}
        />
      </Switch>
    </>
  );
}

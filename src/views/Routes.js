import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./calculation/Dashboard";

import SignIn from "./login/SignIn";
//import history from "../views/history";

export default class Routes extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

  render() {
    return (
      <Router>
        <Switch>
          <Route  path="/" exact component={SignIn} />

          <Route
            
            exact
            path="/calc"
            component={Dashboard}
          />
          

        </Switch>
      </Router>
    );
  }
}

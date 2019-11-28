import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/css/animate.min.css";
import "assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "assets/css/demo.css";
import "assets/css/pe-icon-7-stroke.css";

import Mentor from "components/Layouts/Mentor.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/mentor"
        render={routeProps => <Mentor {...routeProps} />}
      ></Route>
      <Redirect from="/" to="mentor/editcourse" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

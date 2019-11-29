import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../routes";
import UserHome from "components/Screens/UserHome/UserHome.js";
import UserCourses from "components/Screens/UserCourses/UserCourses.js";
import NavbarsUser from "components/Navbars/User/NavbarsUser.js";

export class User extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>User Layout</h1>
        <NavbarsUser />
        <div>
          <Switch>
            <Route
              exact
              path="/user/home"
              render={routeProps => <UserHome {...routeProps} />}
            ></Route>
            <Route
              path="/user/courses"
              render={routeProps => <UserCourses {...routeProps} />}
            ></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default User;

import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Sidebar from "components/Sidebar/Sidebar";
import { style } from "variables/Variables.js";
import NotificationSystem from "react-notification-system";
import AdminNavbar from "components/Navbars/AdminNavbar";
import image from "assets/img/sidebar-3.jpg";

import routes from "routes.js";

class Mentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      image: image,
      color: "black",
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open"
    };
  }

  handleNotificatoinClick = position => {
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "sucess";
        break;
      case 2:
        level = "warning";
        break;
      case 3:
        level = "error";
        break;
      case 4:
        level = "info";
        break;
    }

    this.state._notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to our <b>house</b>
        </div>
      ),
      level: level,
      position: position,
      autoDismiss: 15
    });
  };

  getRoutes = routes => {
    return routes
      ? routes.map((prop, key) => {
          if (prop.layout === "/mentor") {
            return (
              <Route
                path={prop.layout + prop.path}
                render={routeProps => <prop.component {...routeProps} />}
                exact={prop.exact}
                key={key}
              />
            );
          } else {
            return null;
          }
        })
      : console.log("Can't get routes");
  };

  handleImageClick = image => {
    this.setState({ image: image });
  };
  handleColorClick = color => {
    this.setState({ color: color });
  };
  handleHasImage = hasImage => {
    this.setState({ hasImage: hasImage });
  };

  render() {
    return (
      <div className="wrapper">
        <NotificationSystem ref="notificationSystem" style={style} />
        <Sidebar
          {...this.props}
          image={this.state.image}
          color={this.state.color}
          hasImage={this.state.hasImage}
        />
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar {...this.props} brandText="Create Courses" />
          <Switch>{this.getRoutes(routes)}</Switch>
        </div>
      </div>
    );
  }
}

export default Mentor;

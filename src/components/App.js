import React, { Component } from "react";
import FormTexteditor from "components/Form/Texteditor/Texteditor.js";
import Sidebar from "components/Sidebar/Sidebar";
import { style } from "variables/Variables.jsx";
import NotificationSystem from "react-notification-system";

import image from "assets/img/sidebar-3.jpg";

class App extends Component {
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
  handleImageClick = image => {
    this.setState({ image: image });
  };
  handleColorClick = color => {
    this.setState({ color: color });
  };
  handleHasImage = hasImage => {
    this.setState({ hasImage: hasImage });
  };
  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown")
      this.setState({ fixedClasses: "dropdown show-dropdown open" });
    else this.setState({ fixedClasses: "dropdown" });
  };
  componentDidMount() {
    this.setState({ _notificationSystem: this.refs.notificationSystem });
    var _notificationSystem = this.refs.notificationSystem;
    var color = Math.floor(Math.random() * 4 + 1);
    var level;
    switch (color) {
      case 1:
        level = "success";
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
      default:
        break;
    }
    _notificationSystem.addNotification({
      title: <span data-notify="icon" className="pe-7s-gift" />,
      message: (
        <div>
          Welcome to <b>Boomer World</b> - a beautiful website using
          gamification to training every web developer.
        </div>
      ),
      level: level,
      position: "tr",
      autoDismiss: 15
    });
  }

  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
    }
  }
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
        <h1>My React App!</h1>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <FormTexteditor></FormTexteditor>
        </div>
      </div>
    );
  }
}

export default App;

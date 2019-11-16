import React, { Component } from "react";
import FormTexteditor from "components/Form/Texteditor/Texteditor.js";
import "styles/App.css";
import Sidebar from "components/Sidebar/Sidebar";
import image from "assets/img/sidebar-3.jpg";
import { style } from "variables/Variables.jsx";
import NotificationSystem from "react-notification-system";

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
    _notificationSystem.addNotification({
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
        ><h1>My React App!</h1>
        <FormTexteditor></FormTexteditor>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import FormTexteditor from "components/Form/Texteditor/Texteditor.js";
import { Main as MainLayout, Minimal as MinimalLayout } from "layouts";
import "styles/App.css";

class App extends Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <FormTexteditor></FormTexteditor>
      </div>
    );
  }
}

export default App;

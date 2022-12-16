import React, { Component } from "react";
import { render } from "react-dom";
import WelcomePage from "./WelcomePage";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <WelcomePage />
      </div>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
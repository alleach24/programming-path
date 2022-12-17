import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Quotable from "./Quotable";


export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="welcome">
        {/* <h1>This is the welcome page</h1> */}

        <div id="quote">
          <Quotable />
        </div>

        <div id="challenge">
          <h2>Learning is a lifelong journey. Do you accept?</h2>
          <Link to="/login" class="links">I accept this challenge</Link>
        </div>
      </div>
    );
  }
}
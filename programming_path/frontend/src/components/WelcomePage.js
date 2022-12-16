import React, { Component } from "react";
import HomePage from "./HomePage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<p>This is the welcome page</p>}></Route>
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </Router>
    );
  }
}
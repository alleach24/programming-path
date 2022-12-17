import React, { Component } from "react";
import { render } from "react-dom";
import WelcomePage from "./WelcomePage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import ProjectsPage from "./ProjectsPage"
import Project from "./Project"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectID" element={<Project />} />
        </Routes>
      </Router>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
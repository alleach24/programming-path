import React, { Component } from "react";
import { render } from "react-dom";
import WelcomePage from "./WelcomePage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import ProjectsPage from "./ProjectsPage"
import Project from "./Project"
import AddProjectIdea from "./AddProjectIdea"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MainNavbar from "./MainNavbar"


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MainNavbar />
        <Router>
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route path="/add-project-idea" element={<AddProjectIdea />} />
          <Route path="/project/:projectID" element={<Project />} />
        </Routes>
      </Router>
      </div>
      
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
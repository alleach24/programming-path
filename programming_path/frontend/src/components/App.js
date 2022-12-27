import React, { Component } from "react";
import { render } from "react-dom";
import WelcomePage from "./WelcomePage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import LoginNewUserPage from "./LoginNewUserPage"
import ProjectsPage from "./ProjectsPage"
import Project from "./Project"
import ProjectEdit from "./ProjectEdit"
import TasksPage from "./TasksPage"
import TaskEdit from "./TaskEdit"
import Task from "./Task"
import PathPage from "./PathPage"
import PlanEdit from "./PlanEdit"
import Resources from "./Resources"

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="page">
        <Router>
          <Routes>

            <Route exact path="/" element={<WelcomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
            <Route path="/tasks" element = {<TasksPage />} />
            <Route path="/mypath" element= {<PathPage />} />
            <Route path="/resources" element={<Resources />} />
            
          </Routes>
        </Router>
      </div>
      
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
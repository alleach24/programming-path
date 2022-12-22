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
      <div>
        <Router>
        <Routes>

          <Route exact path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path='/register' element={<LoginNewUserPage />} />
          {/* <Route exact path="/visitor" element={<WelcomePage />} />
          <Route path="/visitor/login" element={<LoginPage />} />
          <Route path='/visitor/register' element={<LoginNewUserPage />} /> */}

          <Route path="/home" element={<HomePage />} />

          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectID" element={<Project />} />
          <Route path="/project/edit/:projectID" element={<ProjectEdit />} />

          <Route path="/tasks" element = {<TasksPage />} />
          <Route path="/task/:taskID" element={<Task />} />
          <Route path="/task/edit/:taskID" element={<TaskEdit />} />

          <Route path="/mypath" element= {<PathPage />} />
          {/* <Route path="/plan/:planID" element={<Plan />} /> */}
          <Route path="/plan/edit/:planID" element={<PlanEdit />} />
          
        </Routes>
      </Router>
      </div>
      
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
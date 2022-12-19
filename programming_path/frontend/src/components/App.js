import React, { Component } from "react";
import { render } from "react-dom";
import WelcomePage from "./WelcomePage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import ProjectsPage from "./ProjectsPage"
import Project from "./Project"
import ProjectEdit from "./ProjectEdit"
import TasksPage from "./TasksPage"
import TaskAdd from "./TaskAdd"
import Task from "./Task"
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
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectID" element={<Project />} />
          <Route path="/project/edit/:projectID" element={<ProjectEdit />} />

          <Route path="/tasks" element = {<TasksPage />} />
          <Route path="/add-task" element={<TaskAdd />} />
          <Route path="/task/:taskID" element={<Task />} />

          {/* <Route path="/task/edit/:taskID" element={<TaskEdit />} /> */}
        </Routes>
      </Router>
      </div>
      
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
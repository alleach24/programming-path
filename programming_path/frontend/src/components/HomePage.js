import React, { Component } from "react";
import MainNavbar from "./MainNavbar";
import Quotable from "./Quotable";
import Plan from "./Plan"
import TasksTable from "./TasksTable"
import ProjectsTable from "./ProjectsTable"

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainNavbar />
                <h1>Welcome to the <span class="animate-character">Path of Programming</span>!</h1>
                <h3>Here to help you on your coding journey.</h3>
                <br></br>
                {/* <p>Path of Programming can help you:</p>
                <ul>
                    <li>Keep track of your project ideas</li>
                    <li>Offer resources for specific topics</li>
                    <li>Organize your task goals</li>
                    <li>Plan out your software development life!</li>
                </ul> */}
                <div id="snapshot">
                    <h3>Snapshot</h3>
                    <h5>Current Plan</h5>
                    <Plan id="1" />
                    <h5>Daily Tasks</h5>
                    <TasksTable frequency="D" />
                    <h5>Projects in Progress</h5>
                    <ProjectsTable />
                </div>
            </div>
        )
    }
}
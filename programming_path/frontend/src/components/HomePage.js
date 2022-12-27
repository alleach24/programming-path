import React, { Component } from "react";
import MainNavbar from "./MainNavbar";
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
                <div >
                    <h2>My Snapshot</h2>
                    <br></br>
                    <h5>Current Plan</h5>
                    <Plan id="8" title="Code Platoon Coding Bootcamp" description="Full stack web development bootcamp" startTime="Oct. 3, 2022" endTime="Jan. 13, 2023" />
                    <br></br>
                    <h5>Daily Tasks</h5>
                    <TasksTable frequency="D" />
                    <br></br>
                    <h5>Projects in Progress</h5>
                    <ProjectsTable />
                </div>
            </div>
        )
    }
}
import React, { Component } from "react";
import ProjectsTable from "./ProjectsTable"
import MainNavbar from "./MainNavbar";


export default class ProjectsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainNavbar />
                <h1>My Projects</h1>
                <ProjectsTable />
            </div>
        )
    }
}


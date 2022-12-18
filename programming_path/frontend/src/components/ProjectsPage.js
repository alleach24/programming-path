import React, { Component } from "react";
import ProjectsTable from "./ProjectsTable"

export default class ProjectsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>My Projects</h1>
                <ProjectsTable />
            </div>
        )
    }
}


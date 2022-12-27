import React, { Component } from "react";
import ProjectsTable from "./ProjectsTable"
import ProjectEdit from "./ProjectEdit";
import MainNavbar from "./MainNavbar";


export default class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNewIdea: false,
        }
    }

    render() {
        return (
            <div>
                <MainNavbar />
                <h1><span class="animate-character">My Projects</span></h1>
                <button class="special-button" onClick={() => {this.setState({addNewIdea:true})}}>Add new idea</button>
                {this.state.addNewIdea && (
                    <div id="pop-up">
                        <ProjectEdit projectID="new"/>
                        <button class="non-special-button" onClick={() => {this.setState({addNewIdea:false})}}>Cancel</button>
                    </div>
                )}
                <ProjectsTable />
            </div>
        )
    }
}


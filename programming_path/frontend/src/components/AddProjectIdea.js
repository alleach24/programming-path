import React, { Component } from "react";
import MainNavbar from "./MainNavbar";

export default class AddProjectIdea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainNavbar />
                <p>This is the Add Project Idea page</p>
            </div>
        )
    }
}
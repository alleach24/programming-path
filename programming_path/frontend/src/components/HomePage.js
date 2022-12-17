import React, { Component } from "react";
import MainNavbar from "./MainNavbar";
import Quotable from "./Quotable";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainNavbar />
                <p>This is the homepage</p>
                <Quotable />
            </div>
        )
    }
}
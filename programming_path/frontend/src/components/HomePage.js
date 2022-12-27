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
                <h1>Welcome to the <span class="animate-character">Path of Programming</span>!</h1>
                <h3>Here to help you on your coding journey.</h3>
                <br></br>
                <p>Path of Programming can help you:</p>
                <ul>
                    <li>Keep track of your project ideas</li>
                    <li>Offer resources for specific topics</li>
                    <li>Organize your task goals</li>
                    <li>Plan out your software development life!</li>
                </ul>
            </div>
        )
    }
}
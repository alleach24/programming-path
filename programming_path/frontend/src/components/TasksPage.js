import React, { Component } from "react";
import MainNavbar from "./MainNavbar";
import TasksTable from "./TasksTable";


export default class TasksPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MainNavbar />
                <h1>My Tasks</h1>
                <div>
                    <form action="/add-task">
                    <input type="submit" value="Add new task" />
                    </form>
                </div>
                <h3>Once only Tasks</h3>
                <TasksTable frequency="O" />
                <h3>Daily Tasks</h3>
                <TasksTable frequency="D" />
                <h3>Weekly Tasks</h3>
                <TasksTable frequency="W" />
                <h3>Monthly Tasks</h3>
                <TasksTable frequency="M" />
                <h3>Yearly Tasks</h3>
                <TasksTable frequency="Y" />
            </div>
        )
    }
}


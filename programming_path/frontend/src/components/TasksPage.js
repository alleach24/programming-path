import React, { Component } from "react";
import MainNavbar from "./MainNavbar";
import TasksTable from "./TasksTable";
import TaskEdit from "./TaskEdit"


export default class TasksPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addNewTask: false,
          }
    }   
    

    render() {
        return (
            <div>
                <MainNavbar />
                <h1>My Tasks</h1>
                <div>
                    {/* <form action="/task/edit/new">
                    <input type="submit" value="Add new task" />
                    </form> */}
                    <button class="special-button" onClick={() => {this.setState({addNewTask:true})}}>Add new task</button>
                </div>
                {this.state.addNewTask && (
                    <div id="pop-up">
                        <TaskEdit taskID="new"/>
                        <button onClick={() => {this.setState({addNewTask:false})}}>Cancel</button>
                    </div>
                )}
                <h3>Once only Tasks</h3>
                <TasksTable frequency="O" />
                <br></br>
                <h3>Daily Tasks</h3>
                <TasksTable frequency="D" />
                <br></br>
                <h3>Weekly Tasks</h3>
                <TasksTable frequency="W" />
                <br></br>
                <h3>Monthly Tasks</h3>
                <TasksTable frequency="M" />
                <br></br>
                <h3>Yearly Tasks</h3>
                <TasksTable frequency="Y" />
            </div>
        )
    }
}


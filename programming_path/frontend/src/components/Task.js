import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import MainNavbar from "./MainNavbar";

export default function Task(props) {

    const [title, setTitle] = useState("title");
    const [frequency, setFrequency] = useState("frequency");
    const [description, setDescription] = useState("description");
    const [completed, setCompleted] = useState("completed");

    const taskID = props.taskID;

    fetch('/api/get-task' + '?id=' + taskID)
        .then((response) => response.json())
        .then((data) => {
            setTitle(data.title);
            setFrequency(data.frequency);
            setDescription(data.description);
            setCompleted(data.completed);  
    });

    const navigate = useNavigate();
    const goToTaskTable = () => {
        navigate('/tasks');
    }

    const DeleteTask = (id) => {
        let path = "/api/delete-task/" + id
        fetch(path, [])
        goToTaskTable()
    }
        
    const EditTask = (id) => {
        let path = "/task/edit/" + id
        navigate(path)
    }

    const completedStatus = (completed) => {
        if (completed) {
            return "Completed"
        }
        return "Ongoing"
    }

    const frequencyStatus = (frequency) => {
        let dict = {
            "O": "Once",
            "D": "Daily",
            "W": "Weekly",
            "M": "Monthly",
            "Y": "Yearly",
        }
        return dict[frequency]
    }

    return (
        <div>
            <MainNavbar />
            <p>This a task page</p>
            <h3>Task ID: {taskID}</h3>
            <p>title: {title}</p>
            <p>Frequency: {frequencyStatus(frequency)}</p>
            <p>description: {description}</p>
            <p>Completion status: {completedStatus(completed)}</p>
            <button onClick={()=>EditTask(taskID)}>Edit</button>
            <button onClick={()=>DeleteTask(taskID)}>Delete</button>
        </div>
    )
}
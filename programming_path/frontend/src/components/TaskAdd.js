import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import MainNavbar from "./MainNavbar"
import Cookies from 'js-cookie';

export default function TaskAdd() {

    const [title, setTitle] = useState("");
    const [frequency, setFrequency] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompletion] = useState("");

    const SaveTask = async () => {
        const csrftoken = Cookies.get('csrftoken');
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            mode: 'same-origin',
            body: JSON.stringify({
                id: null,
                title: title,
                frequency: frequency,
                description: description,
                completed: completed,
            }),
        };
        fetch("/api/save-task/", requestOptions).then((response) => response.json()).then((data) => routeChange(data.id))
    }

    let navigate = useNavigate();
    const routeChange = (id) => {
        let path = '/task/' + id
        navigate(path)
    }

    return (
        <div>
            <MainNavbar /> 
            <h3>Add your new task!</h3>
            <div className="container">
                <div className="form-group">
                    <div className="form-control">
                        <form>
                            <label for="formTitle">Title:  </label>
                            <input type="text" id="formTitle" name="formTitle" onChange={(e) => setTitle(e.target.value)} />
                            <br />
                            <label for="formFrequency">Frequency:  </label>
                            <input type="radio" id="formFrequency1" name="formFrequency" value="O" onChange={(e) => setFrequency(e.target.value)} />
                            <label for="formFrequency1">One-time</label>
                            <input type="radio" id="formFrequency2" name="formFrequency" value="D" onChange={(e) => setFrequency(e.target.value)} />
                            <label for="formFrequency2">Daily</label>
                            <input type="radio" id="formFrequency3" name="formFrequency" value="W" onChange={(e) => setFrequency(e.target.value)} />
                            <label for="formFrequency3">Weekly</label>
                            <input type="radio" id="formFrequency4" name="formFrequency" value="M" onChange={(e) => setFrequency(e.target.value)} />
                            <label for="formFrequency4">Monthly</label>
                            <input type="radio" id="formFrequency5" name="formFrequency" value="Y" onChange={(e) => setFrequency(e.target.value)} />
                            <label for="formFrequency5">Yearly</label>
                            <br />
                            <label for="formDescription">Description:  </label>
                            <textarea type="text" id="formDescription" name="formDescription" onChange={(e) => setDescription(e.target.value)} />
                            <br />
                            <label for="formCompletion">Completion Status:  </label>
                            <input type="radio" id="formCompletionFalse" name="formCompletion" value="False" onChange={(e) => setCompletion(e.target.value)} />
                            <label for="formCompletionFalse">Ongoing</label>
                            <input type="radio" id="formCompletionTrue" name="formCompletion" value="True" onChange={(e) => setCompletion(e.target.value)} />
                            <label for="formCompletionTrue">Completed</label>
                            <br />
                        </form>
                        <button onClick={SaveTask}>Save Task</button>
                        <a href="/tasks">
                            <input type="button" value="Cancel" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
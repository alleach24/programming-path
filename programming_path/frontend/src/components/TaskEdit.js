import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';

export default function TaskEdit(props) {

    const [title, setTitle] = useState("");
    const [frequency, setFrequency] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState("");    

    const taskID = props.taskID;
    console.log(taskID)

    if (taskID !== "new") {
        fetch('/api/get-task' + '?id=' + taskID)
            .then((response) => response.json())
            .then((data) => {
                setTitle(data.title);
                setFrequency(data.frequency);
                setDescription(data.description);
                setCompleted(data.completed);                
                console.log(data)
        });
    }        
    let navigate = useNavigate();
    const SaveTask = async () => {
        console.log("saving task")
        const csrftoken = Cookies.get('csrftoken');
        console.log(csrftoken)
        let idToSave = (taskID !== "new" ? taskID : null)
        console.log(idToSave)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken,
            },
            mode: 'same-origin',
            body: JSON.stringify({
                id: idToSave,
                title: document.getElementById('formTitle').value,
                frequency: getSelected('formFrequency'),
                description: document.getElementById('formDescription').value,
                completed: getSelected('formCompleted'),
            }),
        };
        console.log(requestOptions);
        fetch("/api/save-task/", requestOptions).then((response) => response.json()).then((data) => navigate(0))
    }

    const getSelected= (name) => {
        let formPart = document.getElementsByName(name);
        for (let i=0; i< formPart.length; i++) {
            if (formPart[i].checked) {
                return formPart[i].value
            }
        }
    }

    return (
        <div>
            {taskID==="new" && <h2>Add your task idea!</h2>}
            {taskID!=="new" && <h2>Edit your task idea!</h2>}
            <div className="container">
                <div className="form-group">
                    <div className="form-control">
                    <form>
                            <label for="formTitle">Title:  </label>
                            <input type="text" id="formTitle" name="formTitle" defaultValue={title} />
                            <br />
                            {/* change listing out these radio buttons to a loop */}
                            <label for="formFrequency">Frequency:  </label>
                            <input type="radio" id="formFrequency1" name="formFrequency" value="O" />
                            <label for="formFrequency1">One-time</label>
                            <input type="radio" id="formFrequency2" name="formFrequency" value="D" />
                            <label for="formFrequency2">Daily</label>
                            <input type="radio" id="formFrequency3" name="formFrequency" value="W" />
                            <label for="formFrequency3">Weekly</label>
                            <input type="radio" id="formFrequency4" name="formFrequency" value="M" />
                            <label for="formFrequency4">Monthly</label>
                            <input type="radio" id="formFrequency5" name="formFrequency" value="Y" />
                            <label for="formFrequency5">Yearly</label>
                            <br />
                            <label for="formDescription">Description:  </label>
                            <textarea type="text" id="formDescription" name="formDescription" defaultValue={description}  />
                            <br />
                            <label for="formCompleted">Completion Status:  </label>
                            <input type="radio" id="formCompletedFalse" name="formCompleted" value="False" />
                            <label for="formCompleted">Ongoing</label>
                            <input type="radio" id="formCompletedTrue" name="formCompleted" value="True" />
                            <label for="formCompleted">Completed</label>
                            <br />
                        </form>
                        <button class="special-button" onClick={SaveTask}>Save task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
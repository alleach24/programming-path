import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import MainNavbar from "./MainNavbar";
import Cookies from 'js-cookie';

export default function PlanEdit(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");

    const planID = props.newPlan;
    console.log(planID)

    if (planID != 'new') {
        fetch('/api/get-plan' + '?id=' + planID)
            .then((response) => response.json())
            .then((data) => {
                setTitle(data.title);
                setDescription(data.description);
                setStartTime(data.start_time);
                setEndTime(data.end_time);
                console.log(data)
        });
    }    
    
    let navigate = useNavigate();
    const SavePlan = async () => {
        const csrftoken = Cookies.get('csrftoken');
        let idToSave = (planID !== "new" ? planID : null)
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
                description: document.getElementById('formDescription').value,
                start_time: document.getElementById('formStart').value,
                end_time: document.getElementById('formEnd').value,
            }),
        };
        console.log(requestOptions);
        fetch("/api/save-plan/", requestOptions).then((response) => response.json()).then(() => navigate(0))
    }

    
    return (
        <div>
            {planID==="new" && <h3>Add your plan</h3>}
            {planID!=="new" && <h3>Edit your plan</h3>}
            <div className="container">
                <div className="form-group">
                    <div className="form-control">
                        <form>
                            <label for="formTitle">Title:  </label>
                            <input type="text" id="formTitle" name="formTitle" defaultValue={title}/>
                            <br />
                            <label for="formDescription">Description:  </label>
                            <textarea type="text" id="formDescription" name="formDescription" defaultValue={description}/>
                            <br />
                            <label for="formStart">Start:  </label>
                            <input type="text" id="formStart" name="formStart" defaultValue={startTime}/>
                            <br />
                            <label for="formEnd">End:  </label>
                            <input type="text" id="formEnd" name="formEnd" defaultValue={endTime}/>
                            <br />
                        </form>
                        <button class="special-button" onClick={SavePlan}>Save Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
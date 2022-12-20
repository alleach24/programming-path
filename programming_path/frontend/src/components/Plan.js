import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function Plan(props) {
    
    const [id] = useState(props.id)
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [startTime, setStartTime] = useState(props.startTime);
    const [endTime, setEndTime] = useState(props.endTime);

    let navigate = useNavigate()
    const DeletePlan = (id) => {
        let path = "/api/delete-plan/" + id
        fetch(path, [])
        window.location.reload();
    }
    const EditPlan = (id) => {
        console.log('pressed edit')
        let path = "/plan/edit/" + id;
        console.log(path)
        navigate(path)
    }

    return (
        <div class="text-box timeline-text-box">
            <h3>{title}</h3>
            <small>{startTime} - {endTime}</small>
            <p>{description}</p>
            <button onClick={()=>EditPlan(id)}>Edit</button>
            <button onClick={()=>DeletePlan(id)}>Delete</button>
        </div>
    )
}


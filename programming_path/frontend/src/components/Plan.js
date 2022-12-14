import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PlanEdit from "./PlanEdit"


export default function Plan(props) {
    
    const [id] = useState(props.id)
    const [title, setTitle] = useState(props.title);
    const [description, setDescription] = useState(props.description);
    const [startTime, setStartTime] = useState(props.startTime);
    const [endTime, setEndTime] = useState(props.endTime);
    const [editPlan, setEditPlan] = useState(false);


    const DeletePlan = (id) => {
        let path = "/api/delete-plan/" + id
        fetch(path, [])
        window.location.reload();
    }

    return (
        <div class="timeline-container">
            <h2>
                {title}
            </h2>
            <div class="plan-info">
                <small>{startTime} - {endTime}</small>
                <p>{description}</p>
                {/* <button onClick={()=>EditPlan(id)}>Edit</button> */}
                <button class="non-special-button" onClick={()=>setEditPlan(true)}>Edit plan</button>
                {editPlan && (
                    <div id="pop-up">
                        <PlanEdit newPlan={id}/>
                        <button onClick={()=>setEditPlan(false)}>Cancel</button>
                    </div>
                )}
                <button class="non-special-button" onClick={()=>DeletePlan(id)}>Delete</button>
            </div>
        </div>
    )
}


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  

export default function Project() {

    const [title, setTitle] = useState("title");
    const [description, setDescription] = useState("description");
    const [technologies, setTechnologies] = useState("technologies");
    const [collaborators, setCollaborators] = useState("collaborators");
    const [status, setStatus] = useState("status");

    const {projectID} = useParams();

    fetch('/api/get-project' + '?id=' + projectID)
        .then((response) => response.json())
        .then((data) => {
            setTitle(data.title);
            setDescription(data.description);
            setTechnologies(data.technologies);
            setCollaborators(data.collaborators);
            setStatus(data.status);
            console.log(data)
    });

    const navigate = useNavigate();
    const goToProjectTable = () => {
        navigate('/projects');
    }

    const DeleteIdea = (id) => {
        let path = "/api/delete-idea/" + id
        fetch(path, [])
        goToProjectTable()
    }
        
    const EditIdea = (id) => {
    }

    return (
        <div>
            <p>This a project page</p>
            <h3>Project ID: {projectID}</h3>
            <p>title: {title}</p>
            <p>description: {description}</p>
            <p>technologies: {technologies}</p>
            <p>collaborators: {collaborators}</p>
            <p>status: {status}</p>
            <button onClick={()=>EditIdea(projectID)}>Edit</button>
            <button onClick={()=>DeleteIdea(projectID)}>Delete</button>
        </div>
    )
}
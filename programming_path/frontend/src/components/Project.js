import React, { useState } from "react";
import { useParams } from "react-router-dom";  
import MainNavbar from "./MainNavbar"

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

    return (
        <div>
            <p>This a project page</p>
            <h3>Project ID: {projectID}</h3>
            <p>title: {title}</p>
            <p>description: {description}</p>
            <p>technologies: {technologies}</p>
            <p>collaborators: {collaborators}</p>
            <p>status: {status}</p>
            <button>Edit Project</button>
            <button>Delete Project</button>
        </div>
    )
}
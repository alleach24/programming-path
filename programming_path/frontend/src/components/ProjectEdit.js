import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom"

export default function ProjectEdit() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [collaborators, setCollaborators] = useState("");
    const [status, setStatus] = useState("");

    const {projectID} = useParams();

    useEffect(() => { 
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
    });

    const SaveProject = async () => {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: projectID,
                title: document.getElementById('formTitle').value,
                description: document.getElementById('formDescription').value,
                technologies: document.getElementById('formTechnologies').value,
                collaborators: document.getElementById('formCollaborators').value,
                status: document.getElementById('formStatus').value,
            }),
        };
        console.log(requestOptions);
        fetch("/api/save-project/", requestOptions).then(() => routeChange(projectID));
    }

    let navigate = useNavigate();
    const routeChange = (id) => {
        let path = '/project/' + id
        navigate(path)
    }

    return (
        <div>
            <h3>Edit your project idea!</h3>
            <div className="container">
                <div className="form-group">
                    <div className="form-control">
                        <form>
                            <label for="formTitle">Title:  </label>
                            <input type="text" id="formTitle" name="formTitle" />
                            <br />
                            <label for="formDescription">Description:  </label>
                            <textarea type="text" id="formDescription" name="formDescription" />
                            <br />
                            <label for="formStatus">Status:  </label>
                            <input type="text" id="formStatus" name="formStatus" value={status}/>
                            <br />
                            <label for="formTechnologies">Technologies:  </label>
                            <input type="text" id="formTechnologies" name="formTechnologies" />
                            <br />
                            <label for="formCollaborators">Collaborators:  </label>
                            <input type="text" id="formCollaborators" name="formCollaborators" />
                            <br />
                        </form>
                        <button onClick={SaveProject}>Save Project</button>
                        <a href="/projects">
                            <input type="button" value="Cancel" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
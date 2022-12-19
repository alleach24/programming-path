import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import MainNavbar from "./MainNavbar"

export default function AddProjectIdea() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [collaborators, setCollaborators] = useState("");
    const [status, setStatus] = useState("");

    const SaveProject = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                id: null,
                title: title,
                description: description,
                technologies: technologies,
                collaborators: collaborators,
                status: status,
            }),
        };
        fetch("/api/save-project/", requestOptions).then((response) => response.json()).then((data) => routeChange(data.id))
    }

    let navigate = useNavigate();
    const routeChange = (id) => {
        let path = '/project/' + id
        navigate(path)
    }

    // figure out how to not change state every time a letter is typed
    return (
        <div>
            <MainNavbar /> 
            <h3>Add your new project idea!</h3>
            <div className="container">
                <div className="form-group">
                    <div className="form-control">
                        <form>
                            <label for="formTitle">Title:  </label>
                            <input type="text" id="formTitle" name="formTitle" onChange={(e) => setTitle(e.target.value)} />
                            <br />
                            <label for="formDescription">Description:  </label>
                            <textarea type="text" id="formDescription" name="formDescription" onChange={(e) => setDescription(e.target.value)} />
                            <br />
                            <label for="formStatus">Status:  </label>
                            <input type="text" id="formStatus" name="formStatus" onChange={(e) => setStatus(e.target.value)} />
                            <br />
                            <label for="formTechnologies">Technologies:  </label>
                            <input type="text" id="formTechnologies" name="formTechnologies" onChange={(e) => setTechnologies(e.target.value)} />
                            <br />
                            <label for="formCollaborators">Collaborators:  </label>
                            <input type="text" id="formCollaborators" name="formCollaborators" onChange={(e) => setCollaborators(e.target.value)} />
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
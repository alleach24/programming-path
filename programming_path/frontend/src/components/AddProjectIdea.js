import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom"

export default function AddProjectIdea() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [collaborators, setCollaborators] = useState("");
    const [status, setStatus] = useState("");

    function onSubmit(e) {
        let newtitle = document.getElementById("formTitle").value;
        console.log(newtitle);
        setTitle(newtitle);
        console.log(title);
    }

    const SaveProject = async () => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: title,
                description: description,
                technologies: technologies,
                collaborators: collaborators,
                status: status,
            }),
        };
        fetch("/api/add-project/", requestOptions).then((response) => response.json()).then((data) => routeChange(data.id))
    }

    let navigate = useNavigate();
    const routeChange = (id) => {
        let path = '/project/' + id
        navigate(path)
    }

    const CancelProject = () => {
        // Change all states back to default
        // redirect to projects page
        pass
    }

    return (
        <div>
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
                            {/* <input type="submit" value="Save Project" /> */}
                        </form>
                        <button onClick={SaveProject}>Save Project</button>
                        <button onClick={CancelProject}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
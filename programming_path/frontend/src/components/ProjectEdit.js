import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"
import Cookies from 'js-cookie';

export default function ProjectEdit(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [collaborators, setCollaborators] = useState("");
    const [status, setStatus] = useState("");

    // const {projectID} = useParams();
    // console.log(projectID)
    const projectID = props.projectID;
    console.log(projectID)

    if (projectID !== "new") {
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
    }    
    
    let navigate = useNavigate();
    const SaveProject = async () => {

        const csrftoken = Cookies.get('csrftoken');
        let idToSave = (projectID !== "new" ? projectID : null)
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
                technologies: document.getElementById('formTechnologies').value,
                collaborators: document.getElementById('formCollaborators').value,
                status: document.getElementById('formStatus').value,
            }),
        };
        console.log(requestOptions);
        // fetch("/api/save-project/", requestOptions).then(() => routeChange(projectID));
        fetch("/api/save-project/", requestOptions).then((response) => response.json()).then((data) => navigate(0))
    }

    
    // const routeChange = (id) => {
    //     let path = '/project/' + id
    //     navigate(path)
    // }

    return (
        <div>
            {projectID==="new" && <h3>Add your project idea!</h3>}
            {projectID!=="new" && <h3>Edit your project idea!</h3>}
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
                            <label for="formStatus">Status:  </label>
                            <input type="text" id="formStatus" name="formStatus" defaultValue={status}/>
                            <br />
                            <label for="formTechnologies">Technologies:  </label>
                            <input type="text" id="formTechnologies" name="formTechnologies" defaultValue={technologies}/>
                            <br />
                            <label for="formCollaborators">Collaborators:  </label>
                            <input type="text" id="formCollaborators" name="formCollaborators" defaultValue={collaborators}/>
                            <br />
                        </form>
                        <button class="special-button" onClick={SaveProject}>Save Project</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
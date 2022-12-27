import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from "react";
import ProjectEdit from './ProjectEdit';
import { useParams, useNavigate } from "react-router-dom";  


export default function ProjectsTable() {
  const [projectList, setProjectList] = useState([]);
  const [editProject, setEditProject] = useState(false);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    const response = await fetch('/api/get-project-list')
    setProjectList(await response.json());
  }

  const DeleteIdea = (id) => {
    let path = "/api/delete-idea/" + id
    fetch(path, [])
    getData()
  }

  let navigate = useNavigate()
  const EditIdea = (id) => {
    console.log('pressed edit')
    let path = "/project/edit/" + id;
    console.log(path)
    navigate(path)
  }


  // extract map function
  // displaytableentire(data) { return all the html }

  return (
    <div>
      <Table striped bordered hover class="table">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Technologies</th>
            <th>Collaborators</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>     
          {projectList.map((data) => {
              return(
                // displaytableentries(data)
                <tr class="table-row">
                  {/* <td>{data.id}</td> */}
                  <td class="table-column">{data.title}</td>
                  <td class="table-column">{data.description}</td>
                  <td class="table-column">{data.status}</td>
                  <td class="table-column">{data.technologies}</td>
                  <td class="table-column">{data.collaborators}</td>
                  <td class="table-column">
                  <button class="non-special-button" onClick={() => {setEditProject(true)}}>Edit</button>
                    {editProject && (
                        <div id="pop-up">
                            <ProjectEdit projectID={data.id}/>
                            <button onClick={()=>setEditProject(false)}>Cancel</button>
                        </div>
                    )}
                    <button class="non-special-button" onClick={()=>DeleteIdea(data.id)}>Delete</button>
                  </td>
                </tr>
              )
          })}
        </tbody>
      </Table>
    </div>
  );
}
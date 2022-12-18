import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  


export default function ProjectsTable() {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    const response = await fetch('/api/get-project-list')
    setProjectList(await response.json());
  }

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
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
                <tr>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>{data.status}</td>
                  <td>{data.technologies}</td>
                  <td>{data.collaborators}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              )
          })}
        </tbody>
      </Table>
      <div>
        <form action="/add-project-idea">
          <input type="submit" value="Add new project idea" />
        </form>
      </div>
    </div>
  );
}
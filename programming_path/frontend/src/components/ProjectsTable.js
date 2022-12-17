import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  


export default function ProjectsTable() {
  const [projectList, setProjectList] = useState([]);

  // projectListnonstate = []
  useEffect(() => {
    fetch('/api/get-project-list')
    .then((response) => response.json())
    .then((data) => {
      setProjectList(data)
      console.log(data[0])
      console.log(data[0].title)
      // let projectListnonstate = data
    })
  }, [])

  // console.log(projectList)
  // console.log(projectList[0])
  // console.log(projectList[0]['title'])
  // let first_proj = projectList[0]
  // console.log('first proj')
  // console.log(first_proj[title])
  // const { 'title' } = projectList[0];
  // console.log(title)


  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Technologies</th>
          <th>Collaborators</th>
        </tr>
      </thead>
      <tbody>
        
          <tr>
            {/* <td>{projectListnonstate[0].id}</td> */}
            {/* <td>{projectList[0].title}</td>
            <td>{projectList[0].description}</td>
            <td>{projectList[0].status}</td>
            <td>{projectList[0].technologies}</td>
            <td>{projectList[0].collaborators}</td> */}
          </tr>

      </tbody>
    </Table>
  );
}
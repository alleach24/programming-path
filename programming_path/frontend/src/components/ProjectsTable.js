import React from "react";
import Table from 'react-bootstrap/Table';

// const projectID = 1;

// fetch('/api/get-project' + '?id=' + projectID)
// .then((response) => response.json())
// .then((data) => {
//     setTitle(data.title);
//     setDescription(data.description);
//     setTechnologies(data.technologies);
//     setCollaborators(data.collaborators);
//     setStatus(data.status);
//     console.log(data)
// });

export default function ProjectsTable() {
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
          <td>1</td>
          <td>a</td>
          <td>b</td>
          <td>c</td>
          <td>d</td>
          <td>e</td>
        </tr>
      </tbody>
    </Table>
  );
}
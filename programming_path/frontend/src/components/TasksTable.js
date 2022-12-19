import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";  


export default function TasksTable(props) {
  const [taskList, setTaskList] = useState([]);
//   console.log(props.frequency)

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    let path = '/api/get-task-list' + "?frequency=" + props.frequency;
    const response = await fetch(path);
    let data = await response.json();
    // console.log(data);
    setTaskList(data);
  };

  const DeleteTask = (id) => {
    // let path = "/api/delete-idea/" + id
    // fetch(path, [])
    // getData()
  }

  let navigate = useNavigate()
  const EditTask = (id) => {
    console.log('pressed edit')
    let path = "/task/edit/" + id;
    console.log(path)
    navigate(path)
  }

  const completedStatus = (completed) => {
    if (completed) {
        return "Completed"
    }
    return "Ongoing"
  }


  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Completion Status</th>
          </tr>
        </thead>
        <tbody>     
          {taskList.map((data) => {
              return(
                <tr>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>{completedStatus(data.completed)}</td>
                  <td>
                    <button onClick={()=>EditTask(data.id)}>Edit</button>
                    <button onClick={()=>DeleteTask(data.id)}>Delete</button>
                  </td>
                </tr>
              )
          })}
        </tbody>
      </Table>
    </div>
  );
}
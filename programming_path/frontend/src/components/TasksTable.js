import Table from 'react-bootstrap/Table';
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; 
import TaskEdit from "./TaskEdit" 


export default function TasksTable(props) {
  const [taskList, setTaskList] = useState([]);
  const [editTask, setEditTask] = useState(false);
//   console.log(props.frequency)

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    let path = '/api/get-task-list' + "?frequency=" + props.frequency;
    const response = await fetch(path);
    let data = await response.json();
    setTaskList(data);
    console.log(data.length)
    console.log(data)
  };

  const DeleteTask = (id) => {
    let path = "/api/delete-task/" + id
    fetch(path, [])
    getData()
  }

  const completedStatus = (completed) => {
    if (completed) {
        return "Completed"
    }
    return "Ongoing"
  }


  return (
    <div>
      <Table striped bordered hover class="table">
        <thead>
          <tr>
            {/* <th>#</th> */}
            <th>Title</th>
            <th>Description</th>
            <th>Completion Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>      {/* pull tasklist.length and tasklist[0].id out to another function like 'tasklistexists' or seomthing */}
          {taskList.length > 0 && taskList[0].id && taskList.map((data) => {
              return(
                <tr class="table-row">
                  {/* <td>{data.id}</td> */}
                  <td class="table-column">{data.title}</td>
                  <td class="table-column">{data.description}</td>
                  <td class="table-column">{completedStatus(data.completed)}</td>
                  <td class="table-column">
                    <button class="non-special-button" onClick={() => {setEditTask(true)}}>Edit</button>
                    {editTask && (
                        <div id="pop-up">
                            <TaskEdit taskID={data.id}/>
                            <button onClick={()=>setEditTask(false)}>Cancel</button>
                        </div>
                    )}
                    <button class="non-special-button" onClick={()=>DeleteTask(data.id)}>Delete</button>
                  </td>
                </tr>
              )
          })}
        </tbody>
      </Table>
      <br></br>
    </div>
  );
}
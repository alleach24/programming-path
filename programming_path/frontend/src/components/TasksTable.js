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

  let navigate = useNavigate()
  const EditTask = (id) => {
    console.log('pressed edit')
    // let path = "/task/edit/" + id;
    // console.log(path)
    // navigate(path)
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
        <tbody>      {/* pull tasklist.length and tasklist[0].id out to another function like 'tasklistexists' or seomthing */}
          {taskList.length > 0 && taskList[0].id && taskList.map((data) => {
              return(
                <tr>
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.description}</td>
                  <td>{completedStatus(data.completed)}</td>
                  <td>
                    <button onClick={() => {setEditTask(true)}}>Edit</button>
                    {editTask && (
                        <div id="pop-up">
                            <TaskEdit taskID={data.id}/>
                            <button onClick={()=>setEditTask(false)}>Cancel</button>
                        </div>
                    )}
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
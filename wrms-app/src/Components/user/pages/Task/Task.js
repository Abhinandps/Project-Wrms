import { useState, useEffect } from 'react';
import Adpop from './Adpop'
import Main from './Main';
import Axios from 'axios';
import swal from 'sweetalert';
import ComponentOne from '../dashboard/components/UI/ComponentOne';
import ComponentTwo from '../dashboard/components/UI/ComponentTwo';
import "./Task.css"

const Task = () => {
  const [pop, setPop] = useState(false);
  const [ne, setNe] = useState("");
  const [displays, setDisplays] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:7000/api/list/task').then((response) => {
      // response.send(response.data);
      setDisplays(response.data)

    })
  }, [])


  const deleteitems = (Taskname) => {
    Axios.delete(`http://localhost:7000/api/deletelist/${Taskname}`)

    swal({
      title: "DELETED SUCCESSFULLY",
      text: "PLEASE REFRESH THE PAGE!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

  }

  const updateitem = (Taskname) => {

    Axios.patch('http://localhost:7000/api/taskupdate', { Taskname: Taskname, status: ne }).then((response) => {
      //  response.send("finisg")


    })
    if (!ne) {
      swal({
        title: "ENTER THE VALUE",
        icon: "info",
        button: "OK!",
      });
    }
    else {
      swal({
        title: "UPDATED SUCCESSFULLY",
        text: "PLEASE REFRESH THE PAGE!",
        icon: "success",
        button: "OK!",
      });
    }
  }
  return (
    <>
      <div className="task-header">
        <div className="header">
          <h1>Task Manager</h1>
        </div>

        <div className='add-btn'>
          <button className='btn  add-task' onClick={() => setPop(true)}>Add Task</button>
          <Adpop trigger={pop} setTrigger={setPop}>
            <Main />
          </Adpop>
        </div>

        <ComponentTwo>
          <div className="all-reports">

            {
              displays.map((obj) => {
                return (
                  <div onClick={
                    () => {


                    }} className="report-data">

                    <div className="data">
                      <p>{obj.Taskname}</p>
                      <p>{obj.category}</p>
                      <div className="time date">
                        <p>{obj.startdate.split("T18:30:00.000Z")}</p>
                        -
                        <p>{obj.enddate.split("T18:30:00.000Z")}</p>
                      </div>

                      <p className='priority'>{obj.priority}</p>
                      <p className='pstatus'>{obj.status}%</p>
                      <div className='btn-group'>
                        <button className='btn delete' onClick={() => { deleteitems(obj.Taskname) }}>Delete</button>
                        <button className='btn update' onClick={() => { updateitem(obj.Taskname) }}>Update</button>
                      </div>
                      <p><input className='input-status' type="number" placeholder="0" onChange={(e) => setNe(e.target.value)} required /></p>
                    </div>

                  </div>
                )
              })
            }


          </div>
        </ComponentTwo>
      </div>
    </>
  )
}

export default Task
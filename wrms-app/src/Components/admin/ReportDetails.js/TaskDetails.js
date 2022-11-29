import React, { useState,useEffect } from 'react'
import ComponentOne from "../../user/pages/dashboard/components/UI/ComponentOne";
import ComponentTwo from "../../user/pages/dashboard/components/UI/ComponentTwo";
import  Axios  from 'axios';

const TaskDetails = () => {
    const[taskup,setTaskup]=useState([])
    useEffect(()=>{
        Axios.get('http://localhost:7000/api/list/task').then((response)=>{
          // response.send(response.data);
          setTaskup(response.data)
      
        })
      },[])
  return (
    <>
    <ComponentOne>

    </ComponentOne>
    <ComponentTwo>
    <div className="all-reports">

{
  taskup.map((obj)=>{
    return(
      <div onClick={()=>console.log("Clicked")} className="report-data">
      <div className="data">
      <p>{obj.Taskname}</p>
       <p>{obj.category}</p>
       <div className="time">
       <p>{obj.startdate}</p> -
       <p>{obj.enddata}</p> 
       </div>
       <p>{obj.priority}</p>
       <p>{obj.status}</p>
      </div>
       {/* <div className="status">
       <button  onClick={()=>{updateitems(obj.title)}}>Approve</button>
       <button onClick={()=>{Rejectitems(obj.title)}}>Reject</button>
       </div> */}
     </div>
    )
  })
}


</div>
    </ComponentTwo>
    
    </>
  )
}

export default TaskDetails
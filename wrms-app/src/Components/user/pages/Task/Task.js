import { useState,useEffect } from 'react';
import Adpop from './Adpop'
import Main from './Main';
import  Axios  from 'axios';
import swal from 'sweetalert'

const Task = () => {
  const [pop,setPop]=useState(false);
  const[displays,setDisplays]=useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:7000/api/list/task').then((response)=>{
      // response.send(response.data);
      setDisplays(response.data)
  
    })
  },[])


  const deleteitems=(Taskname)=>{
    Axios.delete(`http://localhost:7000/api/deletelist/${Taskname}`)

    swal({
      title: "DELETED SUCCESSFULLY",
      text: "PLEASE REFRESH THE PAGE!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })

 }
  return(
    <>
    <div className='add'>
<button onClick={()=>setPop(true)}>Add Task</button>
<Adpop trigger={pop} setTrigger={setPop}>
   <Main/>
 </Adpop>
 </div>

 <div className="all-reports">

{
  displays.map((obj)=>{
    return(
      <div onClick={
        () => {
        
          
          }} className="report-data">

      <div className="data">
      <p>{obj.Taskname}nbbsdbbkjdfkj</p>
       <p>{obj.category}</p>
       <p>{obj.startdate}</p> 
       <p>{obj.enddate}</p> 
       <p>{obj.priority}</p> 
       <p>{obj.status}</p> 
       <p><button  onClick={()=>{deleteitems(obj.Taskname)}}>Delete</button></p> 
      <p><button>update</button></p>
      <p><input type="number" placeholder="update status.."  required/></p>
  </div>
       
     </div>
    )
  })
}


</div>
    </>
  )
}

export default Task
import { useState,useEffect } from 'react';
import Adpop from './Adpop'
import Main from './Main';
import  Axios  from 'axios';
import swal from 'sweetalert';
import ComponentOne from '../dashboard/components/UI/ComponentOne';
import ComponentTwo from '../dashboard/components/UI/ComponentTwo';

const Task = () => {
  const [pop,setPop]=useState(false);
  const[ne,setNe]=useState("");
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

 const updateitem=(Taskname)=>{

  Axios.patch('http://localhost:7000/api/taskupdate',{Taskname:Taskname,status:ne}).then((response)=>{
  //  response.send("finisg")

  
})
if(!ne){
  swal({
    title: "ENTER THE VALUE",
    icon: "info",
    button: "OK!",
  });
 }
 else{
  swal({
    title: "UPDATED SUCCESSFULLY",
    text: "PLEASE REFRESH THE PAGE!",
    icon: "success",
    button: "OK!",
  });
 }
}
  return(
    <>
    <ComponentOne>
    <div className='add'>
<button onClick={()=>setPop(true)}>Add Task</button>
<Adpop trigger={pop} setTrigger={setPop}>
   <Main/>
 </Adpop>
 </div>
 </ComponentOne>
 <ComponentTwo>
 <div className="all-reports">

{
  displays.map((obj)=>{
    return(
      <div onClick={
        () => {
        
          
          }} className="report-data">

      <div className="data">
      <p>{obj.Taskname}</p>
       <p>{obj.category}</p>
       <p>{obj.startdate.split("T18:30:00.000Z")}</p> 
       <p>{obj.enddate.split("T18:30:00.000Z")}</p> 
       <p>{obj.priority}</p> 
       <p>{obj.status}</p> 
       <p><button  onClick={()=>{deleteitems(obj.Taskname)}}>Delete</button></p> 
      <p><button  onClick={()=>{updateitem(obj.Taskname)}}>update</button></p>
      <p><input type="number" placeholder="update status.."  onChange={(e)=>setNe(e.target.value)} required/></p>
  </div>
       
     </div>
    )
  })
}


</div>
</ComponentTwo>
    </>
  )
}

export default Task
import React, { useState,useEffect } from 'react'
import Section from '../Section'
import Time from '../Time'
import ComponentOne from '../../user/pages/dashboard/components/UI/ComponentOne';
import ComponentTwo from '../../user/pages/dashboard/components/UI/ComponentTwo';
import  Axios  from 'axios';
import { data } from './reportData';




const AdminDashboard = () => {
  const[disform,setDisform]=useState([])
  const[disfor,setDisfor]=useState([])
  console.log(disfor);
  useEffect(()=>{
    Axios.get('http://localhost:7000/api/get').then((response)=>{
     setDisform(response.data)
  
    })
    
  
  },[])
  const fetchs= async(title)=>{
    const res=await Axios.get(`http://localhost:7000/api/single/form${title}`)
     
    setDisfor(res.data)
  
   
 
  }

  return (
    <> 
    <div className="header">
      <h1>Overview</h1>
      <Time/>
    </div>
    <ComponentTwo>
    <div className="all-reports">

{
  disform.map((obj)=>{
    return(
      <div className="report-data">
      <div className="data">
      <p>{obj.title}</p>
       <p>{obj.find.split("T18:30:00.000Z")}</p>
       <div className="time">
       <p>{obj.Totime.split(":00")}</p> -
       <p>{obj.Fromtime.split(":00")}</p> 
       </div>
      </div>
     <button onClick={()=>{fetchs(obj.title)}}>view</button>
     </div>
    )
  })
}


</div>
      </ComponentTwo>
  </>
  )
}

export default AdminDashboard
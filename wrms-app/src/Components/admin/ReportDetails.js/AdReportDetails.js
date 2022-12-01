import React, { useState,useEffect } from 'react'
import Axios  from 'axios'
import ComponentOne from "../../user/pages/dashboard/components/UI/ComponentOne";
import ComponentTwo from "../../user/pages/dashboard/components/UI/ComponentTwo";
import swal from 'sweetalert'
import Time from '../Time';
const ReportDetails = () => {
    const [form,setForm]=useState([])
    useEffect(()=>{
        Axios.get('http://localhost:7000/api/get').then((response)=>{
          // console.log(response.data);
          setForm(response.data)
      
        })
        
      
      },[])

      const updateitems=(title)=>{
      

        Axios.patch('http://localhost:7000/api/stateupdate',{title:title}).then((response)=>{
        //  response.send("finisg")
        swal({
          title: "Report Approved",
          icon: "success",
          button: "OK!",
        });
      })
        
   
    }

    const Rejectitems=(title)=>{
        
      Axios.patch('http://localhost:7000/api/statereject',{title:title}).then((response)=>{
      //  response.send("finisg")
      swal({
        title: " Report Rejected",
        icon: "warning",
        button: "OK!",
      });
    })
      
 
  }
  return (
    <>

        {/* <div className="all-reports">

{
  form.map((obj)=>{
    return(
      <div onClick={()=>console.log("Clicked")} className="report-data">
      <div className="data">
      <p>{obj.title}</p>
       <p>{obj.find.split("T18:30:00.000Z")}</p>
       <div className="time">
       <p>{obj.Totime.split(":00")}</p> -
       <p>{obj.Fromtime.split(":00")}</p> 
       </div>
      </div>
       <div className="status">
       <p>Pening HOD Aproval</p>
       </div>
       </div>
    )
  })
}


</div> */}
 <div className="dashboard">
      
      <div className="header">
        <h1>Report List</h1>
        <Time />
      </div>
      
{/* <ComponentOne>

</ComponentOne> */}
<ComponentTwo>
        <div className="details-heading">
          <p>All Reports</p>
        </div>

        <div className="all-reports">

          {
            form.map((obj)=>{
              return(
                <div onClick={()=>console.log("Clicked")} className="report-data">
                <div className="data">
                <p>{obj.title}</p>
                 <p>{obj.find.split("T18:30:00.000Z")}</p>
                 <div className="time">
                 <p>{obj.Totime.split(":00")}</p> -
                 <p>{obj.Fromtime.split(":00")}</p> 
                 </div>
                </div>
                 <div className="status admin-report">
                 <button className='btn aprove'  onClick={()=>{updateitems(obj.title)}}>Approve</button>
                 <button  className='btn reject' onClick={()=>{Rejectitems(obj.title)}}>Reject</button>
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

export default ReportDetails
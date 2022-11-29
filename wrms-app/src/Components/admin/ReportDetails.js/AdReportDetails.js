import React, { useState,useEffect } from 'react'
import Axios  from 'axios'
import ComponentOne from "../../user/pages/dashboard/components/UI/ComponentOne";
import ComponentTwo from "../../user/pages/dashboard/components/UI/ComponentTwo";

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
       alert("hdf")
        
      })
    }

    const Rejectitems=(title)=>{
        
      Axios.patch('http://localhost:7000/api/statereject',{title:title}).then((response)=>{
      //  response.send("finisg")
     alert("hdf")
      
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
<ComponentOne>

</ComponentOne>
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
                 <div className="status">
                 <button  onClick={()=>{updateitems(obj.title)}}>Approve</button>
                 <button onClick={()=>{Rejectitems(obj.title)}}>Reject</button>
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

export default ReportDetails
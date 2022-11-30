import React, { useEffect, useState } from "react";
import "./WorkReport.css";
import Time from "../dashboard/components/Time";
import swal from 'sweetalert'

import axios from 'axios';
import ComponentOne from "../dashboard/components/UI/ComponentOne";
import ComponentTwo from "../dashboard/components/UI/ComponentTwo";

import Axios from "axios";
import { data } from "../../../admin/dashboard/reportData";


const WorkReport = () => {
  
  // const [details, setDetails] = useState(() => {
  //   const saved = localStorage.getItem("Storage");
  //   const initialValue = JSON.parse(saved);
  //   return initialValue || "";
  // });


 
  // if(details){
  //   // alert("value");
  // }
  // else{
  //   window.localStorage.setItem("Storage",'[]');
  // }



  const [date, setDate] = useState();
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [title, setTitle] = useState();
  const [type, setType] = useState(true);
  const [disc, setDisc] = useState();
  const [disstate, setState] = useState([]);
  const [up, setUp] = useState("");
  // console.log(up);

  const handleInputSubmit = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:7000/api/insert',{title:title,find:date,Totime:to,Fromtime:from,Type:type,Description:disc,up:up})
    .then(()=>{
      
      swal({
        title: "DATA ADDED SUCCESSFULLY",
        icon: "success",
        button: "OK!",
      });
    })

    setState([...disstate,{title:title,find:date,Totime:to,Fromtime:from,Type:type,Description:disc},
    ])
   

     
    }
    
    const deleteitem=(title)=>{
      Axios.delete(`http://localhost:7000/api/delete/${title}`)

      swal({
        title: "DELETED SUCCESSFULLY",
        text: "PLEASE REFRESH THE PAGE!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })

 

    }



    
useEffect(()=>{
  Axios.get('http://localhost:7000/api/get').then((response)=>{
    // console.log(response.data);
    setState(response.data)

  })
  

},[])
  

  const resetInputfield = () => {
    setDate("");
    setFrom("");
    setTo("");
    setTitle("");
    setType("");
    setDisc("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("incoming data")
  };


  
  return (
    <div className="report">
      <div className="header">
        <h1>Daily Report</h1>
        <Time />
      </div>
      <form onSubmit={handleInputSubmit}>
        <ComponentOne className="section_one">
          <div className="date-group">
            <label>
              Report Date and Time <span>*</span>
            </label>
            <input
              name="date"
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              type="date"
              className="time date"
            />
          </div>
          <div className="time-group">
            <label>
              From <span>*</span>
            </label>
            <input
              onChange={(e) => {
                setFrom(e.target.value);
              }}
              name="from"
              value={from}
              type="time"
              className="time select"
            />

            <label>
              To <span>*</span>
            </label>
            <input
              onChange={(e) => {
                setTo(e.target.value);
              }}
              value={to}
              name="to"
              type="time"
              className="time select"
            />
          </div>
        </ComponentOne>

        <ComponentTwo>
          <div className="report-section">
            <div className="left">
              <label>
                Work Title <span>*</span>
              </label>
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                value={title}
                name="title"
                type="text"
                className="time"
              />
            </div>

            <div className="right">
              <label htmlFor="">
                Work Type <span>*</span>
              </label>
              <input
                value="official"
                onChange={(e) => {
                  setType(e.target.value);
                }}
                type="radio"
                name="type"
              />
              <label htmlFor="group">Official</label>
              <input
                value="others"
                onChange={(e) => {
                  setType(e.target.value);
                }}
                type="radio"
                name="type"
              />
              <label htmlFor="gruop">Others</label>
            </div>
          </div>

          <div className="disc">
            <label htmlFor="">
              Discription <span>*</span>{" "}
            </label>
            <textarea
              onChange={(e) => {
                setDisc(e.target.value);
              }}
              value={disc}
              name="discription"
              className="text-area"
              type="text"
            />
          </div>

          <div className="buttons">
            <button type="submit" value="Pending HOD Approval" onClick={(e) => {
                  setUp(e.target.value);
                }}>Save</button>
            <button onClick={resetInputfield} type="reset">
              Cancel
            </button>
          </div>
        </ComponentTwo>
      </form>

      <form onSubmit={handleSubmit}>
        <ComponentTwo>
          <div className="container">
            <p>Recent Report Added</p>
            {/* <table >
            <tr>
              <th>Work</th>
              <th>Type</th>
              <th>Date</th>
              <th>Time</th>
              <th>Du777771ration</th>
              <th >Status</th>
              <th ></th>
              
            </tr> */}

            {disstate.map((obj) => {
              if (!obj.statusDrop && !obj.statusUpdate) {
                return (

                  <>
                  <div key={obj.id} className="box">
                    <div className="card">
                      <div className="title">
                        <h3>{obj.title}</h3>
                        <p>3hrs</p>
                      </div>
                      <div className="contents">
                      <div className="details">
                      <p>{obj.Type}</p>
                      <p>{obj.find.split("T18:30:00.000Z")}</p>
                        <p>{obj.Fromtime.split(":00")} - {obj.Totime.split(":00")}</p>
                        {/* <p>{obj.data}</p> */}
                      </div>
                        <div className="status">
                        <p>Pending</p>
                        </div>
                     <div className="trash">
                     <i
                    //  onClick={(e)=>{
                    //   let isdelete = window.confirm("Deleting Report Permenently");
                    //   if(isdelete){
                    //     e.target.value=true;
                    //   }
                    //   setDetails(details.filter((obj2)=>{
                    //     if(obj2.id === obj.id){
                    //       obj2.statusDrop = e.target.value;
                    //     }
                    //     return obj2;
                    //   }))
                    // }}
                    onClick={()=>{deleteitem(obj.title)}}
                     class="fa-solid fa-trash"></i>
                     </div>
                         </div>
                    </div>
                    <div className="trash"></div>
                  </div>

                  
                      {/* <tr key={obj.id}>
                      <td>{obj.title}</td>
                      <td>{obj.type}</td>
                      <td>{obj.date}</td>
                      <td>{obj.from}-{obj.to}</td>
                      <td>3hrs</td>
                      <td>Pending</td>
                      <td>
                      <div className="icon">
                      <i  class="fa-solid fa-pen-to-square"></i>
                      <i 
                      onClick={(e)=>{
                        let isdelete = window.confirm("Deleting Report Permenently");
                        if(isdelete){
                          e.target.value=true;
                        }
                        setDetails(details.filter((obj2)=>{
                          if(obj2.id === obj.id){
                            obj2.statusDrop = e.target.value;
                          }
                          return obj2;
                        }))
                      }}
                      class="fa-solid fa-trash"></i>
                      </div>
                      </td>
                    </tr> */}
                  </>
                  
                );
              }
            })}
            {/* </table> */}
            
{/* 
            <div className="sent">
              <button type="submit">Sent</button>
            </div> */}
          </div>
        </ComponentTwo>
      </form>
    </div>
  );
};

export default WorkReport;

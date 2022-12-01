import React, { useState, useEffect } from "react";
import "./Popup.css";
import Axios from "axios";
import swal from "sweetalert";
import { data } from "../dashboard/reportData";


const Popup = ({ show, onClose, reportingPersons }) => {

  const [rPerson, setRperson] = useState();



  // console.log(rPerson);

  // console.log(reportingPersons);

  // const [form,setForm] = useState([]);






  const handleInput = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:7000/api/single/fetch',{fname:rPerson})
    .then((res)=>{
     

      
      swal({
        title: "Reporting Person Assigned",
        icon: "success",
        button: "OK!",
      });
    })

  }


  if (!show) {
    return null;
  }



  return (
 
    <div className="modalWrapper">
      <div className="modalicon">
        <i onClick={onClose} class="fa-solid fa-xmark"></i>

        <div className="section-team-member">
        <div className="section-header">
        <h1>Assign Reporting Person</h1>
        <p></p>
        </div>
        <form onSubmit={handleInput}>
          <div className="inner-section">
          
            <select onClick={(e) => { setRperson(e.target.value) }}>
              <option></option>
              {

                reportingPersons.map((obj) => {
                  return (
                    <>
                      <option className="option" value={obj.fname}>{obj.fname}</option>
                    </>
                  )
                })

              }

            </select>
            
          <div className="Button">
          <button className="btn submit">Submit</button>
            <button className="btn close" onClick={onClose}>Close</button>
          </div>

          </div>
          
       
          </form>

        </div>
     
      
      </div>
  
    </div>
  
  );
};

export default Popup;

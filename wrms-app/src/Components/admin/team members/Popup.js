import React, { useState, useEffect } from "react";
import "./Popup.css";
// import Axios from "axios";


const Popup = ({ show, onClose, reportingPersons }) => {

  const [rPerson, setRperson] = useState();

  console.log(rPerson);

  console.log(reportingPersons);

  // const [form,setForm] = useState([]);

  // useEffect(() => {
  //     Axios.get('http://localhost:7000/api/get/workreport').then((response) => {
  //         setForm(response.data)
  //     })
  //   }, [])

  if (!show) {
    return null;
  }



  return (
    <div className="modalWrapper">
      <div className="modalicon">
        <i onClick={onClose} class="fa-solid fa-xmark"></i>

        <div className="section">
          <div className="inner-section">
            <select onClick={(e) => { setRperson(e.target.value) }}>
              {

                reportingPersons.map((obj) => {
                  return (
                    <>
                      <option value={obj.fname}>{obj.fname}</option>
                    </>
                  )
                })

              }

            </select>
            <p>Assigned Repoting Person : {rPerson}</p>
          </div>


        </div>

        {/* <div className="footer">
          <button>{"singleForm.status"}</button>
        </div> */}
      </div>
    </div>
  );
};

const Cards = ({ data }) => {
  return (
    <>
      {/* <div className="header">
        <h1>Daily Report</h1>
        <p>{props.date}</p>
      </div> */}
      {/* 
      <div className="inner-section">
        <select onClick={(e)=>setRperson(e.target.value)}>
        {
          
          data.map((obj)=>{
            return(
              <>
              <option value={obj.fname}>{obj.fname}</option>
              </>
            )
          })
        
      }

        </select> */}




      {/* <div className="status-group">
          <div className="comments">
            <span>Comments :</span>
            <p>{props.comments}</p>
          </div>
          <div className="aproved-on">
            <span>Aproved On :</span>
            <p>{props.time}</p>
          </div>
        </div> */}

      {/* Official Data Displaying  */}
      {/* <div className="card">
          <div className="tagname">
            <h2>{props.type}</h2>
          </div>

          <div className="wrapper">
            <div className="card-header">
              <p>{props.title}</p>
              <p>2hr</p>
            </div>
            <div className="contents">{props.disc}</div>
          </div>

        </div> */}

      {/* <div className="approve">
          {props.status}
        </div> */}


      {/* </div> */}




    </>
  );
};

export default Popup;

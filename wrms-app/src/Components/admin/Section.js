import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Section.css";

import { data } from "./dashboard/reportData";

import ComponentOne from "../user/pages/dashboard/components/UI/ComponentOne";
import ComponentTwo from "../user/pages/dashboard/components/UI/ComponentTwo";





// import { review } from './Reviewdata'

// import Popup from './Popup'



const Section = () => {
  const [show,setShow] = useState(false);

  return (
    <>
      <ComponentOne>
        <>
          <p>Report Clearens Summary</p>

          <div className="status-group">
            <div className="status">
              <p>Not Aproved</p>
              <Link className="count" to="report-details">
                0
              </Link>
            </div>

            <div className="status">
              <p>Aproved</p>
              <Link className="count" to="report-details">
                0
              </Link>
            </div>
          </div>
        </>
      </ComponentOne>

      <ComponentTwo>

        <p className="heading">Recent Activities</p>

       {
        data.map((item)=>{
          return(
            <div className="report-container">

            <div className="time-status">
              <p>{item.time}</p>
            </div>
  
            <div className="title-status">
              <p>{item.title}</p>
            </div>
  
            <div className="profile">
              <div className="outline">
              <img src={item.url}alt="" />
              </div>
              <p>{item.name}</p>
            </div>
  
  
            <div className="status-type">
              <p>Added a Report</p>
            </div>
  
            <div className="visit-btn">
              <button>Visit</button>
            </div>
  
          </div>
          )
        })
       }
      </ComponentTwo>
    </>
  );
};

export default Section;

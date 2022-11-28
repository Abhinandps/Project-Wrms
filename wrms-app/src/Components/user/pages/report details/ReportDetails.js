import axios from "axios";
import React, { useEffect } from "react";

import Time from "../dashboard/components/Time";
import ComponentOne from "../dashboard/components/UI/ComponentOne";
import ComponentTwo from "../dashboard/components/UI/ComponentTwo";
import "./ReportDetails.css";

const ReportDetails = () => {

  // store report datas in local storage named as `report`
  // localy fetch the datainto reportObj variable
    // const saved = localStorage.getItem("Report");
    // const reportObj = JSON.parse(saved);
    // console.log(reportObj);



    


  return (
    <div className="details-head">
      <div className="header">
        <h1>Report Details</h1>
      </div>
      <ComponentOne>
        <div className="left">
          <p>Report Filter</p>
          <input type="Date" />
          <select name="" id="">
            <option value="all" key="">
              All
            </option>
            <option value="aproved" key="">
              Aproved
            </option>
            <option value="pending aproval" key="">
              Pending Aproval
            </option>
            <option value="not submited" key="">
              Not Submited
            </option>
          </select>
        </div>
        <div className="right">
          <div className="searchbox">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="search" />
          </div>
        </div>
      </ComponentOne>

      <ComponentTwo>
        <div className="details-heading">
          <p>All Reports</p>
        </div>

        <div className="all-reports">

          {

          }

          <div onClick={()=>console.log("Clicked")} className="report-data">
           <div className="data">
           <p>1096</p>
            <p>21-06-2022</p>
            <p>04:52:27pm</p>
           </div>
            <div className="status">
            <p>Pening HOD Aproval</p>
            </div>
          </div>
          

          {/* <div className="report-data">
            <p>1096</p>
            <p>21-06-2022</p>
            <p>04:52:27pm</p>
            <p className="status">Aproved</p>
          </div> */}

        </div>
      </ComponentTwo>
    </div>
  );
};

export default ReportDetails;

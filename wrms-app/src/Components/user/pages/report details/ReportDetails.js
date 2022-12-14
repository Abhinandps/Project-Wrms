import Axios from "axios";
import React, { useState, useEffect } from "react";
import Popup from "../dashboard/components/Popup";
import Time from "../dashboard/components/Time";
import ComponentOne from "../dashboard/components/UI/ComponentOne";
import ComponentTwo from "../dashboard/components/UI/ComponentTwo";
import "./ReportDetails.css";



const ReportDetails = () => {

  const [details, setDetails] = useState([]);

  const [show, setShow] = useState(false);
  const [date, setDate] = useState([]);
  const [type, setType] = useState([]);
  const [title, setTitle] = useState([]);
  const [disc, setDisc] = useState([]);

  const [status, setStatus] = useState("");

  const [query, setQuery] = useState("")

  // store report datas in local storage named as `report`
  // localy fetch the datainto reportObj variable
  // const saved = localStorage.getItem("Report");
  // const reportObj = JSON.parse(saved);
  // console.log(reportObj);

  useEffect(() => {
    Axios.get('http://localhost:7000/api/get').then((response) => {
      // console.log(response.data);
      setDetails(response.data)

    })
    // setTimeout(() => 
    //   setDis(),500);
  }, [])

  //hfdsgjhgrfhdrhgg



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
            <input type="text" placeholder="search" onChange={e => setQuery(e.target.value)} />
          </div>
        </div>
      </ComponentOne>

      <ComponentTwo>
        <Popup date={date} type={type} title={title} disc={disc} show={show} status={status} onClose={() => setShow(false)} />
        <div className="details-heading">
          <p>All Reports</p>
        </div>

        <div className="all-reports">

          {
            details.filter((obj) => obj.title.toLowerCase().includes(query)).map((obj) => {
              return (
                <div onClick={
                  () => {
                    setShow(true);
                    setDate(obj.find.split("T18:30:00.000Z"))
                    setType(obj.Type)
                    setTitle(obj.title)
                    setDisc(obj.Description)
                    setStatus(obj.status)

                  }} className="report-data">
                  <div className="data">
                    <p>{obj.title}</p>
                    <p>{obj.find.split("T18:30:00.000Z")}</p>
                    <div className="time">
                      <p>{obj.Totime.split(":00")}</p> -
                      <p>{obj.Fromtime.split(":00")}</p>
                    </div>
                  </div>
                  <div className="status user-status">

                    {

                      obj.status === "APPROVED" ?
                        <p style={{ backgroundColor: "rgb(12, 230, 121)" }}>{obj.status}</p>
                        : obj.status === "REJECTED" ? <p style={{ backgroundColor: "rgb(243, 38, 38)" }}>{obj.status}</p> :
                          <p style={{ backgroundColor: "rgb(228, 208, 31)" }}>{obj.status}</p>
                    }
                   
                  </div>
                </div>
              )
            })
          }


        </div>
      </ComponentTwo>
    </div>
  );
};

export default ReportDetails;

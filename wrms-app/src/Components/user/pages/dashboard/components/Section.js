import React from "react";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./Section.css";

import ComponentOne from "./UI/ComponentOne";
import ComponentTwo from "./UI/ComponentTwo";

import Axios from 'axios'


import { review } from './Reviewdata'

import Popup from './Popup'



const Section = () => {
  const [show,setShow] = useState(false);
  const [details,setDetails] = useState([]);

  const [date,setDate] = useState([]);
  const [type,setType] = useState([]);
  const [title,setTitle] = useState([]);
  const [disc,setDisc] = useState([]);
  const [status,setStatus] = useState("");

console.log(status);


  // console.log(`Report ${report}`);


  
  const [others,setOthers] = useState([]);

  // const [date,setDate] = useState([]);




  useEffect(()=>{
    Axios.get('http://localhost:7000/api/get').then((response)=>{
      // response.send(data)
      setDetails(response.data)
  
    })
    // setTimeout(() => 
    //   setDis(),500);
  },[])

  return (
    <>
      <ComponentOne>
        <>
          <p>Work Report Summary</p>

          <div className="status-group">
            <div className="status">
              <p>Pending</p>
              <Link className="count" to="report-details">
                0
              </Link>
            </div>

            <div className="status">
              <p>Pending HOD Aproval</p>
              <Link className="count" to="report-details">
                0
              </Link>
            </div>
          </div>
        </>
      </ComponentOne>

      <ComponentTwo>
        <Popup  date={date} type={type} title={title} disc = {disc} show={show} status={status} onClose={() => setShow(false)} />

        <p className="heading">Recent Review</p>
        <table>
          <tr>
            <th>Date</th>
            <th>Rate</th>
            <th>Comments</th>
          </tr>

          {details.map((item) => {
            return (
              <tr>
                <td>
                  <Link key={item.title}  onClick={
                    () => {
                      setShow(true);
                      setDate(item.find.split("T18:30:00.000Z"))
                      setType(item.Type)
                      setTitle(item.title)
                      setDisc(item.Description)
                      setStatus(item.status)
                 
                       }} index>
                    {item.find.split("T18:30:00.000Z")}
                  </Link>
                </td>
                <td>
                  <i className={item.icon}>3 Star</i>
                </td>
                {/* <td>{item.comments}</td> */}
                <td>todo</td>
              </tr>
            );
          })}
        </table>
      </ComponentTwo>
    </>
  );
};

export default Section;

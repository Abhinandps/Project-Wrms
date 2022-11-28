import React from "react";
import "./Popup.css";
import { Official,Others } from "./ReportsData";

const Popup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modalWrapper">
      <div className="modal">
        <i onClick={onClose} class="fa-solid fa-xmark"></i>

        <div className="section">
          <Cards
            date={"21-06-2022"}
            comments={"Excelent"}
            time={"04:45:21 PM"}
            Official={Official} Others = {Others}
          />
        </div>

        <div className="footer">
        <button> Aproved</button> 
        </div>
      </div>
    </div>
  );
};

const Cards = (props) => {
  return (
    <>
      <div className="header">
        <h1>Daily Report</h1>
        <p>{props.date}</p>
      </div>

<div className="inner-section">
<div className="status-group">
        <div className="comments">
          <span>Comments :</span>
          <p>{props.comments}</p>
        </div>
        <div className="aproved-on">
          <span>Aproved On :</span>
          <p>{props.time}</p>
        </div>
      </div>

      {/* Official Data Displaying  */}
      <div className="card">
       <div className="tagname">
       <h2>Official</h2>
       </div>
        {props.Official.map((item, index) => {
          return (
            <div className="wrapper" key={index}>
              <div className="card-header">
                <p>{item.title}</p>
                <p>{item.hour}</p>
              </div>
              <div className="contents">{item.contents}</div>
            </div>
          );
        })}
      </div>

      {/* Others Data Displaying  */}
      <div className="card">
      <div className="tagname">
       <h2>Others</h2>
       </div>
        {props.Others.map((item, index) => {
             return (
                <div className="wrapper" key={index}>
                  <div className="card-header">
                    <p>{item.title}</p>
                    <p>{item.hour}</p>
                  </div>
                  <div className="contents">{item.contents}</div>
                </div>
              );
        })}
      </div>

</div>
      


     
    </>
  );
};

export default Popup;

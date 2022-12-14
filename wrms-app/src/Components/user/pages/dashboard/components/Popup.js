import React from "react";
import "./Popup.css";


const Popup = ({ show, onClose,date,title,disc,type,status}) => {

  if (!show) {
    return null;
  }
  
  return (
    <div className="modalWrapper">
      <div className="modal">
        <i onClick={onClose} class="fa-solid fa-xmark"></i>

        <div className="section">
        <Cards
        
              date={date}
              comments={"Excelent"}
              time={"04:45:21 PM"}
              title={title}
              disc={disc}
              type={type}
            />
        </div>

        <div className="footer">
        <button>{status}</button> 
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
       <h2>{props.type.toUpperCase()}</h2>
       </div>
  
            <div className="wrapper">
              <div className="card-header">
                <p>{props.title}</p>
                <p>2hr</p>
              </div>
              <div className="contents">{props.disc}</div>
            </div>

      </div>
      <div className="approve">
        {props.status}
      </div>
</div>
      


     
    </>
  );
};

export default Popup;

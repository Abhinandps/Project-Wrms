import React,{useState,useEffect} from "react";
import "./Popup.css";
import Axios from "axios";
import swal from "sweetalert";


const Popup = ({ show, onClose,singleForm}) => {

    // const [form,setForm] = useState([]);

    // useEffect(() => {
    //     Axios.get('http://localhost:7000/api/get/workreport').then((response) => {
    //         setForm(response.data)
    //     })
    //   }, [])

  if (!show) {
    return null;
  }
  const update=(title)=>{
      

    Axios.patch('http://localhost:7000/api/stateupdate',{title:title}).then((response)=>{
    //  response.send("finisg")
    swal({
      title: "Report Approved",
      icon: "success",
      button: "OK!",
    });
  })
    

}


const reject=(title)=>{
        
  Axios.patch('http://localhost:7000/api/statereject',{title:title}).then((response)=>{
  //  response.send("finisg")
  swal({
    title: " Report Rejected",
    icon: "warning",
    button: "OK!",
  });
})
  

}

  
  return (
    <div className="modalWrapper">
      <div className="modal">
        <i onClick={onClose} class="fa-solid fa-xmark"></i>

        <div className="section">
        <Cards
        
              date={singleForm.title}
              comments={"Good"}
              time={"06:11:21 PM"}
              title={singleForm.title}
              disc={singleForm.Description}
              type={singleForm.Type}
            />
        </div>

        <div className="footer">
        <p><button  onClick={()=>{update(singleForm.title)}}>Approve</button></p>
        <p><button onClick={()=>{reject(singleForm.title)}}>Reject</button></p>
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
       <h2>{props.type}</h2>
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

import React,{useState,useEffect} from "react";
import "./Popup.css";
import Axios from "axios";
import swal from "sweetalert";


const Popup = ({ show, onClose,singleForm}) => {

    const [form,setForm] = useState([]);
    // console.log(form.title);

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

        {
        singleForm.status === "APPROVED" ? 
        <div className="footer">
        <button className="reject disabled" disabled>Aproved</button>
        </div>
        :  singleForm.status === "REJECTED" ?
        <div className="footer">
        <button className="reject disabled" disabled>Rejected</button>
        </div>
        :
        <div className="footer">
        <button className="aprove" onClick={()=>{update(singleForm.title)}}>Approve</button>
        <button className="reject" onClick={()=>{reject(singleForm.title)}}>Reject</button>
        </div>
        
        }

        



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
          {/* <select>
            <option value="">Excelent</option>
            <option value="">Good</option>
            <option value="">Need Improvemnet</option>

          </select> */}
          <p>{props.comments}</p>
        </div>
        <div className="aproved-on">
          <span>Time :</span>
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

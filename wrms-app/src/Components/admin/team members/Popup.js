import React, { useState, useEffect } from "react";
import "./Popup.css";
import Axios from "axios";
import swal from "sweetalert";
import { data } from "../dashboard/reportData";


const Popup = ({ show, onClose, reportingPersons, getData }) => {

  const [rPerson, setRperson] = useState();
  const [fname, setFname] = useState("")
  const [al, setAl] = useState([])

  getData(al);





  // console.log(rPerson);

  // console.log(reportingPersons);

  // const [form,setForm] = useState([]);



const fetchData= ()=>{

  // Axios.get(`http://localhost:7000/api/report/list${fname}`).then((response) => {
  //       setAl(response.data)
  //     })

  Axios.get(`http://localhost:7000/api/single/delete`).then((response) => {
        setAl(response.data)
      })




}



// fetchData()



  const handleInput = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:7000/api/single/fetch', { fname: rPerson })
      .then((res) => {

        swal({
          title: "Reporting Person Assigned",
          icon: "success",
          button: "OK!",
        });
      })

    //display the reporting person to the team page
    fetchData()

      

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

              <select onClick={(e) => {
                setRperson(e.target.value)
                setFname(e.target.value)
              }}>
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


        {/* {al.map((obj)=>{
      <p>assig:{obj.fname}</p>
     })} */}
        {/* <div className="footer">
          <button>{"singleForm.status"}</button>
        </div> */}
      </div>

    </div>

  );
};

export default Popup;

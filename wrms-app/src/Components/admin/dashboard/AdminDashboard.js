import React, { useState, useEffect } from 'react'
import Section from '../Section'
import Time from '../Time'
import ComponentOne from '../../user/pages/dashboard/components/UI/ComponentOne';
import ComponentTwo from '../../user/pages/dashboard/components/UI/ComponentTwo';
import Axios from 'axios';
import { data } from './reportData';
import Popup from '../Popup';




const AdminDashboard = () => {
  // for popup
  const [show, setShow] = useState(false);

  //state for single form

  const [singleForm,setSingleForm]=useState([]);

  console.log(singleForm);

  const [disform, setDisform] = useState([])
  const [disfor, setDisfor] = useState([])
  console.log(disfor);
  useEffect(() => {
    Axios.get('http://localhost:7000/api/get').then((response) => {
      setDisform(response.data)

    })
  }, [singleForm])

  const fetchs = async (title) => {
    const res = await Axios.get(`http://localhost:7000/api/single/form${title}`)
    setSingleForm(res.data[0]);

    // const responseData = res.data
    // {
    //   responseData.map(({
    //     title, Description, status
    //   }
    //   ) => {

    //     const title1 = title;
    //     const Description1 = Description;
    //     const status1 = status;


    //     Axios.post('http://localhost:7000/api/insert/formlist', { name: title1, email: Description1, set: status1 })

    //   })
    // }


  }

  return (
    <>
      <div className="header">
        <h1>Overview</h1>
        <Time />
      </div>
      <ComponentTwo>
        <Popup singleForm={singleForm} show={show} onClose={() => setShow(false)} />
        <div className="all-reports">

          {
            disform.map((obj) => {
              return (
                <div className="report-data" onClick={
                  () => {
                    fetchs(obj.title)
                    setShow(true);
                  }}>
                  <div className="data">
                    <p>{obj.title}</p>
                    <p>{obj.find.split("T18:30:00.000Z")}</p>
                    <div className="time">
                      <p>{obj.Totime.split(":00")}</p> -
                      <p>{obj.Fromtime.split(":00")}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }


        </div>
      </ComponentTwo>
    </>
  )
}

export default AdminDashboard
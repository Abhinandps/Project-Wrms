import React, { useState ,useEffect} from 'react'
import ComponentTwo from '../../user/pages/dashboard/components/UI/ComponentTwo'
import './TeamMembers.css'
import Time from '../Time'
import Axios from 'axios'

import Popup from './Popup'




const TeamMembers = () => {
    // for popup
    const [show, setShow] = useState(false);
    const [rlist, setRlist] = useState([]);

    const [reportingPersons, setReportingPersons] = useState([]);

    // /api/list/admin

    useEffect(() => {
        Axios.get('http://localhost:7000/api/list/admin').then((response) => {
            setReportingPersons(response.data)
    
        })
      }, [])

// displaY THE REPORTING PERSON
      useEffect(() => {
        Axios.get('http://localhost:7000/api/report/list').then((response) => {
          response.send(data)
            setRlist(response.data)
        })
      }, [])


      
    return (
        <div className="dashboard">
            <div className="header">
                <h1>Team Members</h1>
                <Time />
            </div>
            <div className="section_one">
                <ComponentTwo>
                    <Popup reportingPersons={reportingPersons} show={show} onClose={() => setShow(false)} />
                    <div className='header'>
                        <p>Members</p>
                    </div>
                    <div className="members-list">
                        <div className="card" onClick={() => { setShow(true) }}>


                            <img src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <p>Joesph Mathew</p>
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <p>Joesph Mathew</p>
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <p>Joesph Mathew</p>
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <p>Joesph Mathew</p>
                        </div>
                        <div className="card">
                            <img src="https://images.pexels.com/photos/1081685/pexels-photo-1081685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            <p>Joesph Mathew</p>
                        </div>
                    </div>
                </ComponentTwo>
            </div>
        </div>
    )
}

export default TeamMembers
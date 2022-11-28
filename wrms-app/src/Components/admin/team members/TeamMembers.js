import React from 'react'
import ComponentTwo from '../../user/pages/dashboard/components/UI/ComponentTwo'
import './TeamMembers.css'
import Time from '../Time'

const TeamMembers = () => {
  return (
    <div className="dashboard"> 
    <div className="header">
      <h1>Team Members</h1>
      <Time/>
    </div>
    <div className="section_one">
        <ComponentTwo>
            <div className='header'>
                <p>Members</p>
            </div>
            <div className="members-list">
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
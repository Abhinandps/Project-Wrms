import React from 'react'
import Section from '../Section'
import Time from '../Time'



const AdminDashboard = () => {
  return (
    <div className="dashboard"> 
    <div className="header">
      <h1>Overview</h1>
      <Time/>
    </div>
    <div className="section_one">
        <Section/>
    </div>
  </div>
  )
}

export default AdminDashboard
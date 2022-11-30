import React from 'react'
import Section from '../Section'
import Time from '../Time'
import ComponentOne from '../../user/pages/dashboard/components/UI/ComponentOne';
import ComponentTwo from '../../user/pages/dashboard/components/UI/ComponentTwo';



const AdminDashboard = () => {
  return (
    <div className="dashboard"> 
    <div className="header">
      <h1>Overview</h1>
      <Time/>
    </div>
    <ComponentTwo>
    <div className="section_one">
  
    </div>
    </ComponentTwo>
  </div>
  )
}

export default AdminDashboard
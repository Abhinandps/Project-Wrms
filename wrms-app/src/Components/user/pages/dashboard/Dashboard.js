
import Section from './components/Section'
import Time from './components/Time'
import "./Dashboard.css"




const Dashboard = (props) => {

 

  return (
    <div className="dashboard"> 
      <div className="header">
        <h1>Overview</h1>
        <Time/>
      </div>
      <div className="section_one">
          <Section title = {props.sub_title}
          />
      </div>
    </div>
  )
}

export default Dashboard

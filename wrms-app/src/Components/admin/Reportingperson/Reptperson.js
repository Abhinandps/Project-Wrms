import { useState, useEffect } from "react"
import Axios from "axios"
import ComponentOne from "../../user/pages/dashboard/components/UI/ComponentOne"
import ComponentTwo from "../../user/pages/dashboard/components/UI/ComponentTwo"
import Time from "../Time"


const Reptperson = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [school, setSchool] = useState("")
  const [display, setDisplay] = useState([])



  useEffect(() => {
    Axios.get('http://localhost:7000/api/list/admin').then((response) => {
      // response.send(response.data);
      setDisplay(response.data)

    })
  }, [])


  const onsub = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:7000/api/insert/admin', { fname: name, Email: email, school: school })

    setDisplay([...display, { fname: name, Email: email, school: school },
    ])
    alert("Report Added Sucessfully")
  }
  return (
    <>
      <div className="dashboard">

        <div className="header">
          <h1>Report List</h1>
          <Time/>
        </div>

        

          <form onSubmit={onsub}>
            <div className='cen'>

              <div className="na1">
                Name:
                <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="email">
                Email:
                <input type="text" placeholder='abc123@gmail.com' onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="school">
                Choose a school:
                <select onChange={(e) => setSchool(e.target.value)}>
                  <option value="Amritapuri">Amritapuri</option>
                  <option value="Amrita Bangalore">Amrita Bangalore</option>
                  <option value="Amrita Kochi">Amrita Kochi</option>
                  <option value="Amrita Coimbatore">Amrita Coimbatore</option>
                </select>
              </div>
              <button  style={{backgroundColor:"green"}} className="btn ">submit</button>

            </div>
          </form>
        

        <ComponentTwo>
          <p>Reporting Person List</p>

          <div className="all-reports">

            {
              display.map((obj) => {
                return (
                  <div onClick={
                    () => {


                    }} className="report-data person-list">
                    <div className="data">
                      <p>{obj.fname}</p>
                      <p>{obj.Email}</p>
                      <p>{obj.school}</p>
                      <button onClick={()=>alert("Drop data")} style={{backgroundColor:"red", borderRadius:"5px"}} className="btn">Drop</button>
                    </div>

                  </div>
                )
              })
            }


          </div>
        </ComponentTwo>
      </div>




    </>
  )
}







export default Reptperson
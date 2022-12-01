import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  Axios  from 'axios'
import swal from 'sweetalert'


const Login = () => {
  const [pass, setPass]=useState("")
  const [uname, setUname]=useState("")


  const register = (e) => {
    e.preventDefault();
    Axios.post('http://localhost:7000/api/register',{uname:uname,pass:pass})
    .then((res)=>{
     

      
      swal({
        title: "Reporting Person Assigned",
        icon: "success",
        button: "OK!",
      });
    })
  }


  return (
    <div>
      <h2>Login Pages</h2>
      <Link to="/user" > Go to dashboard </Link>
      <div className="registration">
        <h1>Registration</h1>
        <label>Username</label>
        <input type="text" onChange={(e)=>{
          setUname(e.target.value)
        }}/>
        <label>password</label>
        <input type="password"  onChange={(e)=>{
          setPass(e.target.value)
        }}/>
        <button onClick={register}>Register</button>
      </div>
      <div className="login">
      <h1>Login</h1>
      
        <input type="text" placeholder='username'/>
       <input type="password" placeholder='password'/>
      </div>
    </div>
  )
}

export default Login

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import  Axios  from 'axios'
import swal from 'sweetalert'


const Login = () => {
  const [pass, setPass]=useState("")
  const [uname, setUname]=useState("")

  const usename="ananthu";
  const password="123456"
  const register = () => {
     if(uname==usename && pass==password){
      alert("lOGIN SUCCESSFUL")
     }
     else{
      alert("fAILED")
     }
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
        <button onClick={register}>Login</button>
      </div>
      
    </div>
  )
}

export default Login

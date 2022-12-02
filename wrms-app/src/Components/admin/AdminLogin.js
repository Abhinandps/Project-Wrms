import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  const [adpassword, setPass]=useState("")
  const [adusename, setUname]=useState("")

  const usename="ravi";
  const password="123456"
  const register = () => {
     if(adusename==usename && adpassword==password){
      alert("lOGIN SUCCESSFUL")
     }
     else{
      alert("fAILED")
     }
  }

  return (
    <div>
      <h2>Login Pages</h2>
      <Link to="/admin" > Go to dashboard </Link>
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

export default AdminLogin
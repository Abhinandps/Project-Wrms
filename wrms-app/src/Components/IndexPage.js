import React from 'react'
import { Link, Route, Routes} from 'react-router-dom'

import Login from './user/pages/Login'


const IndexPage = () => {
  return (
    <div>
      <h2>Index Page</h2>

      <Link to="/login" element={<Login/>}>User</Link>
      <Link to="/admin-login">Admin</Link>


      <Routes>
        <Route path='/login'>
            <Route path=''/>
        </Route>
      </Routes>
    </div>


  )
}

export default IndexPage

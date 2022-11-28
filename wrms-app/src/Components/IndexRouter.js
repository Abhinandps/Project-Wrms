import React from 'react'
import IndexPage from './IndexPage'
import { Route, Routes } from "react-router-dom";

import Login from './user/pages/Login';


import Dashboard from './user/pages/dashboard/Dashboard';

const IndexRouter = () => {
  return (
    <>
      <Routes>
      
        <Route path='/' element={<IndexPage/>}/>
        <Route path='/login' element={<Login/>}>
            <Routes path="/dashboard" element={<Dashboard/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default IndexRouter

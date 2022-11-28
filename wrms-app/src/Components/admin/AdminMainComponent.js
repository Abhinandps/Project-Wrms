import React from 'react'
import { useState } from 'react';
import NavigationMenu from '../NavigationMenu';
import { NavData } from './NavData';
import TopBar from './TopBar';
import { Outlet } from 'react-router-dom';

import './AdminMainComponent.css';





const AdminMainComponent = () => {
    const [navdata,setNavdata] = useState('');
    return (
        <div className="App">
            <NavigationMenu setNavdata={setNavdata} Data={NavData} />
            <div className="section">
                  <TopBar data = {navdata}/>
                  <Outlet/>
            </div>
        </div>
      );
    }

export default AdminMainComponent

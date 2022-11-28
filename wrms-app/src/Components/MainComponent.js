import React from 'react'
import { useState } from 'react';
import NavigationMenu from './NavigationMenu';
import { NavData } from './NavData';
import TopBar from './TopBar';
import { Outlet } from 'react-router-dom';

import './MainComponent.css';



import Dashboard from './user/pages/dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import WorkReport from './user/pages/work report/WorkReport';

const MainComponent = () => {
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

export default MainComponent

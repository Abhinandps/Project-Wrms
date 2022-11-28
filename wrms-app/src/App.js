import React from "react";

import IndexPage from "./Components/IndexPage";
import { Link, Route, Routes } from "react-router-dom";
import IndexRouter from "./Components/IndexRouter";
import Login from "./Components/user/pages/Login";
import MainComponent from "./Components/MainComponent";
import WorkReport from "./Components/user/pages/work report/WorkReport";
import Dashboard from "./Components/user/pages/dashboard/Dashboard";

import NotFound from "./Components/user/pages/NotFound";
import NavigationMenu from "./Components/NavigationMenu";
import ReportDetails from "./Components/user/pages/report details/ReportDetails";

import { NavData } from "./Components/NavData";

// admin
import AdminMainComponent from "./Components/admin/AdminMainComponent"; 
import AdminDashboard from "./Components/admin/dashboard/AdminDashboard";
import AdminLogin from "./Components/admin/AdminLogin";
import TeamMembers from "./Components/admin/team members/TeamMembers";


function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<IndexPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin-login" element={<AdminLogin/>}/>
        <Route path="/user" element={<MainComponent />}>
           <Route index path="dashboard" element={<Dashboard />}/>
           <Route index path="work-report" element={<WorkReport/>}/>
           <Route index path="report-details" element={<ReportDetails/>}/>
           <Route path="*" element={<NotFound/>}/>
        </Route>

        <Route path="/admin" element={<AdminMainComponent/>}>
           <Route index path="dashboard"  element={<AdminDashboard/>}/>
           <Route index path="members"  element={<TeamMembers/>}/>
           <Route path="*" element={<NotFound/>}/>
        </Route>
        
      </Routes>

    </div>
  );
}

export default App;

import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"
// Dashboard componentconst 
const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="row">
                <div className="col-2">
                    <Sidebar />
                </div>
                <div className="col-10 main-content container w-80">
                    <Outlet />    
                </div>
            </div>
            
        </div>);
}; 

export default Dashboard;

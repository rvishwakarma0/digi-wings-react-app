import React from "react";
import { Outlet } from "react-router-dom";
import VolSidebar from "./VolSidebar"
// Dashboard componentconst 
const VolunteerDashboard = () => {
    return (
        <div className="dashboard">
            <div className="row">
                <div className="col-2">
                    <VolSidebar />
                </div>
                <div className="col-10 main-content container w-80">
                    <Outlet />
                </div>
            </div>
        </div>);
}; 

export default VolunteerDashboard;

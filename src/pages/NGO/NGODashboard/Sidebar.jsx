import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaUserFriends,
    FaRegAddressBook,
    FaSignOutAlt,
    FaRegListAlt
    
    
    
    
    
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"ngos",
            name:"Dashboard",
            icon:<FaUserAlt/>
        },
        {
            path:"VolReq",
            name:"Volunteer Management",
            icon:<FaRegListAlt/>
        },
        {
            path:"VolReg",
            name:"Requirements",
            icon:<FaRegAddressBook/>
        },
        {
            path:"/logout",
            name:"Logout",
            icon:<FaSignOutAlt/>
        }
       
    ]
    return (
        
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} >NGO</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        
    );
};

export default Sidebar;
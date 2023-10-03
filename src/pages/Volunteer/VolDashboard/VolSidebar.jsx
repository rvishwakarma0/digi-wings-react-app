import React, { useState } from 'react';
import {
   
    FaBars,
    FaUserAlt,
    FaCommentAlt,
    FaSearchLocation,
    FaSignOutAlt
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"vol",
            name:"Dashboard",
            icon:<FaUserAlt/>
        },
        {
            path:"nearngo",
            name:"Nearby Ngo",
            icon:<FaSearchLocation/>
        },
        {
            path:"nearvol",
            name:"Nearby Volunteer",
            icon:<FaSearchLocation/>
        },
        {
            path:"openreq",
            name:"Open Request Form",
            icon:<FaCommentAlt/>
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
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Volunteer</h1>
                   <div style={{marginLeft: isOpen ? "10%" : "0px"}} className="bars">
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
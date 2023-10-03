import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
import './App.css';
import  './Login Form/login.css';
import './pages/pages.css';



import NGOProfile from './pages/NGO/NGOProfile';
import VolunteerRequest from './pages/NGO/VolunteerManagement/VolunteerRequest';
import VolReg from './pages/NGO/VolunteerManagement/VolReg';
import RequirementForm from './pages/NGO/VolunteerManagement/RequirementForm';
import AddVolunteer from './pages/NGO/VolunteerManagement/AddVolunteer';
import UpdateNgoProfile from './pages/NGO/UpdateNgoProfile';

import Login from './Login Form/Login';
import NgoRegForm from './RegForm/NgoRegForm';
import VolRegForm from './RegForm/VolRegForm';
import Sidebar from './pages/NGO/NGODashboard/Sidebar';


import VolSidebar from './pages/Volunteer/VolDashboard/VolSidebar';
//import Navbar from './components/navbar/Navbar'
import Profile from './pages/Volunteer/Profile';
import NearbyNGO from './pages/Volunteer/NearbyNGO';
import NearbyVolunteer from './pages/Volunteer/NearByVolunteer';
import OpenRequestForm from './pages/Volunteer/OpenRequestForm';
import UpdateProfile from './pages/Volunteer/UpdateProfile'
import Dashboard from './pages/NGO/NGODashboard/Dashboard';
import VolunteerDashboard from './pages/Volunteer/VolDashboard/VolunteerDashboard';
import Logout from './Login Form/Logout';


const App = () => {
  return (

<Router>
  
    
    <main>

      <Routes>
       
        
        <Route path= "*" element = {<Login />}></Route>
        <Route path= "/logout" element = {<Logout />}></Route>
        <Route path= "/NgoRegForm" element = {<NgoRegForm />}></Route>
        <Route path= "/VolRegForm" element = {<VolRegForm />}></Route>


        <Route path="/ngo-dashboard" element = {<Dashboard/>}>
          <Route path= "VolReq" element = {<VolunteerRequest />}></Route>
          <Route path= "VolReg" element = {<VolReg />}></Route>
          <Route path= "addreq" element = {<RequirementForm />}></Route>
          <Route path= "addvol" element = {<AddVolunteer />}></Route>     
          <Route path= "ngos" element = {<NGOProfile />}></Route>
          <Route path= "edit-ngo" element = {<UpdateNgoProfile />}></Route>
        </Route>


        <Route path= "/volunteer-dashboard" element = {<VolunteerDashboard />}>  
          <Route path="vol" element={<Profile />} />
          <Route path="nearngo" element={<NearbyNGO />} />
          <Route path="nearvol" element={<NearbyVolunteer />} />
          <Route path="openreq" element={<OpenRequestForm />} />
          <Route path= "updatepro" element = {<UpdateProfile />}></Route>

        </Route>  
        </Routes>



    </main>
  </Router>


 
  
  )
}

export default App;
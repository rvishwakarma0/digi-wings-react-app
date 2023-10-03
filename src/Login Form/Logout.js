import React, {useEffect, useState} from 'react';
import {Link, redirect, useNavigate, useParams} from 'react-router-dom'
import './login.css';
import AuthService from '../services/auth';




const Logout = () => {
    const auth = new AuthService();
    
    const navigate = useNavigate();
  
    useEffect(() => {
      auth.logout()
        .then(() => {
          navigate("/", { replace: true });
        });
  
    }, []);
  
    return "";
};
export default Logout;
import React, {useEffect, useState} from 'react';
import {Link, redirect, useNavigate, useParams} from 'react-router-dom'
import './login.css';
import AuthService from '../services/auth';

const auth = new AuthService();


const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState("VOLUNTEER");
    const [msg, setMsg] = useState("");
    
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('token')){
            if(localStorage.getItem('ngo'))
                navigate('/ngo-dashboard');
            else if(localStorage.getItem('volunteer'))
            navigate('/volunteer-dashboard');
        }
    });
    
    
    
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User Type:', userType);
    console.log('Email:', email);
    console.log('Password:', password);
    
    try {
        if(userType === 'NGO'){
            auth.loginForNgo(email, password).then(
                function(value){console.log("login success"); navigate('/ngo-dashboard');},
                function(error){console.error('Login failed');
                setMsg('Login Failed');}
            );
            
        }
        if(userType === 'VOLUNTEER'){
            auth.loginForVolunteer(email, password).then(
                function(value){console.log("login success"); navigate('/volunteer-dashboard');},
                function(error){console.error('Login failed');
                setMsg('Login Failed');}
            );
            
        }
        // Redirect or perform any necessary actions after successful login
    } catch (error) {
        console.error('Login failed');
        setMsg('Login Failed');
    }
    };

    useEffect(()=> {
        setMsg("");
    }, [email,password,userType]);
    
    return(
        <div className='di'>
            <h2>Common Login Form For NGO & Volunteer </h2>
            <form onSubmit = {handleSubmit}>
                <div >
                    <select name='userType' onChange={(e)=>setUserType(e.target.value)}>
                        <option selected value="VOLUNTEER">Volunteer</option>
                        <option value="NGO">Ngo</option>
                    </select>
                </div>
                <div>
                    <label>Email :</label>
                    <input type = "email" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)} 
                            required
                            />
                </div>
                <div>
                    <label>Password :</label>
                    <input classname ="i" 
                            type = "password" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)} 
                            required
                            />
                </div>

                <div>
                <button className = "btn btn-success" type = "submit" style = {{marginRight:"20px"}}>Submit</button>
                
                <Link to = "/NgoRegForm" className='btn btn-info' style = {{marginRight:"20px"}}>Register as a NGO</Link>
                <Link to = "/VolRegForm" className='btn btn-info'>Register as a Volunteer</Link>
                
                </div>

            </form>
            <div className='msg' style={{color: 'darkorange'}}>
               {msg}
            </div>
        </div>
    );
};
export default LoginForm;
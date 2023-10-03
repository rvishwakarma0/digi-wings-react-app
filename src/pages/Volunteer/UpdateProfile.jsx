import React, { useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'


const UpdateVolunteerComponent = () => {
const [fname, setFName] = useState('')
const [lname, setLName] = useState('')
const [mobileNumber, setMobileNumber] = useState('')
const [emailId, setEmailId] = useState('')

const [addr, setAddr] = useState('')

const navigate =useNavigate();
//const {vid} =useParams();



const update= (e)=>{
  e.preventDefault();

  const volunteer = {fname, lname, mobileNumber, emailId, addr}

 
  console.log(volunteer);
  navigate("/VolReq")
}



  return (
    
    <div>
      <br />
      <div className = "c">
      <div className='row'>
          <div className = "card col-md-6 offsetset-md-3">
          <h2>Update Volunteer</h2>

          <br />
          <div className = "card-body">
            <form>
               <div className = "form-group mb-2">
                 <label className = "form-label">First Name : </label>
                 <input type = "text" 
                        placeholder = "Enter First Name"
                       
                        name = "FirstName" 
                        value = {fname}
                        onChange = {(e) => setFName(e.target.value)}> 
                  </input>
               </div>
               
               <div className = "form-group mb-2">
                 <label className = "form-label">Last Name :</label>
                 <input type = "text" 
                        placeholder = "Enter Last Name" 
                        name = "LastName" 
                       
                        value = {lname}
                        onChange = {(e) => setLName(e.target.value)}> 
                  </input>
               </div>
               <div className = "form-group mb-2">
                 <label className = "form-label">Mobile Number : </label>
                 <input type = "tel" 
                        maxLength="10"
                        placeholder = "Enter Mobile Number" 
                        
                        name = "mobileNumber" 
                        value = {mobileNumber}
                        onChange = {(e) => setMobileNumber(e.target.value)}> 
                  </input>
                  <div className = "form-group mb-2">
                 <label className = "form-label">Address : </label>
                 <input type = "text" 
                        placeholder = "Enter Address" 
                        name = "address" 
                        value = {addr}
                        onChange = {(e) => setAddr(e.target.value)}> 
                  </input>
               </div>
               </div>
               <div className = "form-group mb-2">
                 <label className = "form-label">Email Id : </label>
                 <input type = "email" 
                        placeholder = "Enter Email Id" 
                        
                        name = "emailId" 
                        value = {emailId}
                        onChange = {(e) => setEmailId(e.target.value)}> 
                  </input>
               </div>
               
               <button className = "btn btn-success" type="submit" onClick = {(e) => update(e)}>Submit</button>
               <Link to = "/vol" className = "btn btn-danger">Cancel</Link>
            </form>
          </div>

        </div>
      </div>
    </div>
    </div>
  )
}

export default UpdateVolunteerComponent

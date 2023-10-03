import React, { useState } from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'


const UpdateNGOComponent = () => {
const [name, setName] = useState('')
const [ngoRegistrationNumber, setNgoRegistrationNumber] = useState('')
const [mobileNumber, setMobileNumber] = useState('')
const [emailId, setEmailId] = useState('')
const [address, setAddress] = useState('')
const [ngo, setNGO] = useState([]);



const navigate =useNavigate();
const {id} =useParams();



 /*let getNgo = async (e) => {
   const data = new URLSearchParams();
         data.append('id', ngoid);
   fetch("http://localhost:8080/v1/get-ngo-by-id",{ body: data})
       .then(response => response.json())
     .then(ngo => setNGO(ngo));
 }*/

const save= (e)=>{
  e.preventDefault();

  const ngo = {name, ngoRegistrationNumber, mobileNumber, emailId, address}


 
  if(!name|| !ngoRegistrationNumber|| !mobileNumber || !emailId || !address){
    alert("All fields are mandatory")
 }else{

  
  console.log(ngo);
  navigate("/ngo")
 }
}



  return (
    <div>
      <br /> <br />
      <div className = "c">

       <div className='row'>
        <div className = "card col-md-6 offsetset-md-3">
          <h2>Update Volunteer</h2>
          <div className = "card-body">
            <form>
               <div className = "form-group mb-2">
                 <label className = "form-label">NGO Name : </label>
                 <input type = "text" 
                        placeholder = "Enter Name"
                        name = "Name" 
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}> 
                  </input>
               </div>
               
               <div className = "form-group mb-2">
                 <label className = "form-label">NGO Registration Number :</label>
                 <input type = "text" 
                        placeholder = "Enter NGO Registration Number" 
                        name = "ngoRegistrationNumber" 
                        value = {ngoRegistrationNumber}
                        onChange = {(e) => setNgoRegistrationNumber(e.target.value)}> 
                  </input>
               </div>
               <div className = "form-group mb-2">
                 <label className = "form-label">Mobile Number : </label>
                 <input type = "tel" 
                        maxLength="10"
                        placeholder = "Enter Mobile Number" 
                        name = "mobileNumber" 
                        pattern="[1-9]{1}[0-9]{9}"
                        value = {mobileNumber}
                        onChange = {(e) => setMobileNumber(e.target.value)}> 
                  </input>
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
               
               <div className = "form-group mb-2">
                 <label className = "form-label">Address : </label>
                 <input type = "text" 
                        placeholder = "Enter Address" 
                        name = "address" 
                        value = {address}
                        onChange = {(e) => setAddress(e.target.value)}> 
                  </input>
               </div>
               <div className="text-center">
               <button className = "btn btn-success" type="submit" onClick = {(e) => save(e)}>Submit</button>
               <Link to = "/ngo" className = "btn btn-danger">Cancel</Link>
               </div>
            </form>
          </div>

        </div>
      </div>
   </div>
   </div>
  )
}

export default UpdateNGOComponent
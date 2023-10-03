import React, { useEffect, useState} from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import AuthService from '../../services/auth'

const NGOProfile = () => {
   
    const [ngo, setNgo] = useState({})
    const [password, setPassword] = useState(null)
     const navigate = useNavigate();
     const auth = new AuthService();
    
    
     useEffect(() => {
 
     if(localStorage.getItem('token') && localStorage.getItem('ngo'))
     {
         setNgo(JSON.parse(localStorage.getItem('ngo')));
     }
     else{
         
         auth.logout();
         navigate('');
     }
     }, []);
    
    
     const saveOrUpdateNgo = (e) => {
         e.preventDefault();
         console.log("Edit id"); //add code here for updating the profile 
         // issue is this method is being called automatically 
     }
 
   
 
     // const deleteVolunteer = (vid) => {
 
     //     const data = new URLSearchParams();
     //     data.append('id', vid);
     //     fetch("http://localhost:8080/v1/delete-volunteer",
     //         { 
     //             method: 'DELETE', 
     //             body: data
     //         })
     //     .then(response => response.json())
     //     .then(msg => {
     //         console.log(msg);
     //     });
     //     console.log("Delete id",vid);
     //     //useEffect();
     //     window.location.reload(true);
     // }
 
    
   return (
     <div className = "c">
         <h2 className = "t1">Profile</h2>
         
         <form style={{width: "500px"}} onSubmit={(e)=>saveOrUpdateNgo(e)}>
             <div class="row">
                 <div class="form-group col-6">
                     <label for="first_name">Registration Number</label>
                     <input type="text" class="form-control" id="first_name" placeholder={ngo.registrationNumber} />
                 </div>
                 <div class="form-group col-6">
                     <label for="last_name">Name</label>
                     <input type="text" class="form-control" id="last_name" placeholder={ngo.name} />
                 </div>
             </div> 
             <div class="form-group">
                 <label for="mobile">Mobile Number</label>
                 <input type="tel" class="form-control" id="mobile" placeholder={ngo.mobile} />
             </div>
             <div class="form-group">
                 <label for="email">Email address</label>
                 <input type="email" class="form-control" id="email" placeholder={ngo.email} />
             </div>
             <div class="form-group">
                 <label for="address">Address</label>
                 <textarea class="form-control" id="address" rows="2" placeholder={ngo.address}></textarea>
             </div>
             <div class="form-group row">
                 <div class="col-6">
                 <label for="location_lat">Location - lat</label>
                 <input type="text" class="form-control" id="location_lat" placeholder={(ngo.location) ? ngo.location.latitude:""} />
                 </div> <div class="col-6">
                 <label for="location_long">Location - long</label>
                 <input type="text" class="form-control" id="location_long" placeholder={(ngo.location)? ngo.location.longitude: ""} />
                 </div>
             </div>
             <div class="form-group row">
                 <div class="col-8">
                 <label for="password">Password</label>
                 <input type="password" class="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} />
             
                 </div><div class="col-4">
                 <label for="submit"></label>
                     <input type="submit" class="form-control" id="submit" value="Update Profile" />
                 </div>
             </div>
         </form>
         
     </div>
   );
}

export default NGOProfile


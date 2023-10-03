import React, { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const VolunteerRequest = () => {
   
   const [volunteer, setVolunteer] = useState([])


   useEffect(() => {
     fetch("http://localhost:8080/v1/get-all-volunteers")
       .then(response => response.json())
       .then(json => {
        const tempAr = []
        tempAr.push(json[0]);
        tempAr.push(json[1]);
        tempAr.push(json[2]);
        tempAr.push(json[3]);
        tempAr.push(json[4]); 
        setVolunteer(tempAr)
      })
   }, [])

   const approveVolunteer = (id) => {
    axios.post(`/api/approveVolunteer/${id}`, { status: 'approved' })
      .then(res => {
        const updatedVolunteer = volunteer.map(v => {
          if (v.id === id) {
            return { ...v, status: res.data.status };
          }
          return v;
        });
        setVolunteer(updatedVolunteer);
      })
      .catch(err => {
        console.log(err);
      });
  }
  const disapproveVolunteer = (id) => {
    axios.post(`/api/disapproveVolunteer/${id}`, { status: 'disapproved' })
      .then(res => {
        const updatedVolunteer = volunteer.map(v => {
          if (v.id === id) {
            return { ...v, status: res.data.status };
          }
          return v;
        });
        setVolunteer(updatedVolunteer);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className = "c">
        <h2 className = "t1">Volunteer Reuqests</h2>
        
        <table className = "table table-bordered table-striped">
            <thead>
                <th> Volunteer Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email Id</th>
                <th>Mobile Number</th>
                <th>Address</th> 
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    volunteer.length > 0 &&
                    volunteer.map(
                        v =>(
                        <tr key = {v.id}>
                            <td>{v.id}</td>
                            <td>{v.firstName}</td>
                            <td>{v.lastName}</td>
                            <td>{v.email}</td>
                            <td>{v.mobile}</td>
                            <td>{v.address}</td>
                           
                            <td>
                            
                    <button onClick={() => approveVolunteer(v.id)}>Approve</button><br></br>
                    <button onClick={() => disapproveVolunteer(v.id)}>Disapprove</button>                  
                               
                            </td>
                        </tr>
                        )  
                    )
                }
            </tbody>
        </table>
      
    </div>
  )
}

export default VolunteerRequest



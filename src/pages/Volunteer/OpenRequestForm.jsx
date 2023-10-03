import React, { useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
const VolunteerRequest = () => {
   
   const [volunteer, setVolunteer] = useState([])


   useEffect(() => {
     fetch("http://localhost:8080/v1/get-all-volunteers")
       .then(response => response.json())
       .then(json => setVolunteer(json))
   }, [])

   
  return (
    <div className = "c">
        <h2 className = "text-center">Open Request Form</h2>
        <br/>
        <div>
            {/* <Link to = "/addVol" className = "btn btn-primary mb-2" > Add </Link> */}
            <button>Add</button>
        </div>
        <br />
        <table className = "table table-bordered table-striped">
            <thead>
                <th> Volunteer Id</th>
                <th>Message</th>
                <th>Email Id</th>
                <th>Mobile Number</th>
                <th>Address</th> 
                
            </thead>
            <tbody>
                {
                    volunteer.length > 0 &&
                    volunteer.map(
                        v =>(
                        <tr key = {v.id}>
                            <td>{v.id}</td>
                            <td>{v.name}</td>
                            <td>{v.message}</td>
                            <td>{v.email}</td>
                            <td>{v.mobile}</td>
                            <td>{v.address}</td>
                           
                            
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

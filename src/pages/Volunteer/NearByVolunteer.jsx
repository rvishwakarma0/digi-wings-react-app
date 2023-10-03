import React, { useEffect, useState} from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import axios from "axios";




function VolunteerList() {
    const [vols, setvols] = useState([]);
    const [searchInput, setSearchInput] = useState("");
  
    useEffect(() => {
      axios.get("http://localhost:8080/v1/get-nearby-vol").then((res) => {
       
        const vols = res.data;
        setvols(vols);
      });
    }, []);
  
    const handleChange = (event) => {
      setSearchInput(event.target.value);
    };
  
    const filteredvols = vols.filter((vol) =>
      vol.name.toLowerCase().includes(searchInput.toLowerCase())
    );

  return (
    <div className = "c">
      <div className='row'>
     <form>
     <h2 className = "text-center">Search Nearby Volunteer</h2>
        <input className='text-center'
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit">Search</button>
      </form>

        <br/>
       
        
        <table className = "table table-bordered table-striped">
            <thead>
                <th>VolunteerId</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile Number</th>
                <th>Email Id</th>
                <th>Address</th>
                
            </thead>
            <tbody>
                
            {filteredvols.map((vol) => (
                        
                        <tr key = {vol.id}>
                            <td>{vol.id}</td>
                            <td>{vol.firstName}</td>
                            <td>{vol.lastName}</td>
                            <td>{vol.mobile}</td>
                            <td>{vol.email}</td>
                            <td>{vol.address}</td>
                            
                        </tr>
                        )  
                    )
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default VolunteerList;



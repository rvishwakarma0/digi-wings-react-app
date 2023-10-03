import React, { useEffect, useState} from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import axios from "axios";
import APIService from '../../services/api.js';
const apiService = new APIService();

var ngoList;
const styleForModal = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function NGOList() {
    const [ngos, setngos] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (event) => {
      setSearchInput(event.target.value);
      console.log(searchInput);
    };
  


    const handleSubmit = (e) => {
        e.preventDefault();
        apiService.getNearByNgo(1, searchInput)
        .then(response => response.json())
       .then(json => setngos(json));
    }


  return (
    <div className = "c">
      <div className='row'>
     <form onSubmit={handleSubmit}>
     <h2 className = "text-center">Search Nearby NGO</h2>
        <input className='text-center'
          type="text"
          placeholder="Enter distance in KMs"
          onChange={handleChange}
          value={searchInput}
        />
        <button type="submit">Search</button>
      </form>

        <br/>
       
        
        <table className = "table table-bordered table-striped">
            <thead>
                <th>NGO Id</th>
                <th>NGO Name</th>
                <th>Registration Number</th>
                <th>Mobile Number</th>
                <th>Email Id</th>
                <th>Address</th>
                <th>Actions</th>
            </thead>
            <tbody>
                
            {ngos.map((ngo) => (
                        
                        <tr key = {ngo.id}>
                            <td>{ngo.id}</td>
                            <td>{ngo.name}</td>
                            <td>{ngo.registrationNumber}</td>
                            <td>{ngo.mobile}</td>
                            <td>{ngo.email}</td>
                            <td>{ngo.address}</td>
                            <td>
                            <a href={'apply-for-ngo/'+ngo.id}>Apply To Form</a>
                            </td>
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

export default NGOList;



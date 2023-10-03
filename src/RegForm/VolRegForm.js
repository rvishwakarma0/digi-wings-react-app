import React, { useEffect, useState } from 'react'

function VolRegForm() {
    const data = { firstname: "", lastname: "", contact: "", email: "", password: "" };
    const [inputData, setInputData] = useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        console.log("Registered")
    }, [flag])
    function handleData(e) {
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (!inputData.firstname || !inputData.lastname || !inputData.contact || !inputData.email || !inputData.password) {
            alert("All fields are mandatory")
        }
        else {
            setFlag(true)
        }
    }
    return (
        <>
            <pre>{(flag) ? <h2 className='ui-define'>Hello {inputData.firstname}, you have Registered successfully!</h2> : ""}</pre>
            <pre><a href="http://localhost:3000/">{(flag) ? <button type="Login"><strong><h3>Log In</h3></strong></button> : ""}</a></pre>
        <div className='c' >
            <div className='row'>
            <form>
            <div className='header'>
                <h1>Volunteer Registration Form</h1>
            </div>
            <div>
                <input className='d' type={"text"} placeholder="Enter your first name" name='firstname' value={inputData.firstname} onChange={handleData}></input>
            </div>
            <div>
                <input className='d' type={"text"} placeholder="Enter your last name" name='lastname' value={inputData.lastname} onChange={handleData}></input>
            </div>
            <div>
                <input className='d' type={"text"} pattern="[1-9]{1}[0-9]{9}" placeholder="Enter your contact no" name='contact' value={inputData.contact} onChange={handleData}></input>
            </div>
            <div>
                <input className='d' type={"text"} placeholder="Enter your email" name='email' value={inputData.email} onChange={handleData}></input>
            </div>
            
            <div>
                <input className='d' type={"password"} placeholder="Enter your password" name='password' value={inputData.password} onChange={handleData}></input>
            </div>
            
            <div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
      </form>
      </div>
      </div>
     
  </>
  )
}

export default VolRegForm
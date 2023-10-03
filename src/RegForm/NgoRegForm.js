import React, { useEffect, useState } from 'react'
import './RegForm.css';
function NgoRegForm() {
    const data = { name: "", regno: "", contact: "", addr: "", email: "", password: "" };
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
        if (!inputData.name || !inputData.regno || !inputData.contact || !inputData.addr || !inputData.email || !inputData.password) {
            alert("All fields are mandatory")
        }
        else {
            fetch("http://localhost:8080/v1/register-ngo", {
                method: "POST",
                headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify({
                registrationNumber: inputData.regno,
                name: inputData.name,
                email: inputData.email,
                mobile: inputData.contact ,
                address: inputData.addr,
                password: inputData.password
                }),
            }).then(
                function(value){
                    if(value.status === 200){
                        setFlag(true);
                        console.log("registration success");
                    }else{
                        console.log("registration failed");
                        setFlag(false);                            
                    }
                },function(error){
                    console.log("registration failed");
                    setFlag(false)
                });
               
        }
        

    }
    return (
        <>
            <pre>{(flag) ? <h2 className='ui-define'>Hello {inputData.name}, you have Registered successfully!</h2> : ""}</pre>
            
            <pre><a href="http://localhost:3000/">{(flag) ? <button type="Login"><strong><h3>Log In</h3></strong></button> : ""}</a></pre>
            
        <div className='c' >
            <div className='row'>
                <form>
            <div className='header'>
                <h1>NGO Registration Form</h1>
            </div>
            <div>
                <input className='d' type={"text"} placeholder="Enter NGO's name" name='name' value={inputData.name} onChange={handleData}></input>
            </div>
            <div>
                <input className='d' type={"text"} placeholder="Enter NGO's registration number" name='regno' value={inputData.regno} onChange={handleData}></input>
            </div>
            <div>
                <input className='d' type={"text"} pattern="[1-9]{1}[0-9]{9}" placeholder="Enter NGO's contact no" name='contact' value={inputData.contact} onChange={handleData}></input>
            </div>
            <div >
                <input className='d' type={"text"} placeholder="Enter NGO's address" name='addr' value={inputData.addr} onChange={handleData}></input>
            </div>
            <div>
                <input className='d' type={"text"} placeholder="Enter NGO's email" name='email' value={inputData.email} onChange={handleData}></input>
            </div>
            
            <div>
                <input className='d' type={"password"} placeholder="Enter NGO's password" name='password' value={inputData.password} onChange={handleData}></input>
            </div>
            
            <div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>

      </form>
    </div>
    
    </div>

    <div class="container">
    <pre>{(flag) ? <h2 className='ui-define'>Hello {inputData.name}, you have Registered successfully!</h2> : ""}</pre>
            
            <pre><a href="http://localhost:3000/login">{(flag) ? <button type="Login"><strong><h3>Log In</h3></strong></button> : ""}</a></pre>
            
    </div>
  </>

  )
}

export default NgoRegForm
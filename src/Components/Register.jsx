import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerApi } from '../Services/allApi';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate = useNavigate()
//  create a state to hold all the input values
 const [userData ,setUserData] = useState({
        name : "",
        captianname : "",
        email : "",
        password : "",
        coachname : "",
        role : "team"
 })
 const handleRegister = async()=>{
    console.log("user entered data");
    console.log(userData);
    const {name ,captianname, email , password ,coachname, role}= userData;
    if( !name || !captianname || !email || !password || !coachname){
        alert("Pleasse fill the form")
    }
    else{
        // call api to register User
            

        const result = await registerApi(userData)
        if(result.status === 201){
            alert("User regitered Successfully")
             navigate('/Login')
        }
        else {
            alert("Something happened")
        }
    }
    
    
 }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center'
                style={{ height: '100vh', background: 'rgb(61, 68, 64)' }} >
                <div    
                    style={{


                        backgroundColor: 'rgb(155, 144, 253)',
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 0 35px rgba(0, 0, 0, 0.46)'
                    }}>
                    <Form >
                        <h3 className='text-center text-'>Team Register</h3>
                        <div className='d-flex mt-3'>
                            <Form.Group className="mb-2  w-50" controlId="formBasicPassword">
                                <Form.Label>Team Name</Form.Label>
                                <Form.Control type="text" placeholder="Team Name" 
                                onChange={(e)=>setUserData({...userData, name:e.target.value})} />
                            </Form.Group>
                            <Form.Group className="ms-2 w-50" controlId="formBasicPassword">
                                <Form.Label>Captain Name</Form.Label>
                                <Form.Control type="text" placeholder="Captain Name" 
                                onChange={(e)=>setUserData({...userData, captianname:e.target.value})} />
                            </Form.Group>
                        </div>
                        <div className='d-flex mt-2  ' >
                            <Form.Group className="" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" 
                                onChange={(e)=>setUserData({...userData, email:e.target.value})}/>
                            </Form.Group>
                            <Form.Group className="ms-2 mb-2" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                onChange={(e)=>setUserData({...userData, password:e.target.value})} />
                            </Form.Group>
                        </div>
                        <div className='d-flex'>
                            <Form.Group className="w-50" controlId="formBasicPassword">
                                <Form.Label>Coach Name</Form.Label>
                                <Form.Control type="text" placeholder="Coach Name" 
                                onChange={(e)=>setUserData({...userData, coachname:e.target.value})}/>
                            </Form.Group>
                            
                        </div>
                        <Form.Group controlId="formFile " className="mb-2 mt-2">
                            <Form.Label>Team LOGO Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Button variant="primary" type="button" onClick={handleRegister}>
                            Register
                        </Button>
                    </Form>
                </div>

            </div>
        </>
    )
}

export default Register
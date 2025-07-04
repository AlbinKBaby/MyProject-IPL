import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerAdmin } from '../Services/allApi';
import {  useNavigate } from 'react-router-dom';

``
function AdmiRegister() {

  const navigate = useNavigate()
  
  const [userData , setUserData] = useState({
    name : "",
    email : "",
    password : "",
    role : "admin"
  })

  const handleRegister = async() => {
    console.log("admin entered data");
    console.log(userData);

    const { name , email , password , role} = userData ;
    if( !name || !email || !password ){
      alert("Please fill the Form")
    }
    else{
      // call api to register
      const result = await registerAdmin(userData)
      if(result.status === 201){
        alert("admin reg successfully")
      navigate('/Login')
      }
      else{
        alert("Something admin happened")
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
            <h3 className='text-center text-'>Admin Register</h3>

            <Form.Group className="mb-2  " controlId="formBasicPassword">
              <Form.Label>Admin Name</Form.Label>
              <Form.Control type="text" placeholder="Admin Name"
                onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
            </Form.Group>
             <Form.Group className="" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email"
                onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
            </Form.Group>
            <Form.Group className=" mb-2" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
                onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
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

export default AdmiRegister
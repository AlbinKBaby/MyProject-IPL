import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { registerAsso } from '../Services/allApi';
import {  useNavigate } from 'react-router-dom';

function AssoRegister() {

    const navigate = useNavigate()
    //  create a state to hold all the input values
    const [userData, setUserData] = useState({
        name: "",
        state: "",
        email: "",
        password: "",
        role: "association"
    })
    const handleRegister = async () => {
        console.log("user entered data");
        console.log(userData);
        const { name, state, email, password , role} = userData;
        if (!name || !state || !email || !password) {
            alert("Pleasse fill the form")
        }
        else {
            // call api to register User
            const result = await registerAsso(userData)
            if (result.status === 201) {
                alert("asso regitered Successfully")
                 navigate('/Login')
            }
            else {
                alert("Something asso happened")
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
                        <h3 className='text-center text-'>Association Register</h3>

                        <Form.Group className="mb-2  " controlId="formBasicPassword">
                            <Form.Label>Association Name</Form.Label>
                            <Form.Control type="text" placeholder="Association   Name"
                                onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="" controlId="formBasicPassword">
                            <Form.Label>State</Form.Label>
                            <select className="form-control" name="states" id="states"
                                value={userData.state}
                                onChange={(e) => setUserData({ ...userData, state: e.target.value })} >
                                <option value="">--Select State--</option>
                                <option value="andhra-pradesh">Andhra Pradesh</option>
                                <option value="goa">Goa</option>
                                <option value="gujarat">Gujarat</option>
                                <option value="karnataka">Karnataka</option>
                                <option value="kerala">Kerala</option>
                                <option value="manipur">Manipur</option>
                                <option value="punjab">Punjab</option>
                                <option value="rajasthan">Rajasthan</option>
                                <option value="tamil-nadu">Tamil Nadu</option>
                                <option value="west-bengal">West Bengal</option>
                            </select>
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

export default AssoRegister
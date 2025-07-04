import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleLogin = async () => {
        const { email, password } = userData;
        console.log(email, password);


    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center'
                style={{ height: '100vh', background: 'rgb(61, 68, 64)' }} >
                <div
                    style={{
                        width: '400px',
                        backgroundColor: 'rgb(110, 99, 148)',
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 0 35px rgba(0, 0, 0, 0.46)'
                    }}>
                    <Form >
                        <h3 className='text-center '>Login</h3>
                        <div className='mt-2' >
                            <Form.Group className="w-100" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"
                                    value={userData.email}
                                    onChange={(e) =>
                                        setUserData({ ...userData, email: e.target.value })
                                    } />
                            </Form.Group>
                            <Form.Group className=" mb-2" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"
                                    value={userData.password}
                                    onChange={(e) =>
                                        setUserData({ ...userData, password: e.target.value })
                                    } />
                            </Form.Group>
                        </div >
                        <div className='d-flex justify-content-center mt-4 '>
                            <Button variant="primary" type="button" onClick={handleLogin}>
                                Login
                            </Button>

                        </div>

                    </Form>
                </div>

            </div>
        </>
    )
}

export default Login
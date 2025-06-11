import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'
                style={{ height: '100vh', background: 'linear-gradient(to left,rgb(149, 158, 154),rgb(114, 121, 82))' }} >
                <div
                    style={{
                        width:'400px',
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
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className=" mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </div >
                       <div className='d-flex justify-content-between'>
                         <Button variant="primary" type="button">
                            Login
                        </Button>
                        <Link to={'/admin'}>
                        <Button>Admin</Button>
                        </Link>
                        <Link to={'/user'}>
                        <Button>User</Button>
                        </Link>
                       </div>
                        <p className='mt-3 text-center text-white'>Login as a Player</p>
                    </Form>
                </div>

            </div>
        </>
    )
}

export default Login
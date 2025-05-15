import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Register() {
    return (
        <>
            <div className='d-flex justify-content-center align-items-center'
                style={{ height: '100vh', background: 'linear-gradient(to left,rgb(109, 143, 148),rgb(84, 95, 34))' }} >
                <div
                    style={{
                        

                        backgroundColor: 'rgb(110, 99, 148)',
                        padding: '30px',
                        borderRadius: '10px',
                        boxShadow: '0 0 35px rgba(0, 0, 0, 0.46)'
                    }}>
                    <Form >
                        <h3 className='text-center text-'>Team Register</h3>
                       <div className='d-flex mt-3'>
                       <Form.Group className="mb-2  w-50" controlId="formBasicPassword">
                            <Form.Label>Team Name</Form.Label>
                            <Form.Control type="text" placeholder="Team Name" />
                        </Form.Group>
                        <Form.Group className="ms-2 w-50" controlId="formBasicPassword">
                            <Form.Label>Captain Name</Form.Label>
                            <Form.Control type="text" placeholder="Captain Name" />
                        </Form.Group>
                       </div>
                    <div className='d-flex mt-2  ' >
                    <Form.Group className="" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="ms-2 mb-2" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Password" />
                        </Form.Group>
                    </div>
                    <Form.Group className="w-50" controlId="formBasicPassword">
                            <Form.Label>Coach Name</Form.Label>
                            <Form.Control type="text" placeholder="Coach Name" />
                        </Form.Group>
                        <Form.Group controlId="formFile " className="mb-2 mt-2">
                            <Form.Label>Team Profile Image</Form.Label>
                            <Form.Control type="file" />
                        </Form.Group>
                        <Button variant="primary" type="button">
                            Submit
                        </Button>
                    </Form>
                </div>

            </div>
        </>
    )
}

export default Register
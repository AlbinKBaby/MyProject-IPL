import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import trophy from '../assets/trophy.png'

function RegLog() {
    
  const [showOptions, setShowOptions] = useState(false);

  const handleRegisterClick = (e) => {
    e.preventDefault(); // prevent form submission
    setShowOptions(true); // show the new buttons
  };

    return (
        <>
            <div style={{ background: 'rgb(61, 68, 64)' }} >

                <Container>
                    <Row>
                        <Col className='mt-2 d-flex justify-content-center align-items-center'>
                            <div>
                                <img src={trophy} alt=""
                                    style={{ width: '250px' }} />
                            </div>
                            <div>
                                <p style={{ fontSize: '100px', fontWeight: 'bolder', color: 'black', position: 'relative', zIndex: '1' }}>IPL</p><br />
                                <p style={{ fontSize: '50px', fontWeight: 'bold', color: 'black' }}>AUCTION</p><br />
                                <p style={{ fontSize: '40px', fontWeight: 'bold', color: 'black' }}>2028</p>
                            </div>
                        </Col>
                        <Col className='mt-2 d-flex justify-content-center align-items-center border border-light rounded-pill '>
                            <form
                                className='d-flex flex-column justify-content-center align-items-center w-75 h-100 p-4 rounded-3'
                                style={{ background: 'rgb(61, 68, 64)'}}
                            >
                                <button
                                    type="submit"
                                    className='btn btn-light w-50 mb-3 rounded-pill'
                                    onClick={handleRegisterClick}
                                >
                                    Register
                                </button>

                                {showOptions && (
                                    <div className='d-flex flex-column gap-2 w-50'>
                                        <Link to={'/adminregister'}>
                                        <button className='btn btn-secondary'>Admin</button>
                                        </Link>
                                        <Link to={'/register'}>
                                        <button className='btn btn-secondary'>Team</button>
                                        </Link>
                                        <Link to={'/assoregister'}>
                                        <button className='btn btn-secondary'>Association</button>
                                        </Link>
                                    </div>
                                )}
                            </form>
                        </Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default RegLog
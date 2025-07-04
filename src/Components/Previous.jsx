import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import pone from '../assets/topauctinplayers/2023.JPG'
import ptwo from '../assets/topauctinplayers/2024.JPG'
import pthree from '../assets/topauctinplayers/2025.JPG'

function Previous() {
    return (
        <>
            <div 
           style={{ background: 'rgb(61, 68, 64)', }}  >

                <Container  >
                    <Row className='pb-2'>
                        <Col className='form-control me-5 p-2 mt-3 '
                            style={{
                                borderColor:'black',
                                backgroundImage: 'linear-gradient(to right ,rgb(6, 2, 22) ,rgba(0, 0, 0, 0.74))',
                                color: 'white'
                            }}>
                            <h3 className='d-flex align-items-center justify-content-center mt-2'>Previous Year Auction </h3>
                            <div className="row p-5">
                                <div className=' col-md-6 d-flex align-items-center justify-content-center '>
                                    <p className='border border-primary p-3 w-100'>
                                        <h5 className='d-flex align-items-center justify-content-center '>182</h5>
                                        <h6> Players
                                            Sold</h6></p>
                                </div>
                                <div className=' col-md-6 d-flex align-items-center justify-content-center  '>
                                    <p className='border border-primary p-3'>
                                        <h5 className='d-flex align-items-center justify-content-center '>62</h5>
                                        Overseas
                                        Players Sold
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className=' col-md-6  d-flex align-items-center justify-content-center'>
                                    <p className='border border-primary p-3'>
                                        <h5 className='d-flex align-items-center justify-content-center '>8</h5>
                                        RTMs
                                        Used
                                    </p>
                                </div>
                                <div className=' col-md-6  d-flex align-items-center justify-content-center'>
                                    <p className='border border-primary p-3'>
                                        <h5 className='d-flex align-items-center justify-content-center '>₹639.15 cr</h5>
                                        Total
                                        Spent
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className='form-control p-1 mt-3'
                        style={{backgroundColor:'black',borderColor:'black'}}>
                            <div id="carouselExampleAutoplaying" class="carousel slide " data-bs-ride="carousel"
                                style={{ width: '100%', height: '280px' }}>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" >
                                        <img src={pone} class="d-block w-100 h-100" />
                                        <h4 className='d-flex justify-content-center text-light'>2025</h4>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={ptwo} class="d-block w-100" alt="..." />
                                        <h4 className='d-flex justify-content-center text-light'>2024</h4>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={pthree} class="d-block w-100" alt="..." />
                                        <h4 className='d-flex justify-content-center text-light'>2023</h4>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Previous
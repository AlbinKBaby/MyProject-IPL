import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import trophy from '../assets/trophy.png'

function RegLog() {
    return (
        <>
            <div style={{ background: 'linear-gradient(to left,rgb(48, 25, 131),rgb(130, 158, 3))' }} >

            <Container>
                <Row>
                    <Col className='mt-2 d-flex justify-content-center align-items-center'>
                    <div>
                        <img src={trophy} alt=""
                         style={{  width:'250px' }}/>
                    </div>
                    <div>
                    <p  style={{ fontSize: '100px', fontWeight: 'bolder', color:'black',position:'relative', zIndex: '1'}}>IPL</p><br />
                    <p  style={{ fontSize: '50px', fontWeight: 'bold', color:'black'}}>AUCTION</p><br />
                    <p  style={{ fontSize: '40px', fontWeight: 'bold',color:'black' }}>2028</p>
                    </div>
                    </Col>
                    <Col >
                      
                    </Col>
                </Row>
            </Container>

            </div>
        </>
    )
}

export default RegLog
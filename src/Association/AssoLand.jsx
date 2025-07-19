import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import AssoDash from './AssoDash';

function AssoLand() {
    return (
        <>
            <div className='d-flex'>
                <AssoDash/>
           
            <div className='d-flex'>
                
                <div className="mt-3 p-2 ms-3 d-flex">
                   
                    <Card className="ms-3"
                        style={{ width: '18rem', height: '22rem' }}>
                        <Card.Body>
                            <Card.Img style={{ height: '260px' }}
                                src="https://i.pinimg.com/736x/5a/64/4b/5a644bd7163f2995a8a7937eb6d25ac3.jpg" />
                            <Link to={'/'}>
                                <Button className="mt-3 p-2"
                                    variant="primary">Add Players</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                    <Card className="ms-3"
                        style={{ width: '18rem', height: '22rem' }}>
                        <Card.Body>
                            <Card.Img style={{ height: '260px' }}
                                src="https://i.pinimg.com/736x/34/74/84/347484b9dac07918be5419b9b6469210.jpg" />
                            <Link to={'/'}>
                                <Button className="mt-3 p-2"
                                    variant="primary">Requests</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
             </div>
        </>
    )
}

export default AssoLand
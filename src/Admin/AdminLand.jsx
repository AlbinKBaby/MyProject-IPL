import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import DashboardAdmin from './DashboardAdmin';
import Button from 'react-bootstrap/Button';


function AdminLand() {
    return (
        <>
            <div className='d-flex'>
                   <DashboardAdmin/>
            <div className="mt-3 p-2 ms-3 d-flex">
                <Card style={{ width: '18rem', height: '22rem' }}>
                    <Card.Body>
                        <Card.Img variant="" src="https://i.redd.it/wj6nmlxxrlk51.png" />
                        <Link to={'/Teams'}>
                            <Button className="mt-3 p-2"
                                variant="primary">Teams</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="ms-3"
                    style={{ width: '18rem', height: '22rem' }}>
                    <Card.Body>
                        <Card.Img style={{height:'260px'}}
                         src="https://i.pinimg.com/736x/5a/64/4b/5a644bd7163f2995a8a7937eb6d25ac3.jpg" />
                        <Link to={'/players'}>
                            <Button className="mt-3 p-2"
                                variant="primary">Players</Button>
                        </Link>
                    </Card.Body>
                </Card>
                <Card className="ms-3"
                    style={{ width: '18rem', height: '22rem' }}>
                    <Card.Body>
                        <Card.Img style={{height:'260px'}}
                        src="https://i.pinimg.com/736x/34/74/84/347484b9dac07918be5419b9b6469210.jpg" />
                        <Link to={'/requests'}>
                            <Button className="mt-3 p-2"
                                variant="primary">Requests</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
            </div> 
        </>
    )
}

export default AdminLand
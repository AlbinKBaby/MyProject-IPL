import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DashboardAdmin from './DashboardAdmin';

function Players() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <div className='d-flex'>
                <DashboardAdmin />
                <div className='w-100  '>
                    <div className='d-flex mt-2 mb-1 '>
                        <div className='w-75 '>
                            <h2 className='w-100 fw-bold text-center mb-3'>Players</h2>
                        </div>
                        <div className="input-group w-25 p-2 ms-auto">
                            <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-magnifying-glass fa-lg"></i></span>
                            <input type="text" className="form-control " placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className='form-control '>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Player Name</th>
                                    <th>Team Name</th>
                                    <th>Specialization</th>
                                    <th>Nationality</th>
                                    <th>Base Price</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>MS Dhoni</td>
                                    <td>Chennai Super Kings</td>
                                    <td>Wicketkeeper Batter</td>
                                    <td>India</td>
                                    <td>₹15 crore</td>
                                    <td>
                                        <Button onClick={handleShow}>
                                            <i className="fa-solid fa-square-arrow-up-right fa-xl"></i>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Virat Kohli</td>
                                    <td>Royal Challengers Bengaluru</td>
                                    <td>Batter</td>
                                    <td>India</td>
                                    <td>₹21 crore</td>
                                    <td>
                                        <Button onClick={handleShow}>
                                            <i className="fa-solid fa-square-arrow-up-right fa-xl"></i>
                                        </Button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Trent Boult</td>
                                    <td>Mumbai Indians</td>
                                    <td>Bowler</td>
                                    <td>New Zealand</td>
                                    <td>₹12.5 crore</td>
                                    <td>
                                        <Button variant="primary" onClick={handleShow}>
                                            <i className="fa-solid fa-square-arrow-up-right fa-xl"></i>
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>MS Dhoni</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Players
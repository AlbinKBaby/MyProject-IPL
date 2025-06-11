import React from 'react'
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import DashboardAdmin from './DashboardAdmin';
import Collapse from 'react-bootstrap/Collapse';


function Players() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [open, setOpen] = useState(false);


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
                    <div>
                        <div className='d-flex justify-content-between form-control'>
                            <h4>Captian</h4>
                            <p>Wicketkeeper Batter</p>
                        </div>
                        <div className='d-flex justify-content-evenly form-control'>
                            <span>DOB: 07 July 1981</span>
                            <span>Matches : 276</span>
                        </div>
                            <div className='d-flex justify-content-center'>
                                <img src="https://documents.iplt20.com/ipl/IPLHeadshot2025/57.png" alt=""
                                style={{ width: '250px' }} />
                            </div>
                            <div>
                                <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                More
                            </Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                    A living legend of the game, MS Dhoni will once again don the CSK jersey in TATA IPL 2025.
                                    The five-time IPL-winning captain, known for his calm demeanour and astute leadership,
                                    continues to be a pillar of strength for the franchise. Dhoni has amassed over 5000 runs 
                                    and effected close to 200 dismissals behind the stumps. While his role as a batter has 
                                    evolved over the years, his ability to finish games remains unmatched. Retained as an uncapped player,
                                     the CSK talisman will be crucial both as a mentor and a player as the franchise aims for a record sixth IPL title.
                                </div>
                            </Collapse>
                           


                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Edit Player
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
import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import AssoDash from './AssoDash';
import { useState } from 'react';

function AddPlayer() {
    const [formData, setFormData] = useState({
        specialization: '',
        style: ''
    });


    const handleSpecializationChange = (e) => {
        const value = e.target.value;
        setFormData({
            ...formData,
            specialization: value,
            style: '' // reset style when specialization changes
        });
    };

    const handleStyleChange = (e) => {
        setFormData({
            ...formData,
            style: e.target.value
        });
    };

    const getStyleOptions = () => {
        switch (formData.specialization) {
            case 'Batsman':
                return ['Left-hand Batsman', 'Right-hand Batsman'];
            case 'Bowler':
                return ['Fast Bowler', 'Spin Bowler'];
            case 'All-rounder':
                return ['Left-hand Batsman / Fast Bowler ', 'Left-hand Batsman/Spin Bowler',
                    'Right-hand Batsman/Fast Bowler', 'Right-hand Batsman/Spin Bowler'];
            default:
                return [];
        }
    };

    return (
        <>

            <div className='d-flex '>
                <AssoDash />

                <div className='d-flex justify-content-center align-items-start mt-2 p-3 ms-3 w-75 '
                    style={{ background: '#ddd', borderRadius: 10 }}>
                    <Form className='w-100' >
                        <Row className="mb-2">
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Name"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="validationCustom01">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Email"
                                    type="email"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="5" controlId="validationCustom01">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    required
                                    type="date"
                                    placeholder="Date"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="7" controlId="validationCustom01">
                                <Form.Label>Nationality</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Nationality"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="3" >
                                <Form.Label>Specialization</Form.Label>
                                <Form.Control
                                    name="specialization"
                                    as="select"
                                    required
                                    value={formData.specialization}
                                    onChange={handleSpecializationChange}
                                >
                                    <option value="" disabled>Select Specialization</option>
                                    <option value="Batsman">Batsman</option>
                                    <option value="Bowler">Bowler</option>
                                    <option value="All-rounder">All-rounder</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="5" >
                                <Form.Label>Style</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="style"
                                    required
                                    value={formData.style}
                                    onChange={handleStyleChange}
                                >
                                    <option value="" disabled>Select Style</option>
                                    {getStyleOptions().map((styleOption) => (
                                        <option key={styleOption} value={styleOption}>
                                            {styleOption}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group as={Col} md="3" >
                                <Form.Label>Wicket Keeper</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="Wicket Keeper">
                                    <option value="NO">No</option>
                                    <option value="Yes">Yes</option>

                                </Form.Control>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="6 mt-3" >
                                <Form.Label>Home </Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Indian/International"
                                    type="text"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6 mt-3" >
                                <Form.Label>Base Price </Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Price"
                                    type="number"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col} md="4 mt-3" >
                                <Form.Label>Matches </Form.Label>
                                <Form.Control
                                    required
                                    placeholder="No Of matches"
                                    type="number"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4 mt-3" >
                                <Form.Label>Runs </Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Runs"
                                    type="number"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4 mt-3" >
                                <Form.Label>Wickets </Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Wickets"
                                    type="number"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                         <Form.Group as={Col} md="6 mt-3" >
                                <Form.Label>Profile Photo</Form.Label>
                                <Form.Control
                                    required
                                    placeholder="Price"
                                    type="file"
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        <Button className='mt-4' type="submit">Submit form</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default AddPlayer    
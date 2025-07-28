import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import AssoDash from './AssoDash';
import { useDispatch, useSelector } from 'react-redux';
import { registerPlayer, resetPlayerState } from '../Redux/Slice/playerSlice'; // adjust path

function AddPlayer() {
    const dispatch = useDispatch();
    const { loading, success, error, message } = useSelector((state) => state.player);

    const [formData, setFormData] = useState({
        pname: '',
        email: '',
        date: '',
        nationality: '',
        specialization: '',
        style: '',
        wk: '',
        home: '',
        baseprice: '',
        matches: '',
        runs: '',
        wickets: '',
        photo: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSpecializationChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            specialization: e.target.value,
            style: '',
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const requiredFields = [
            'pname', 'email', 'date', 'nationality', 'specialization', 'style',
            'wk', 'home', 'baseprice', 'matches', 'runs', 'wickets', 'photo'
        ];


        for (let field of requiredFields) {
            if (!formData[field]) {
                alert(`Please fill the ${field} field`);
                return;
            }
        }
        const data = new FormData();
        for (let key in formData) {
            data.append(key, formData[key]);

        }

        dispatch(registerPlayer(formData));
    };

    useEffect(() => {
        if (success) {
            alert("Success");
            setFormData({
                pname: '',
                email: '',
                date: '',
                nationality: '',
                specialization: '',
                style: '',
                wk: '',
                home: '',
                baseprice: '',
                matches: '',
                runs: '',
                wickets: '',
                photo: '',
            });
            dispatch(resetPlayerState());
        }

        if (error) {
            alert(error);
            dispatch(resetPlayerState());
        }
    }, [success, error, message, dispatch]);

    const getStyleOptions = () => {
        switch (formData.specialization) {
            case 'Batsman':
                return ['Left-hand Batsman', 'Right-hand Batsman'];
            case 'Bowler':
                return ['Fast Bowler', 'Spin Bowler'];
            case 'All-rounder':
                return [
                    'Left-hand Batsman / Fast Bowler',
                    'Left-hand Batsman/Spin Bowler',
                    'Right-hand Batsman/Fast Bowler',
                    'Right-hand Batsman/Spin Bowler',
                ];
            default:
                return [];
        }
    };

    return (
        <div className='d-flex'>
            <AssoDash />
            <div className='d-flex justify-content-center align-items-start mt-2 p-3 ms-3 w-75' style={{ background: '#ddd', borderRadius: 10 }}>
                <Form className='w-100' onSubmit={handleSubmit}>
                    <Row className="mb-2">
                        <Form.Group as={Col} md="6">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="pname" required value={formData.pname} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" required value={formData.email} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} md="5">
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date" name="date" required value={formData.date} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} md="7">
                            <Form.Label>Nationality</Form.Label>
                            <Form.Control type="text" name="nationality" required value={formData.nationality} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} md="3">
                            <Form.Label>Specialization</Form.Label>
                            <Form.Control as="select" name="specialization" required value={formData.specialization} onChange={handleSpecializationChange}>
                               <option value="" disabled>Select Specialization</option>
                                <option value="Batsman">Batsman</option>
                                <option value="Bowler">Bowler</option>
                                <option value="All-rounder">All-rounder</option>
                            </Form.Control>
                        </Form.Group>

                                
                        <Form.Group as={Col} md="5">
                            <Form.Label>Style</Form.Label>
                            <Form.Control as="select" name="style" required value={formData.style} onChange={handleChange}>
                                <option value="" disabled>Select Style</option>
                                {getStyleOptions().map((styleOption) => (
                                    <option key={styleOption} value={styleOption}>{styleOption}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} md="3">
                            <Form.Label>Wicket Keeper</Form.Label>
                            <Form.Control as="select" name="wk" required value={formData.wk} onChange={handleChange}>
                                <option value="" disabled>Select</option>
                                <option value="NO">No</option>
                                <option value="Yes">Yes</option>
                            </Form.Control>
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} md="6" className="mt-3">
                            <Form.Label>Home</Form.Label>
                            <Form.Control type="text" name="home" required placeholder="Indian/International" value={formData.home} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} md="6" className="mt-3">
                            <Form.Label>Base Price</Form.Label>
                            <Form.Control type="number" name="baseprice" required placeholder="Price" value={formData.baseprice} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group as={Col} md="4" className="mt-3">
                            <Form.Label>Matches</Form.Label>
                            <Form.Control type="number" name="matches" required value={formData.matches} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mt-3">
                            <Form.Label>Runs</Form.Label>
                            <Form.Control type="number" name="runs" required value={formData.runs} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group as={Col} md="4" className="mt-3">
                            <Form.Label>Wickets</Form.Label>
                            <Form.Control type="number" name="wickets" required value={formData.wickets} onChange={handleChange} />
                        </Form.Group>
                    </Row>

                    <Form.Group as={Col} md="6" className="mt-3">
                        <Form.Label>Profile Photo</Form.Label>
                        <Form.Control type="text" name="photo" required onChange={handleChange} />
                    </Form.Group>

                    <Button className='mt-4' type="submit" disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit Form'}
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default AddPlayer;

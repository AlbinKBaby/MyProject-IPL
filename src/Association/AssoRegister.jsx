import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerAsso } from '../Redux/Slice/userSlice';
import { useNavigate } from 'react-router-dom';

function AssoRegister() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    state: '',
    role: 'association',
  });

  useEffect(() => {
    if (status === 'succeeded') {
      alert('Association registered');
      navigate('/login');
    }
  }, [status, navigate]);

  const handleSubmit = () => {
    const { name, email, password, state } = formData;
    if (!name || !email || !password || !state) return alert('Fill all fields');

    dispatch(registerAsso(formData));
  };

  return (
    <Form className='w-50 mx-auto mt-5'>
      <h3 className='text-center'>Association Register</h3>
      <Form.Group className='mb-3'>
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
      </Form.Group>   
      <Form.Group className='mb-3'>
        <Form.Label>State</Form.Label>
        <Form.Select
          name="state"
          id="state"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          className="form-select"
        >
          <option value="">-- Select State --</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Maharashtra">Maharashtra</option>
          <option value="Bihar">Bihar</option>
          <option value="West Bengal">West Bengal</option>
          <option value="Madhya Pradesh">Madhya Pradesh</option>
          <option value="Tamil Nadu">Tamil Nadu</option>
          <option value="Rajasthan">Rajasthan</option>
          <option value="Karnataka">Karnataka</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Andhra Pradesh">Andhra Pradesh</option>
          <option value="Odisha">Odisha</option>
          <option value="Telangana">Telangana</option>
          <option value="Kerala">Kerala</option>
          <option value="Jharkhand">Jharkhand</option>
          <option value="Assam">Assam</option>
        </Form.Select>
      </Form.Group>

      <Button onClick={handleSubmit}>Register</Button>
      {error && <p className='text-danger'>{error}</p>}
    </Form>
  );
}

export default AssoRegister;

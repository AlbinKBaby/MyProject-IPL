import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { registerAdmin } from '../Redux/Slice/userSlice';
import { useNavigate } from 'react-router-dom';

function RegisterAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'admin',
  });

  useEffect(() => {
    if (status === 'succeeded') {
      alert('Admin registered');
      navigate('/login');
    }
  }, [status, navigate]);

  const handleSubmit = () => {
    const { name, email, password } = formData;
    if (!name || !email || !password) return alert('Fill all fields');

    dispatch(registerAdmin(formData));
  };

  return (
    <Form className='w-50 mx-auto mt-5'>
      <h3 className='text-center'>Admin Register</h3>
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
      <Button onClick={handleSubmit}>Register</Button>
      {error && <p className='text-danger'>{error}</p>}
    </Form>
  );
}

export default RegisterAdmin;

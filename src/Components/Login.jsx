import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../Redux/Slice/userSlice';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn, role, status, error } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isLoggedIn) {
      if (role === 'admin') navigate('/admin');
      else if (role === 'team') navigate('/user');
      else if (role === 'association') navigate('/assoland');
    }
  }, [isLoggedIn, role, navigate]);

  const handleLogin = () => {
    if (!formData.email || !formData.password) {
      alert("Enter both fields");
      return;
    }
    dispatch(loginUser(formData));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div style={{ width: '400px', background: '#ddd', padding: 30, borderRadius: 10 }}>
        <h3 className="text-center">Login</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            onClick={handleLogin}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Logging in...' : 'Login'}
          </Button>

          {error && <p className="text-danger mt-2">{error}</p>}
        </Form>
      </div>
    </div>
  );
}

export default Login;

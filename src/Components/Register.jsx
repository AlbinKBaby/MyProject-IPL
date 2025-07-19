import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Redux/Slice/userSlice'; // ✅ adjust path

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const { status, error } = useSelector((state) => state.user);

  // Form state
  const [userData, setUserData] = useState({
    name: '',
    captianName: '',
    email: '',
    password: '',
    coachName: '',
    role: 'team',
  
  });

  const [selectedFile, setSelectedFile] = useState(null);

  // ✅ Navigate on success
  useEffect(() => {
    if (status === 'succeeded') {
      alert('User registered successfully');
      setUserData({
        name: '',
        captianName: '',
        email: '',
        password: '',
        coachName: '',
        role: 'team',
       
      });
      setSelectedFile(null);
      navigate('/Login');
    }
  }, [status, navigate]);

  // 🔁 Submit handler
  const handleRegister = async () => {
    const { name, captianName, email, password, coachName,  } = userData;

    if (!name || !captianName || !email || !password || !coachName  ) {
      alert('Please fill out all the required fields');
      return;
    }

    const formData = new FormData();
    Object.entries(userData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (selectedFile) {
      formData.append('logo', selectedFile);
    }

    dispatch(registerUser(formData));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: '100vh', background: 'rgb(61, 68, 64)' }}
    >
      <div
        style={{
          backgroundColor: 'rgb(155, 144, 253)',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 0 35px rgba(0, 0, 0, 0.46)',
          width: '550px',
        }}
      >
        <Form>
          <h3 className="text-center">Team Register</h3>

          <div className="d-flex mt-3">
            <Form.Group className="mb-2 w-50" controlId="formTeamName">
              <Form.Label>Team Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Team Name"
                value={userData.name}
                onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="ms-2 w-50" controlId="formCaptainName">
              <Form.Label>Captain Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Captain Name"
                value={userData.captianName}
                onChange={(e) => setUserData({ ...userData, captianName: e.target.value })}
              />
            </Form.Group>
          </div>

          <div className="d-flex mt-2">
            <Form.Group className="w-50" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={userData.email}
                onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="ms-2 mb-2 w-50" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={userData.password}
                onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              />
            </Form.Group>
          </div>

          <Form.Group className="mb-2" controlId="formCoachName">
            <Form.Label>Coach Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Coach Name"
              value={userData.coachName}
              onChange={(e) => setUserData({ ...userData, coachName: e.target.value })}
            />
          </Form.Group>


          <Form.Group controlId="formFile" className="mb-2 mt-2">
            <Form.Label>Team LOGO Image</Form.Label>
            <Form.Control
              type="file"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </Form.Group>

          {status === 'loading' ? (
            <Button variant="primary" disabled>
              Registering...
            </Button>
          ) : (
            <Button variant="primary" type="button" onClick={handleRegister}>
              Register
            </Button>
          )}

          {error && <p className="text-danger mt-2">{error}</p>}
        </Form>
      </div>
    </div>
  );
}

export default Register;

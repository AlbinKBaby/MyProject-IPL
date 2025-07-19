import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function SidebarTeam() {
  const linkStyle = { textDecoration: 'none', color: 'white' };

  return (
    <div className='d-flex'>
      <div className="bg-dark text-white p-3" style={{ width: '250px', height: '100vh' }}>
        <ul className="flex-column p-0" style={{ listStyle: 'none' }}>
          <li className="mb-2 mt-3">
            <Link to="/userprofile" style={linkStyle}>
              <Button className="w-100">My Profile</Button>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/userplayers" style={linkStyle}>
              <Button className="w-100">Players</Button>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/fund" style={linkStyle}>
              <Button className="w-100">Fund</Button>
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/requests" style={linkStyle}>
              <Button className="w-100">Requests</Button>
            </Link>
          </li>
          <li className="mb-2 mt-4">
            <Link to="/userauction" style={linkStyle}>
              <Button className="w-100">Auction</Button>
            </Link>
          </li>
          <li className="mb-2 mt-4">
            <Link to="/" style={linkStyle}>
              <Button className="w-100 bg-danger">Logout</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarTeam;

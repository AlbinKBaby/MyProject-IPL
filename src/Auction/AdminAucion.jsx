import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';


// Dummy components for illustration
const PlayersList = () => (
   
  <div>
    <h2>Players List</h2>
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
            <Button >
              <i className="fa-solid fa-square-arrow-up-right fa-xl"></i>
            </Button>
          </td>
        </tr>
      </tbody>
    </Table>  </div>

);

const AuctionRules = () => (
  <div className='form-control'>
    <h2 className='text-center'>Auction Rules</h2>
    <ul >
      <li className='form-control'><Button>Each team has a fixed budget.</Button></li>
      <li  className='form-control'><Button>Minimum bid increment: ₹1 lakh.</Button></li>
      <li  className='form-control'><Button>Time per player: 60 seconds.</Button></li>
      {/* Add more rules as needed */}
    </ul>
    {/* Optionally: Add form to edit rules */}
  </div>
);

const MoreFunctions = () => (
  <div className='form-control'>
    <h2 className='text-center'>Admin Functions</h2>
    <ul>
      <li className='form-control'>
        <Button>Add/Edit/Delete Players</Button></li>
      <li className='form-control'><Button>Start/Stop Auction</Button></li>
      <li  className='form-control'><Button>View Reports</Button></li>
      {/* Add more admin functionalities */}
    </ul>
  </div>
);

const AdminAucion = () => {
  const [selected, setSelected] = useState('players');


  const renderContent = () => {
    switch (selected) {
      case 'players':
        return <PlayersList />;
      case 'rules':
        return <AuctionRules />;
      case 'more':
        return <MoreFunctions />;
      default:
        return <PlayersList />;
    }
  };

  return (
    <div
      style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{ background: '#222', color: '#fff', padding: '1rem' }}>
        <h1>IPL Auction Admin Dashboard</h1>
      </header>

      {/* Main content area with sidebar and content */}
      <div className='form-control '
        style={{ flex: 1, display: 'flex' }}>
        {/* Sidebar */}
        <nav className='form-control bg-dark'
          style={{ width: 220, background: '#f4f4f4', padding: '1rem' }}>
          <Button onClick={() => setSelected('players')} style={{ width: '100%', marginBottom: 10 }}>
            Players

          </Button>
          <Button onClick={() => setSelected('rules')} style={{ width: '100%', marginBottom: 10 }}>
            Auction Rules
          </Button>
          <Button onClick={() => setSelected('more')} style={{ width: '100%' }}>
            More Functions
          </Button>
        </nav>

        {/* Main Content */}
        <main style={{ flex: 1, padding: '2rem', background: '#fff' }}>
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminAucion;

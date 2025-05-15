import React from 'react'
import Table from 'react-bootstrap/Table';
import DashboardAdmin from './DashboardAdmin';


function Teams() {
  return (
    <>
      <div className='d-flex'>
        <DashboardAdmin />
        <div className='mt-2 form-control '>
         <h2 className='w-100 fw-bold text-center mb-3'>Ipl Teams</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Team Name</th>
                <th>Captian Name</th>
                <th>Username</th>
                <th>password</th>
                <th>Stats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Chennai Super Kings</td>
                <td>Mahindra Singh Dhoni</td>
                <td>csk@ipl.com</td>
                <td>cskipl</td>
                <td><i className="fa-solid fa-square-arrow-up-right fa-xl"></i></td>
              </tr>
              <tr>
                <td>2</td>
                <td>Rajasthan Royals</td>
                <td>Sanju Samson</td>
                <td>rr@ipl.com</td>
                <td>rripl</td>
                <td><i className="fa-solid fa-square-arrow-up-right fa-xl"></i></td>
              </tr>
              <tr>
                <td>3</td>
                <td>Royal Challengers Bengaluru</td>
                <td>Rajat Patidar</td>
                <td>rcb@ipl.com</td>
                <td>rcbipl</td>
                <td><i className="fa-solid fa-square-arrow-up-right fa-xl"></i></td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

    </>
  )
}

export default Teams
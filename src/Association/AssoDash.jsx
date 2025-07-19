import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';


function AssoDash() {
  return (
    <>
      <div className='d-flex '>
        <div className="bg-dark text-white p-3" style={{ width: '250px', height: '100vh' }}>

          <ul className=" flex-column" style={{ listStyle: 'none' }}>
            <li className="mb-2 mt-3">
              <Link to={'/'}>
                <Button className='w-100'>
                  <a className=" text-white" style={{ textDecoration: "none" }} >Dashboard</a>
                </Button>
              </Link>
            </li>
            <li className=" mb-2">
              <Link to={'/addplayer'}>
                <Button className='w-100'>
                  <a className=" text-white" style={{ textDecoration: "none" }} >Add Player</a>
                </Button>
              </Link>
            </li>
            <li className=" mb-2">
             
            </li>
            <li className=" mb-2" >
              <Link to={'/'}>
                <Button className='w-100'>
                  <a className=" text-white" style={{ textDecoration: 'none' }}>Requests</a>
                </Button>
              </Link>
              
              <Link to={'/'}>
                <Button className='mt-5 w-100'>
                  <a className=" text-white" style={{ textDecoration: 'none' }}>Logout</a>
                </Button>
              </Link>
            </li>

          </ul>
        </div>


      </div>
    </>
  )
}

export default AssoDash
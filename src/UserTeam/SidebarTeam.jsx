import React from 'react'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function SidebarTeam() {
  return (
   <>
     <div className='d-flex '>
        <div className="bg-dark text-white p-3" style={{ width: '250px', height: '100vh' }}>
          <ul className=" flex-column" style={{ listStyle: 'none' }}>
            <li className="mb-2 mt-3">
            <Link to={'/userprofile'}>
              <Button className='w-100'>
                <a className=" text-white" style={{ textDecoration: "none" }} >My Profile</a>
              </Button>
              </Link>
            </li>
            <li className=" mb-2">
              <Link to={'/userplayers'}>
              <Button className='w-100'>
                <a className=" text-white" style={{ textDecoration: "none" }} >Players</a>
              </Button>
              </Link>
            </li>
            <li className=" mb-2">
               <Link to={'/fund'}>
              <Button className='w-100'>
                <a className="text-white" style={{ textDecoration: 'none' }} >Fund</a>
              </Button>
              </Link>
            </li>
            <li className=" mb-2" >
               <Link to={'/'}>
              <Button className='w-100'>
                <a className=" text-white" style={{ textDecoration: 'none' }}>Requests</a>
              </Button>
              </Link>
             <Link to={'/userauction'}>
              <Button className='w-100 mt-5' >
                <a className=" text-white" style={{ textDecoration: 'none' }}>Auction</a>
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

export default SidebarTeam
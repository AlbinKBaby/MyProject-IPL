import React from 'react'
import SidebarTeam from './SidebarTeam'
import Button from 'react-bootstrap/Button';

function UserFund() {
  return (
    <>
      <div className='d-flex'>
        <SidebarTeam/>
     <div className='p-3 w-100 '>
     <h2 className=' fw-bold text-center mb-3'>Team Players</h2>
   
         <Button className='ms-4 w-25 p-4 m-2'
          variant="dark">Total Fund</Button>
           <Button className='ms-4 w-25 p-4 m-2'
          variant="dark">Top Buys Players</Button>
           <Button className='ms-4 w-25 p-4 m-2'
          variant="dark">Fund Remaining</Button>
          
    </div>
    </div>
    </>
  )
}

export default UserFund
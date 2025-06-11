import React from 'react'
import SidebarTeam from './SidebarTeam'
import Button from 'react-bootstrap/Button';


function UserProfile() {
  return (
   <>

   <div className='d-flex'>
    <SidebarTeam/>
     <div className='p-3 w-100 '>
     <h2 className=' fw-bold text-center mb-3'>Team name</h2>
   
         <Button className='ms-4 w-25 p-4 m-2'
          variant="dark">View my Profile</Button>
           <Button className='ms-4 w-25 p-4 m-2'
          variant="dark">Edit my Profile</Button>
           <Button className='ms-4 w-25 p-4 m-2'
          variant="dark">Player Requests</Button>
           <Button className='ms-4 w-25 p-4 m-2'
          variant="dark">Queries</Button>
    </div>
   </div>
   </>
  )
}

export default UserProfile
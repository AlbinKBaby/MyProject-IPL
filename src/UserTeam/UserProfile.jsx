import React from 'react'
import SidebarTeam from './SidebarTeam'
import Button from 'react-bootstrap/Button';


function UserProfile() {
  return (
   <>
   <div className='d-flex'>
    <SidebarTeam/>
    <div>
         <Button variant="dark">Dark</Button>
    </div>
   </div>
   </>
  )
}

export default UserProfile
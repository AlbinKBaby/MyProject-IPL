import React from 'react'
import SidebarTeam from './SidebarTeam'
import Button from 'react-bootstrap/Button';


function UserPlayers() {
  return (
    <>
      <div className='d-flex'>
        <SidebarTeam />
        <div className='p-3 w-100 '>
          <h2 className=' fw-bold text-center mb-3'>Team Players</h2>

          {/* player need to sell */}
          <Button className='ms-4 w-25 p-4 m-2'
            variant="dark">Total Players</Button>
          <Button className='ms-4 w-25 p-4 m-2'
            variant="dark">Sold Players</Button>
          <Button className='ms-4 w-25 p-4 m-2'
            variant="dark">Unsold Players</Button>
          <Button className='ms-4 w-25 p-4 m-2'
            variant="dark">Player Requests</Button>
        </div>
      </div>
    </>
  )
}

export default UserPlayers
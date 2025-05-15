import React from 'react'
import DashboardAdmin from './DashboardAdmin'

function AdminReq() {
  return (
    <>
      <div className='d-flex'>
        <DashboardAdmin />
    
        <div className='w-100 mt-2'>
           <h2 className=' fw-bold text-center mb-3'>Requests</h2>
          <h4 className='ms-3'>No Requests found</h4>
        </div>
      </div>
    </>
  )
}

export default AdminReq
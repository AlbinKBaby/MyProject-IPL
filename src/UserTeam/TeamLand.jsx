import React from 'react'
import SidebarTeam from './SidebarTeam'

function TeamLand() {
  return (
    <>
      <div className='d-flex '>
        <SidebarTeam />
       

       <div className='w-100'>
         <div >
          <h2 className='w-100 fw-bold text-center mb-3 mt-3'>Chennai Super Kings</h2>
        </div>
         <div className='d-flex justify-content-center align-items-center w-100 '>
        
          <form className='form-control mt-3 p-3 ms-3 w-50  '>
            <div class="mb-3">
              <label className="form-label form-control">Captian Name : MS Dhoni</label>
            </div>
            <div class="mb-3">
              <label className="form-label form-control ">Coach name :Stephen Fleming </label>
            </div>
            <div class="mb-3">
              <label className="form-label form-control">Owner : Chennai Super Kings Cricket Limited</label>
            </div>
            <div class="mb-3">
              <label className="form-label form-control">Venue : M. A. Chidambaram Stadium </label>
            </div>
          </form>
        </div>
       </div>
      </div>
    </>
  )
}

export default TeamLand
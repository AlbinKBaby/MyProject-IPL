import React from 'react'
import ball from '../assets/ballpng.png'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>

      <nav className="navbar navbar-expand-lg " data-bs-theme="dark"
       style={{ background: 'rgb(78, 83, 80)', }}
       >
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a href=""><img src={ball} style={{ width: "50px" }} /></a>
          <a href='' style={{ textDecoration: 'none', color: 'black', fontWeight: '700' }}>IPL Auction</a>
          <div className="collapse navbar-collapse " id="navbarColor01" >
           <div >
           <ul className="navbar-nav ms-5" >
              <li class="nav-item " >
                <a class="nav-link ms-3" href="#" style={{color:'black'}}>Home </a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#" style={{color:'black'}}>Teams</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#" style={{color:'black'}}>Gallery</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ms-4" href="#" style={{color:'black'}}>Contact US</a>
              </li>
              {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle  ms-4" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">More</a>
          <div class="dropdown-menu show" data-bs-popper="static">
            <a class="dropdown-item" href="#">Players</a>
            <a class="dropdown-item" href="#">Sponsers</a>
            <a class="dropdown-item" href="#">Something else here</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Separated link</a>
          </div>
        </li> */}
            </ul>
           </div>
          <div className='ms-auto'>
          <Link to={'/login'}>
            <button type="button" className="btn btn-dark ms-auto">Login<i className="fa-solid fa-circle-user ms-2"></i></button>
          </Link>
          {/* <Link to={'/register'}>
            <button type="button" className="btn btn-dark ms-2">Register<i className="fa-solid fa-circle-user ms-2"></i></button>
            </Link> */}
          </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
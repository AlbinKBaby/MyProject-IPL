import React from 'react'

function Footer() {
  return (
    <>
    
    <footer id="footer">
        <div classname="container fluid">
            <div classname="row">
                <div classname="col-sm-6">
                   <p> &copy; 2015 Company Name. </p>
                </div>
                <div classname="col-sm-6">
                    <ul classname="d-flex" style={{color:"black"}} >
                        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-linkedin"></i></a></li> 
                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
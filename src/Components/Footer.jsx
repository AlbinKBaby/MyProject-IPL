import React from 'react'
import ball from '../assets/ballpng.png'



function Footer() {
    return (
        <>

            <div className="d-flex justify-content-center align-items-center bg-dark text-white  p-4"
                style={{
                    background: 'linear-gradient(to right,rgb(130, 158, 3),rgb(48, 25, 131))'
                }}>
                <div className="overview  mb-4" style={{ maxWidth: "400px" }}>
                    <a href=""><img src={ball} style={{ width: "50px" }} /></a>
                    <span style={{ fontWeight: "700" }}>IPL Auction </span>
                    <p style={{ textAlign: "justify" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non esse
                        asperiores voluptate tenetur? Incidunt eius, repudiandae error
                        recusandae quaerat voluptas assumenda harum amet.
                    </p>
                </div>

                <div className="d-flex gap-5 mb-4 ms-3">
                    <div className="links d-flex flex-column text-center"><h4>LINKS</h4>
                        <a href="" style={{ textDecoration: 'none', color: 'white' }} >LandingPage</a>
                        <a href="" style={{ textDecoration: 'none', color: 'white' }} >Home</a>
                        <a href="" style={{ textDecoration: 'none', color: 'white' }} >WATCH HISTORY</a>
                    </div>
                    <div className="links d-flex flex-column text-center"><h4>GUIDES</h4>
                        <a href="#" className="text-white text-decoration-none">About Us</a>
                        <a href="#" className="text-white text-decoration-none">Services</a>
                        <a href="#" className="text-white text-decoration-none">Contact</a>
                    </div>
                </div>

                <div className="text-center">
                    <h4>CONTACT US</h4>
                    <div className="mt-2 ms-3">
                        <input type="email" placeholder="Enter your email" className="form-control w-100 mb-2" />
                        <button className="btn btn-warning w-100">SUBSCRIBE</button>
                    </div>
                    <div className="d-flex gap-3 justify-content-center p-4 bg-dark">
                        <i className="fa-brands fa-instagram fa-lg" style={{ color: "#E4405F" }}></i>
                        <i className="fa-solid fa-envelope fa-lg" style={{ color: "#D44638" }}></i>
                        <i className="fa-brands fa-linkedin fa-lg" style={{ color: "#0077B5" }}></i>
                        <i className="fa-brands fa-telegram fa-lg" style={{ color: "#0088cc" }}></i>
                    </div>
                </div >
                
            </div>
            <div style={{backgroundColor:'black',color:'white'}}>
                    <p className=" d-flex justify-content-center align-items-center ">&copy; 2025 Media Player. All rights reserved.</p>
                </div>
        </>
    )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
  <nav className=" navbar navbar-expand-lg bg-primary bg-dark border-bottom border-light" data-aos="fade-down" data-aos-duration="1500">
    <div className='container yo'>  
    
      <div className="container-fluid ">
      <Link to ="/">
        <a id="logo" className="navbar-brand position-absolute " href="#">
          <span id="logoH">
            <img  src={require('../assets/medical.png')} height="80"width="250" border-radius="50%" alt=""></img>
            </span></a>
        
        </Link>
        
        <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon navbar-light"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
          <ul className="navbar-nav  ">
            <li className="nav-item homel">
              <a className="nav-link " aria-current="page" href="#"><Link to="/"className=' Link2'  >Home</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link className=' Link2'  to="/about">About</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact Us</a>
            </li>
          </ul>


   
   
        </div>
      </div>
      </div>
    </nav>
      )
}
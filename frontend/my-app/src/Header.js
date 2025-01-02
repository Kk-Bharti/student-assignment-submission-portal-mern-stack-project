import React from 'react'
import './index.css';
import logo from './images/logo.jpg'
import ailogo from './ailogo.jpeg'
import { Link, useNavigate } from 'react-router-dom';


export default function Header() {

  const navigate = useNavigate();

  function loginpage (){

    navigate("/login")
  }
  return (
    

    <nav class="container-fluid navbar navbar-expand-lg navbar-light  " id="nav">
     <img src={logo} id='logo' ></img>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-auto ">
        <li class="nav-item active">
          <Link class="nav-link" to="/" ><button id="b1" class="but">Home</button></Link>
        </li>
        <li class="nav-item active">
          <Link class="nav-link" to="/abute" ><button id="b2"  class="but">About</button></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact" ><button id="b3" class="but">Contact info</button></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link "  to='/login' ><button id="b4" class="but">Login</button></Link>
        </li>
        
      </ul>
    </div>
  </nav>
  )
}

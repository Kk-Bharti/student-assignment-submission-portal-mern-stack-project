import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';

function Footer() {

   
   return (
       <>
   <footer>
  <div class="footer-content">
    <div class="footer-section">
      <h4>About Us</h4>
      <p>this is a student Assignment Submission Portal</p>
    </div>
    <div class="footer-section">
      <h4>Quick Links</h4>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/abute'>About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Contact Us</h4>
      <p>
        <strong>Address:</strong> jalna<br/>
        <strong>Email:</strong> keshavkb95@gmail.com<br/>
        <strong>Phone:</strong> (123) 456-7890
      </p>
    </div>
  </div>
  <div class="footer-bottom">
        &copy; <span id="currentYear"> 2024</span> Student Assignment Submission Portal. All rights reserved.
    {/* <p>&copy; 2023 Your Website Name. All Rights Reserved.</p> */}
  </div>
</footer>
   </>

  )
}

export default Footer
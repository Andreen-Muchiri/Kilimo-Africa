import React from 'react';
import './NavBar.css';

function NavBar(){
    return(
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class=" navbar container-fluid ">
    <a class="navbar-brand" href="#">
      Kilimo.Africa
      </a>
      <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
   <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">ABOUT</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">SERVICES</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">NEWS LETTER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">CONTACT</a>
        </li>
       </ul>
       <button class="btn btn-outline-success" type="submit">LOGIN</button>
       <button class="btn btn-outline-success" type="submit">SIGN UP</button>

    </div>
  </div>
</nav> 

    )
}
export default NavBar;

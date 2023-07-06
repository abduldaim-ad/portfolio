import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet, Link } from "react-router-dom";
import React from 'react'
import './App.css'
import MenuIcon from '@mui/icons-material/Menu';
// import Landing from './Landing'
// import Resume from './Resume'
// import Projects from './Projects'
import ImageAvatars from './ImageAvatars';

const App = () => {
  const menuHandler = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav fixed-top") {
      x.className += " responsive";
    } else {
      x.className = "topnav fixed-top";
    }
  }

  const menuOpenClose = () => {  
    // Get the container element
    var btnContainer = document.getElementById("myTopnav");
    btnContainer.className = "topnav fixed-top";
    // Get all buttons with class="btn" inside the container
    var btns = btnContainer.getElementsByClassName("btn");

    // Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }
    // Add the active class to the current/clicked button
    this.className += " active";
  });
  }
  }

  return (
<div>
      <Outlet />

{/* <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary" 
      style={{
          paddingBottom: "1rem",
          boxShadow: "0 5px 8px #888888"
        }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Abdul Daim</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" onClick={menuOpenClose}></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/resume">About Me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/extra">Contact Us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> */}
<div className="topnav fixed-top" id="myTopnav">
  <a>
    <ImageAvatars/>
  </a>
  <a>
    <Link className='btn' aria-current="page" to="/" onClick={menuOpenClose} style={{color:"white", paddingTop:"7%", fontWeight:"bolder"}}>Abdul Daim</Link>
  </a>
  <a className='btn'>
    <Link aria-current="page" to="/" onClick={menuOpenClose} style={{fontWeight:"bolder"}}>Home</Link>
  </a>
  <a className='btn'>
    <Link aria-current="page" to="/resume" onClick={menuOpenClose} style={{fontWeight:"bolder"}}>About Me</Link>
  </a>
  <a className='btn'>
    <Link aria-current="page" to="/projects" onClick={menuOpenClose} style={{fontWeight:"bolder"}}>My Projects</Link>
  </a>
  <a className='btn'>
    <Link aria-current="page" to="/certifications" onClick={menuOpenClose} style={{fontWeight:"bolder"}}>My Certifications</Link>
  </a>
  <a className="icon" id="myIcon" onClick={menuHandler}>
    <MenuIcon/>
  </a>
</div>

    </div>
  );
}

export default App
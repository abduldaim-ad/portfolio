import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet, Link } from "react-router-dom";
import React from 'react'
import AppBar from './AppBar'
import Resume from './Resume'

const App = () => {
  return (
<div>

      <Outlet />

      
<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary" 
      style={{
          paddingBottom: "1rem",
          boxShadow: "0 5px 8px #888888"
        }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Abdul Daim</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
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
</nav>
      
    </div>
  );
}

export default App
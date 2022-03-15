import { Outlet, Link } from "react-router-dom";
import React from 'react'
import AppBar from './AppBar'
import Resume from './Resume'

const App = () => {
  return (
<div>
      <h1>Abdul Daim</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices"></Link> |{" "}
        <Link to="/resume">Resume</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Resume from './Resume'
import Extra from './extra'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/portfolio" element={<><App /><Resume/></>}>

        {/* element = {<Resume/>} temporarily removed */}
        <Route path="/resume"  />

        <Route path="/projects" element={<Extra />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

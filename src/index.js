import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Landing from './Landing'
import Resume from './Resume'
import Projects from './Projects'
//import Extra from './extra'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/portfolio" element={<><App/><Landing /></>}/>
        <Route path="/portfolio/resume" element={<><App/><Resume/></>} />
        <Route path="/portfolio/projects" element={<><App/><Projects/></>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

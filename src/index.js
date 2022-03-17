import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Resume from './Resume'
import Extra from './extra'

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route exact path="/" element={<><App /><Resume/></>}/>

        {/* element = {<Resume/>} temporarily removed */}
        <Route exact path="/resume"  element={<><App /><Resume/></>}/>

        <Route exact path="/projects" element={<><App /><Extra/></>}/>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

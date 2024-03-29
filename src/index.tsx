import React from 'react';
import ReactDOM from 'react-dom';
// import 'semantic-ui-css/semantic.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App/layout/style.css';
import App from './App/layout/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <App />    
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

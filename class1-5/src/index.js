import React from 'react';
import ReactDOM from 'react-dom';
  import './style.css';
import bookStore from "./models/bookStore";
import RouterComponent from "./RouterComponent.js";



ReactDOM.render(
  <RouterComponent bookStore={bookStore} />,
  document.getElementById('root')
);
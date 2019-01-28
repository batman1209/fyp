import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/light-bootstrap-dashboard.css';
import './css/animate.min.css';
import './css/pe-icon-7-stroke.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import 'bootstrap'; 
import 'font-awesome/css/font-awesome.css'
import jQuery from 'jquery'
//import Popper from 'popper.js';
import Sidebar from './Component/sidebar/sidebar';

class App extends Component {
  render() {
    return (
      <div>
       
          <Sidebar />
       
      </div>
    );
  }
}

export default App;

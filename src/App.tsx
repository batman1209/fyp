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
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from './Component/sidebar/sidebar';
import Roles from './page/Roles'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Route path="/roles" exact component={Roles} />
            <Route path="/roles/admin" exact component={Roles} />
            {/* <Route path="/login" exact component={Login} /> */}
            {/* <Route path="/Settings" exact component={Roles} /> */}
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
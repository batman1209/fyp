import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/light-bootstrap-dashboard.css';
import './css/animate.min.css';
import './css/pe-icon-7-stroke.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css'
//import jQuery from 'jquery'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from './Component/sidebar/sidebar';
import Roles from './page/Roles'
import Adduser from './page/Adduser';
import Settings from './page/settings';
import ChangeName from './page/changename';
import ChangeMail from './page/changemail';
import ChangePass from './page/changepassword';
import Login from './page/Login';
import Home from './page/home';
import UpdateUser from './page/updateuser';



class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <div className="col-md-2">
            <Sidebar role="admin" />
          </div>
         
          <div className="col-md-10">
            <Route path="/" exact component={Home} />
            <Route path="/roles" exact component={Roles} />
            <Route path="/roles/adduser" exact component={Adduser} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/settings/changename" exact component={ChangeName} />
            <Route path="/settings/changemail" exact component={ChangeMail} />
            <Route path="/settings/changepass" exact component={ChangePass} />
            <Route path="/login" exact component={Login} />
            <Route path="/updateuser"  exact component={UpdateUser} />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;

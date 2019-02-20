import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/light-bootstrap-dashboard.css';
import './css/animate.min.css';
import './css/pe-icon-7-stroke.css';
import 'bootstrap';
import 'font-awesome/css/font-awesome.css'
//import jQuery from 'jquery'
import { BrowserRouter as Router, Route, Redirect, withRouter } from "react-router-dom";
import Sidebar from './Component/sidebar/sidebar';
import Roles from './page/Roles'
import Adduser from './page/Adduser';
import Settings from './page/settings';
import ChangeName from './page/changename';
import ChangeMail from './page/changemail';
import ChangePass from './page/changepassword';
import Login from './page/Login';
import Home from './page/home';
import PrivateRoute from './Component/private-route/PrivateRoute';



class App extends Component<any, any> {
  constructor(props: any) {
    super(props)

  }
  render() {
    return (
      <Router>
        <div>
            <PrivateRoute path="/" exact component={Home} />
            <Route path="/roles" exact component={Roles} />
            <Route path="/adduser/:id?" exact component={Adduser} />
            <Route path="/settings" exact component={Settings} />
            <Route path="/changename" exact component={ChangeName} />
            <Route path="/changemail" exact component={ChangeMail} />
            <Route path="/changepass" exact component={ChangePass} />
            <Route path="/login" exact component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;

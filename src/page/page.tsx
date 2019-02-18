import * as React from 'react';
import { BrowserRouter as Router, Route, Redirect, withRouter } from "react-router-dom";
import Adduser from './Adduser';
import ChangeName from './changename';
import ChangeMail from './changemail';
import ChangePass from './changepassword';
import Home from './home';
import Login from './Login';
import Roles from './Roles';
import Settings from './settings';
import PrivateRoute from '../Component/private-route/PrivateRoute';
import Sidebar from '../Component/sidebar/sidebar';
import Try from '../Component/sidebar/sidebar';

  function Left(props : any) {
    return(
        <div>
        <Sidebar />
            {props.children}
        
    </div>
    )
   
}

 class Page extends React.Component<any , any> {
  
    render(){
        return(

<div>
    <Router>
        <Try />
        <Route path="/Page/" exact component={Home}/>
    </Router>
    
   
</div>

        )
    }

}

export default Left;
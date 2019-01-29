import * as React from 'react';
import { Link } from 'react-router-dom';
import "../Component/sidebar/sidebar";
import Sidebar from '../Component/sidebar/sidebar';

class Roles extends React.Component {

    render() {
        return (
            
            <div className="content" style={{ paddingTop: '70px' }}>
                <div className="container-fluid">
                    {/* <a href="@Url.Action("Adduser","Home")"> */}
                    <Link className="nav-link" to="/roles/Adduser">
                        <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px", color:"White" }}> Admin </button>
                    </Link>
                    <br />
                    <Link className="nav-link" to="/roles/Adduser">
                        {/* <a href="@Url.Action("Adduser","Home")"> */}
                        <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px", color:"White" }}> Teacher </button>
                    </Link>
                    <br />
                    <Link className="nav-link" to="/roles/Adduser">
                        {/* <a href="@Url.Action("Adduser","Home")">			 */}
                        <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px", color:"White" }}> TeamLead </button>
                    </Link>
                    <br />
                    <div className="row">
                    </div>


                </div>
            </div>
        );
    }
}
export default Roles;
import * as React from 'react';
import {Link} from 'react-router-dom';

class Settings extends React.Component{
    render(){
        return(
            <div className="content" style={{ paddingTop: '70px' }}>
                <div className="container-fluid">
                    {/* <a href="@Url.Action("Adduser","Home")"> */}
                    <Link className="nav-link" to="/settings/changename">
                        <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px", color:"White" }}> Change UserName </button>
                    </Link>
                    <br />
                    <Link className="nav-link" to="/settings/changemail">
                        {/* <a href="@Url.Action("Adduser","Home")"> */}
                        <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px", color:"White" }}> Change UserEmail </button>
                    </Link>
                    <br />
                    <Link className="nav-link" to="/settings/changepass">
                        {/* <a href="@Url.Action("Adduser","Home")">			 */}
                        <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px", color:"White" }}> Change Password </button>
                    </Link>
                    <br />
                    <div className="row">
                    </div>


                </div>
            </div>
        )
    }
}
export default Settings;
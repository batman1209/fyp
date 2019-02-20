import * as React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Component/sidebar/sidebar';

class Settings extends React.Component {


    render() {
        return (
            <div className="row">
                <div className=" col-lg-2">
                    <Sidebar />
                </div>
                <div className="col-lg-10">
                    <div className="content" style={{ paddingTop: '90px', backgroundColor: "rgba(255, 255, 255, 0.96)" }}>
                        <div className="container-fluid">
                            <Link className="nav-link" to="/changename">
                                <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px", color: "White" }}> Change UserName </button>
                            </Link>
                            <br />
                            <Link className="nav-link" to="/changemail">
                                <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px", color: "White" }}> Change UserEmail </button>
                            </Link>
                            <br />
                            <Link className="nav-link" to="/changepass">
                                <button type="button" className="btn btn-default btn-lg" style={{ backgroundColor: "gray", marginLeft: "30px", marginRight: "30px", marginTop: "30px", marginBottom: "30px", color: "White" }}> Change Password </button>
                            </Link>
                            <br />
                            <div className="row">
                            </div>
                        </div>
                    </div>
                   </div>
            </div>
        )
    }
}
export default Settings;
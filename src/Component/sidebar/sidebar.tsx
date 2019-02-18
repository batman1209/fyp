import * as React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
//import logo from "./img/login1.jpg";


const logo = require('../../img/login1.jpg');
class Sidebar extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        console.log(this.props.role)
    }

    render() {
        return (
            <div className="wrapper" >
                <div className="sidebar">
                    <div className="sidebar-wrapper">
                        <div className="logo">
                            <Link className='nav-bar' to="/">
                                <img className="rounded-circle" src={logo} alt='...' style={{ width: "150px", height: "130px" }} />
                            </Link>
                            <b className="text-center"> ADMIN</b>
                        </div>
                        <ul className="nav">
                            <li >
                                <Link className="nav-link" to="roles">
                                    <i className="pe-7s-add-user"> </i>
                                    <p >ADD ACCOUNT</p>
                                </Link>
                            </li>
                            <li className="w100">
                                <Link className="nav-link" to="">
                                    <i className="pe-7s-add-user"> </i>
                                    <p >Team LeaD</p>
                                </Link>
                            </li>

                            <li>
                                <Link className="nav-link" to="settings">
                                    <i className="pe-7s-add-user"> </i>
                                    <p>SETTINGS</p>
                                </Link>
                            </li>
                            <li>
                                <Link className="nav-link" to="login">
                                    <i className="pe-7s-power"></i>
                                    <p>logout</p>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="main-panel">
                    <nav className="navbar navbar-default navbar-fixed">
                        <div className="container-fluid">
                            <div className="navbar-header" >
                                <a className="navbar-brand" href="#"><b style={{ color: "#5f5d68 " }}>PLATFORM FOR APTITUDE TEST</b></a>
                            </div>
                            <div className="collapse navbar-collapse"> </div>
                        </div>
                    </nav>
                </div>
            </div>

        )
    }
}
export default Sidebar;
